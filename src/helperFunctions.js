import * as echarts from "echarts";

const statusColorMap = {
  LOW_NETWORK: "pink",
  INGNITION_ON: "red",
  IGNITION_OFF: "green",
};

export function formatGraphData(dataPoints, category) {
  return {
    type: "line",
    lineStyle: {
      type: category === "LOW_NETWORK" ? "dashed" : "solid",
      color: statusColorMap[category],
    },
    symbol: "none",
    areaStyle:
      category === "LOW_NETWORK"
        ? { color: "white" }
        : {
            color: {
              colorStops: [
                {
                  offset: 0,
                  color: "#ACD4FD",
                },
                {
                  offset: 1,
                  color: "#F5FAFF",
                },
              ],
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              type: "linear",
              global: false,
            },
          },
    data: dataPoints,
  };
}

export function normalizeData(data, lowNetworkPlots) {
  if (!data || !Array.isArray(data) || data.length === 0) {
    return [];
  }

  const isInLowNetworkPeriod = (timestamp) => {
    if (!lowNetworkPlots || !Array.isArray(lowNetworkPlots)) {
      return false;
    }

    return lowNetworkPlots.some(
      (period) => timestamp >= period.start_time && timestamp <= period.end_time
    );
  };

  const newData = data
    .map((point) => {
      const isLowNetwork = isInLowNetworkPeriod(point.device_timestamp);
      return {
        device_timestamp: Math.floor(point.device_timestamp / 1000) * 1000,
        category: isLowNetwork
          ? "LOW_NETWORK"
          : point.ignition
          ? "INGNITION_ON"
          : "IGNITION_OFF",
        level: point.level,
        data: point,
      };
    })
    .sort((b, a) => b.device_timestamp - a.device_timestamp);

  const finalData = [];
  let temp = [];
  for (let i = 0; i < newData.length; i++) {
    const point = newData[i];
    if (i === 0) {
      temp.push([point.device_timestamp, point.level, point.data]);
      continue;
    }

    const prev = newData[i - 1];

    if (point.category !== prev.category) {
      finalData.push(formatGraphData(temp, prev.category));
      temp = [[prev.device_timestamp, prev.level, prev.data]];
    }
    temp.push([point.device_timestamp, point.level, point.data]);

    if (i == newData.length - 1) {
      finalData.push(
        formatGraphData(temp, newData[newData.length - 1].category)
      );
    }
  }

  return finalData;
}

/**
 * Transforms the original data based on ignition changes, low network plots, and fuel timeline events
 * @param {Array} data - The original data array
 * @param {Array} lowNetworkPlots - Low network time periods
 * @param {Array} fuelTimeline - Fuel events (theft, refueling)
 * @returns {Array} The transformed data in the required format
 */
export function transformData(data, lowNetworkPlots, fuelTimeline) {
  if (!data || !Array.isArray(data) || data.length === 0) {
    return [];
  }

  // Step 1: Round timestamps to multiples of 1000 for all inputs
  // For data
  const normalizedData = data.map((item) => {
    // Round the timestamp to nearest 1000
    const roundedTimestamp = Math.floor(item.device_timestamp / 1000) * 1000;

    // Adjust level if it's 0
    //   const adjustedLevel = item.level === 0 ? 0.001 : item.level;

    return {
      ...item,
      device_timestamp: roundedTimestamp,
      // level: adjustedLevel,
    };
  });
  // Sort by device_timestamp
  // .sort((a, b) => a.device_timestamp - b.device_timestamp);

  // For fuelTimeline
  let normalizedFuelTimeline = [];
  if (fuelTimeline && Array.isArray(fuelTimeline)) {
    normalizedFuelTimeline = fuelTimeline.map((event) => {
      if (event.start_location && event.start_location.device_timestamp) {
        return {
          ...event,
          start_location: {
            ...event.start_location,
            device_timestamp:
              Math.floor(event.start_location.device_timestamp / 1000) * 1000,
          },
        };
      }
      return event;
    });
  }

  // For lowNetworkPlots
  let normalizedLowNetworkPlots = [];
  if (lowNetworkPlots && Array.isArray(lowNetworkPlots)) {
    normalizedLowNetworkPlots = lowNetworkPlots.map((period) => ({
      ...period,
      start_time: Math.floor(period.start_time / 1000) * 1000,
      end_time: Math.floor(period.end_time / 1000) * 1000,
    }));
  }

  // Step 2: Create a map of timestamps to level values for quick lookup
  const timestampToLevelMap = new Map();
  normalizedData.forEach((item) => {
    timestampToLevelMap.set(item.device_timestamp, item.level);
  });

  console.log("first", {
    normalizedFuelTimeline,
    normalizedLowNetworkPlots,
    normalizedData,
    data,
    lowNetworkPlots,
    fuelTimeline,
  });

  // Step 3: Create a function to check if a timestamp is in a low network period
  const isInLowNetworkPeriod = (timestamp) => {
    if (
      !normalizedLowNetworkPlots ||
      !Array.isArray(normalizedLowNetworkPlots)
    ) {
      return false;
    }

    return normalizedLowNetworkPlots.some(
      (period) => timestamp >= period.start_time && timestamp <= period.end_time
    );
  };

  // Step 4: Create a function to get level for a timestamp
  const getLevelForTimestamp = (timestamp) => {
    if (timestampToLevelMap.has(timestamp)) {
      return timestampToLevelMap.get(timestamp);
    }

    return 0; // Default to 0 if no timestamp is found
  };

  // Step 5: Transform the main data with consideration for low network periods
  const result = [];

  if (normalizedData.length === 0) {
    return result;
  }

  // Create data series with breaks at low network periods
  let currentSeries = [];
  let currentIgnitionState = normalizedData[0].ignition;
  let seriesColor = currentIgnitionState ? "blue" : "green";

  // Create the first data point
  currentSeries.push([
    normalizedData[0].device_timestamp,
    normalizedData[0].level,
    { ...normalizedData[0] },
  ]);

  // Process the rest of the data
  for (let i = 1; i < normalizedData.length; i++) {
    const currentData = normalizedData[i];
    const prevData = normalizedData[i - 1];

    // Check if this point is in a low network period
    const inLowNetwork = isInLowNetworkPeriod(currentData.device_timestamp);
    console.log("inLowNetwork", { inLowNetwork, currentData, prevData });

    // Check if we need to break the series due to low network period
    const shouldBreakForLowNetwork = normalizedLowNetworkPlots.some(
      (period) => {
        return (
          prevData.device_timestamp === period.start_time &&
          currentData.device_timestamp === period.end_time
          //     ||
          //   (prevData.device_timestamp < period.end_time &&
          //     currentData.device_timestamp > period.end_time)
        );
      }
    );

    console.log("shouldBreakForLowNetwork", {
      shouldBreakForLowNetwork,
      currentData,
      prevData,
    });

    // Check if ignition state has changed
    if (
      currentData.ignition !== currentIgnitionState ||
      shouldBreakForLowNetwork
    ) {
      // Finalize the current series
      console.log("breakSeries", {
        currentData,
        prevData,
        currentSeries,
        currentIgnitionState,
        shouldBreakForLowNetwork,
      });
      if (currentSeries.length > 0) {
        result.push(createSeriesObject(currentSeries, seriesColor));
        currentSeries = [];
      }

      // Update current ignition state and color
      currentIgnitionState = currentData.ignition;
      seriesColor = currentIgnitionState ? "blue" : "green";
    }

    // Add current data point to the current series
    const dataObj = {
      ...currentData,
      isLowNetwork: inLowNetwork,
    };

    console.log("dataObj", { dataObj });

    currentSeries.push([
      currentData.device_timestamp,
      currentData.level,
      dataObj,
    ]);
  }

  // Add the last series if not empty
  if (currentSeries.length > 0) {
    result.push(createSeriesObject(currentSeries, seriesColor));
  }

  // Step 6: Generate fuel timeline events series
  if (normalizedFuelTimeline && normalizedFuelTimeline.length > 0) {
    const fuelEventSeries = createFuelTimelineSeries(
      normalizedFuelTimeline,
      timestampToLevelMap,
      isInLowNetworkPeriod
    );
    result.push(fuelEventSeries);
  }

  // Step 7: Generate low network plots series
  if (normalizedLowNetworkPlots && normalizedLowNetworkPlots.length > 0) {
    const lowNetworkSeries = createLowNetworkSeries(
      normalizedLowNetworkPlots,
      timestampToLevelMap
    );
    result.push(...lowNetworkSeries);
  }

  return result;
}

/**
 * Creates a series object with the specified data points and color
 * @param {Array} dataPoints - The data points for this series
 * @param {string} color - The color for this series
 * @returns {Object} The series object
 */
function createSeriesObject(dataPoints, color) {
  return {
    type: "line",
    lineStyle: {
      type: "solid",
      color: color,
    },
    symbol: "none",
    areaStyle: {
      color: {
        colorStops: [
          {
            offset: 0,
            color: "#ACD4FD",
          },
          {
            offset: 1,
            color: "#F5FAFF",
          },
        ],
        x: 0,
        y: 0,
        x2: 0,
        y2: 1,
        type: "linear",
        global: false,
      },
    },
    data: dataPoints,
  };
}

/**
 * Creates a series for fuel timeline events
 * @param {Array} fuelTimeline - The fuel timeline events
 * @param {Map} timestampToLevelMap - Map of timestamps to level values
 * @param {Function} isInLowNetworkPeriod - Function to check if timestamp is in low network period
 * @returns {Object} The fuel timeline series object
 */
function createFuelTimelineSeries(
  fuelTimeline,
  timestampToLevelMap,
  isInLowNetworkPeriod
) {
  const fuelEventPoints = [];

  fuelTimeline.forEach((event) => {
    if (!event.start_location || !event.start_location.device_timestamp) {
      return;
    }

    const timestamp = event.start_location.device_timestamp;

    // Find the level for this timestamp
    let level = 0;
    if (timestampToLevelMap.has(timestamp)) {
      level = timestampToLevelMap.get(timestamp);
    } else {
      // If exact timestamp not found, find the closest earlier timestamp
      const timestamps = Array.from(timestampToLevelMap.keys()).sort(
        (a, b) => a - b
      );
      let closestTimestamp = null;

      for (let i = 0; i < timestamps.length; i++) {
        if (timestamps[i] <= timestamp) {
          closestTimestamp = timestamps[i];
        } else {
          break;
        }
      }

      if (closestTimestamp !== null) {
        level = timestampToLevelMap.get(closestTimestamp);
      } else if (timestamps.length > 0) {
        // If no earlier timestamp found, use the earliest available
        level = timestampToLevelMap.get(timestamps[0]);
      }
    }

    // Get the logo based on status
    const logo =
      event.status === "REFUELING"
        ? "image://src/component/img/refuelLogo.svg"
        : "image://src/component/img/theftLogo.svg";

    // Create the point data object
    const pointData = {
      device_timestamp: timestamp,
      speed: 0, // Default values
      ignition: false, // Default values
      level: level,
      isLowNetwork: isInLowNetworkPeriod(timestamp),
      status: event.status,
      address: event.start_location.address?.full_address || "",
      fuel_reading_count: event.fuel_reading_count || "",
      status_display_text: event.status_display_text || "",
      end_time: null,
      start_time: null,
    };

    fuelEventPoints.push([timestamp, level, pointData]);
  });

  // Create and return the fuel event series
  return {
    type: "line",
    lineStyle: {
      type: "solid",
      color: "red", // Using red color for fuel events
    },
    symbol: (value, params) => {
      // Determine which logo to use based on the status in the data
      const dataPoint = params.data[2];
      return dataPoint && dataPoint.status === "REFUELING"
        ? // ? "image://src/component/img/refuelLogo.svg"
          // : "image://src/component/img/theftLogo.svg";
          "image://src/component/img/logogoogle.svg"
        : "image://src/component/img/logogoogle.svg";
    },
    symbolSize: 20,
    data: fuelEventPoints,
    areaStyle: {
      color: {
        colorStops: [
          {
            offset: 0,
            color: "#ACD4FD",
          },
          {
            offset: 1,
            color: "#F5FAFF",
          },
        ],
        x: 0,
        y: 0,
        x2: 0,
        y2: 1,
        type: "linear",
        global: false,
      },
    },
  };
}

/**
 * Creates series for low network plots
 * @param {Array} lowNetworkPlots - The low network plot periods
 * @param {Map} timestampToLevelMap - Map of timestamps to level values
 * @returns {Array} Array of low network series objects
 */
function createLowNetworkSeries(lowNetworkPlots, timestampToLevelMap) {
  const lowNetworkSeries = [];

  lowNetworkPlots.forEach((period) => {
    const startTime = period.start_time;
    const endTime = period.end_time;
    const midTime = Math.floor((startTime + endTime) / 2);

    // Get levels for start and end points based on the specific edge case handling
    let startLevel, endLevel;

    // If start_time is in the data, use its level
    if (timestampToLevelMap.has(startTime)) {
      startLevel = timestampToLevelMap.get(startTime);
    }
    // If start_time is not in data, check if end_time is in data
    else if (timestampToLevelMap.has(endTime)) {
      startLevel = timestampToLevelMap.get(endTime);
    }
    // If neither is in data, default to 0
    else {
      startLevel = 0;
    }

    // If end_time is in the data, use its level
    if (timestampToLevelMap.has(endTime)) {
      endLevel = timestampToLevelMap.get(endTime);
    }
    // If end_time is not in data, check if start_time is in data
    else if (timestampToLevelMap.has(startTime)) {
      endLevel = timestampToLevelMap.get(startTime);
    }
    // If neither is in data, default to 0
    else {
      endLevel = 0;
    }

    // Calculate midpoint level
    const midLevel = (startLevel + endLevel) / 2;

    // Create first segment (start to mid)
    const firstSegment = {
      type: "line",
      lineStyle: {
        type: "dashed",
        color: "red",
      },
      symbol: "none",
      areaStyle: {
        color: "white",
      },
      data: [
        [
          startTime,
          startLevel,
          {
            device_timestamp: startTime + 1,
          },
        ],
        [
          midTime,
          midLevel,
          {
            device_timestamp: midTime + 1,
          },
        ],
      ],
    };

    // Create middle point with status
    const midPoint = {
      type: "line",
      lineStyle: {
        type: "dashed",
        color: "red",
      },
      symbol: "none",
      areaStyle: {
        color: "white",
      },
      data: [
        [
          midTime,
          midLevel,
          {
            device_timestamp: midTime,
            start_time: startTime,
            end_time: endTime,
            status: "LOW_NETWORK",
          },
        ],
      ],
    };

    // Create second segment (mid to end)
    const secondSegment = {
      type: "line",
      lineStyle: {
        type: "dashed",
        color: "red",
      },
      symbol: "none",
      areaStyle: {
        color: "white",
      },
      data: [
        [
          midTime,
          midLevel,
          {
            device_timestamp: midTime + 1,
          },
        ],
        [
          endTime,
          endLevel,
          {
            device_timestamp: endTime + 1,
          },
        ],
      ],
    };

    // Add all segments to the result
    lowNetworkSeries.push(firstSegment, midPoint, secondSegment);
  });

  return lowNetworkSeries;
}
