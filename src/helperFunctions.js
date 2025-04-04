import * as echarts from "echarts";

export const data = [
  {
    device_timestamp: 1735257741000,
    speed: 0,
    ignition: false,
    level: 234.75,
  },
  {
    device_timestamp: 1735258041000,
    speed: 0,
    ignition: false,
    level: 189.75,
  },
  {
    device_timestamp: 1735258341000,
    speed: 0,
    ignition: false,
    level: 186.75,
  },
  {
    device_timestamp: 1735258641000,
    speed: 0,
    ignition: false,
    level: 231.75,
  },
  {
    device_timestamp: 1735258941000,
    speed: 0,
    ignition: false,
    level: 289.13,
  },
  {
    device_timestamp: 1735259241000,
    speed: 0,
    ignition: true,
    level: 244.75,
  },
  {
    device_timestamp: 1735259541000,
    speed: 40,
    ignition: true,
    level: 237.25,
  },
  {
    device_timestamp: 1735259841000,
    speed: 37,
    ignition: true,
    level: 229.75,
  },
  {
    device_timestamp: 1735260001000,
    speed: 48,
    ignition: true,
    level: 225.75,
  },
  {
    device_timestamp: 1735261201000,
    speed: 0,
    ignition: true,
    level: 350,
  },
  {
    device_timestamp: 1735261221000,
    speed: 0,
    ignition: false,
    level: 310.87,
  },
  {
    device_timestamp: 1735261241000,
    speed: 0,
    ignition: false,
    level: 271.74,
  },
  {
    device_timestamp: 1735261261000,
    speed: 0,
    ignition: false,
    level: 249,
  },
  {
    device_timestamp: 1735261281000,
    speed: 0,
    ignition: false,
    level: 246.75,
  },
  {
    device_timestamp: 1735261301000,
    speed: 0,
    ignition: false,
    level: 244.5,
  },
  {
    device_timestamp: 1735261321000,
    speed: 0,
    ignition: true,
    level: 242.25,
  },
  {
    device_timestamp: 1735261341000,
    speed: 0,
    ignition: true,
    level: 240,
  },
];
export const modifiedData = [
  {
    type: "line",
    lineStyle: {
      type: "solid",
      color: "yellow",
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
    data: [
      [
        1735257741000,
        234.75,
        {
          device_timestamp: 1735257741000,
          speed: 0,
          ignition: false,
          level: 234.75,
        },
      ],
      [
        1735258041000,
        189.75,
        {
          device_timestamp: 1735258041000,
          speed: 0,
          ignition: false,
          level: 189.75,
        },
      ],
      [
        1735258341000,
        186.75,
        {
          device_timestamp: 1735258341000,
          speed: 0,
          ignition: false,
          level: 186.75,
        },
      ],
      [
        1735258641000,
        231.75,
        {
          device_timestamp: 1735258641000,
          speed: 0,
          ignition: false,
          level: 231.75,
        },
      ],
      [
        1735258941000,
        289.13,
        {
          device_timestamp: 1735258941000,
          speed: 0,
          ignition: false,
          level: 289.13,
        },
      ],
    ],
  },
  {
    type: "line",
    lineStyle: {
      type: "solid",
      color: "blue",
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
    data: [
      [
        1735258941000,
        289.13,
        {
          device_timestamp: 1735258941001,
          speed: 0,
          ignition: false,
          level: 289.13,
        },
      ],
      [
        1735259241000,
        244.75,
        {
          device_timestamp: 1735259241000,
          speed: 0,
          ignition: true,
          level: 244.75,
        },
      ],
      [
        1735259541000,
        237.25,
        {
          device_timestamp: 1735259541000,
          speed: 40,
          ignition: true,
          level: 237.25,
        },
      ],
      [
        1735259841000,
        229.75,
        {
          device_timestamp: 1735259841000,
          speed: 37,
          ignition: true,
          level: 229.75,
        },
      ],
      [
        1735260001000,
        225.75,
        {
          device_timestamp: 1735260000999,
          speed: 48,
          ignition: true,
          level: 225.75,
        },
      ],
      [
        1735261201000,
        350,
        {
          device_timestamp: 1735261201000,
          speed: 0,
          ignition: true,
          level: 350,
        },
      ],
    ],
  },
  {
    type: "line",
    lineStyle: {
      type: "solid",
      color: "yellow",
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
    data: [
      [
        1735261201000,
        350,
        {
          device_timestamp: 1735261201001,
          speed: 0,
          ignition: true,
          level: 350,
        },
      ],
      [
        1735261221000,
        310.87,
        {
          device_timestamp: 1735261221000,
          speed: 0,
          ignition: false,
          level: 310.87,
        },
      ],
      [
        1735261241000,
        271.74,
        {
          device_timestamp: 1735261241000,
          speed: 0,
          ignition: false,
          level: 271.74,
        },
      ],
      [
        1735261261000,
        249,
        {
          device_timestamp: 1735261261000,
          speed: 0,
          ignition: false,
          level: 249,
        },
      ],
      [
        1735261281000,
        246.75,
        {
          device_timestamp: 1735261281000,
          speed: 0,
          ignition: false,
          level: 246.75,
        },
      ],
      [
        1735261301000,
        244.5,
        {
          device_timestamp: 1735261301000,
          speed: 0,
          ignition: false,
          level: 244.5,
        },
      ],
    ],
  },
  {
    type: "line",
    lineStyle: {
      type: "solid",
      color: "blue",
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
    data: [
      [
        1735261301000,
        244.5,
        {
          device_timestamp: 1735261301001,
          speed: 0,
          ignition: false,
          level: 244.5,
        },
      ],
      [
        1735261321000,
        242.25,
        {
          device_timestamp: 1735261321000,
          speed: 0,
          ignition: true,
          level: 242.25,
        },
      ],
      [
        1735261341000,
        240,
        {
          device_timestamp: 1735261341000,
          speed: 0,
          ignition: true,
          level: 240,
        },
      ],
    ],
  },
  {
    type: "line",
    lineStyle: {
      type: "solid",
      color: "red",
    },
    // symbol: "triangle",
    symbol: `image://src/component/img/logogoogle.svg`,
    symbolSize: 20,
    data: [
      [
        1735260001000,
        225.75,
        {
          device_timestamp: 1735260001000,
          speed: 0,
          ignition: false,
          level: 225.75,
          isLowNetwork: true,
          status: "REFUELING",
          address:
            "Coimbatore - Nagapattinam Hwy, Annai Meena Nagar, Alangudi Bit, Punnainallur, Tamil Nadu 613501",
          fuel_reading_count: "236.75 L",
          status_display_text: "Refuel",
          end_time: null,
          start_time: null,
        },
      ],
    ],
    areaStyle: {
      color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
        { offset: 0, color: "#ACD4FD" },
        { offset: 1, color: "#F5FAFF" },
      ]),
    },
  },
];

const lowNetworkOnes = [
  {
    type: "line",
    lineStyle: {
      type: "dashed", // Dashed gray line
      color: "gray",
    },
    symbol: "none",
    areaStyle: {
      color: "white",
    },
    data: [
      [
        1735260001000,
        // (x-ordinate i.e. device_timestamp),
        225.75,
        // (y-ordinate i.e. level, so will look in data for same device_timestamp and use the level from there.)
        {
          device_timestamp: 1735260001001,
          // (came from 1735260001000+1)
        },
      ],
      [
        1735260601000,
        // (comes from (1735260001000+1735261201000)/2),
        287.875,
        // (comes from (350+225.75)/2, 350 if fuel level of 1735261201000 and 225.75 is of 1735260001000)
        {
          device_timestamp: 1735260601001,
          // (came from 1735260601000+1)
        },
      ],
    ],
  },
  {
    type: "line",
    lineStyle: {
      type: "dashed", // Dashed gray line
      color: "gray",
    },
    symbol: "none",
    areaStyle: {
      color: "white",
    },
    data: [
      [
        1735260601000,
        // (comes from (1735260001000+1735261201000)/2),
        287.875,
        // (comes from (350+225.75)/2, 350 if fuel level of 1735261201000 and 225.75 is of 1735260001000)
        {
          device_timestamp: 1735260601000,
          start_time: 1735260001000,
          end_time: 1735261201000,
          status: "LOW_NETWORK",
        },
      ],
    ],
  },
  {
    type: "line",
    lineStyle: {
      type: "dashed", // Dashed gray line
      color: "gray",
    },
    symbol: "none",
    areaStyle: {
      color: "white",
    },
    data: [
      [
        1735260601000,
        // (comes from (1735260001000+1735261201000)/2),
        287.875,
        // (comes from (350+225.75)/2, 350 if fuel level of 1735261201000 and 225.75 is of 1735260001000)
        {
          device_timestamp: 1735260601001,
        },
      ],
      [
        1735261201000,
        // (x-ordinate i.e. device_timestamp),
        350,
        // (y-ordinate i.e. level, so will look in data for same device_timestamp and use the level from there.)
        {
          device_timestamp: 17352612010001,
          // (came from 1735261201000+1)
        },
      ],
    ],
  },
];

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

  // Step 1: Create a set of fuel timeline timestamps
  const fuelTimelineTimestamps = new Set();
  if (fuelTimeline && Array.isArray(fuelTimeline)) {
    fuelTimeline.forEach((event) => {
      if (event.start_location && event.start_location.device_timestamp) {
        fuelTimelineTimestamps.add(event.start_location.device_timestamp);
      }
    });
  }

  // Step 2: Process and normalize the data
  const normalizedData = data
    .map((item) => {
      // Round the timestamp to nearest 1000
      const roundedTimestamp = Math.floor(item.device_timestamp / 1000) * 1000;

      // Adjust level if it's 0
      const adjustedLevel = item.level === 0 ? 0.001 : item.level;

      return {
        ...item,
        device_timestamp: roundedTimestamp,
        level: adjustedLevel,
      };
    })
    // Sort by device_timestamp
    .sort((a, b) => a.device_timestamp - b.device_timestamp);

  // Step 3: Transform the data
  let result = [];
  let currentSeries = [];

  if (normalizedData.length === 0) {
    return result;
  }

  let currentIgnitionState = normalizedData[0].ignition;
  let seriesColor = currentIgnitionState ? "blue" : "yellow";

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

    // Check if ignition state has changed
    if (currentData.ignition !== currentIgnitionState) {
      // Finalize the current series
      result.push(createSeriesObject(currentSeries, seriesColor));

      // Start a new series with a copy of the last point but with timestamp + 1
      const lastPoint = currentSeries[currentSeries.length - 1];
      const continuityPoint = [
        lastPoint[0],
        lastPoint[1],
        {
          ...lastPoint[2],
          device_timestamp: lastPoint[2].device_timestamp + 1,
        },
      ];

      // Update current ignition state and color
      currentIgnitionState = currentData.ignition;
      seriesColor = currentIgnitionState ? "blue" : "yellow";

      // Start new series with the continuity point
      currentSeries = [continuityPoint];
    }

    // Special case: if this timestamp is in fuel timeline, adjust the device_timestamp in the data object
    let dataObj = { ...currentData };
    if (fuelTimelineTimestamps.has(currentData.device_timestamp)) {
      dataObj.device_timestamp = currentData.device_timestamp - 1;
    }

    // Add current data point to the current series
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
  if (fuelTimeline && Array.isArray(fuelTimeline) && fuelTimeline.length > 0) {
    const fuelEventSeries = createFuelTimelineSeries(
      fuelTimeline,
      timestampToLevelMap,
      isInLowNetworkPeriod
    );
    result.push(fuelEventSeries);
  }

  result = [...result, lowNetworkOnes];

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

// Example usage:
export const testModifiedData = transformData(data);

function randomizeIgnition(data) {
  let currentState = Math.random() < 0.5; // Randomly start with true or false
  let remainingCount = Math.floor(Math.random() * 8) + 3; // Between 3 and 10

  return data.map((entry, index) => {
    if (remainingCount === 0) {
      currentState = !currentState; // Toggle ignition state
      remainingCount = Math.floor(Math.random() * 8) + 3; // Reset counter
    }

    remainingCount--;
    return { ...entry, ignition: currentState };
  });
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
        ? // ? "image://src/component/img/refuelLogo.svg"
          // : "image://src/component/img/theftLogo.svg";
          `image://src/component/img/logogoogle.svg`
        : `image://src/component/img/logogoogle.svg`;

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
        ? "image://src/component/img/refuelLogo.svg"
        : "image://src/component/img/theftLogo.svg";
    },
    symbolSize: 20,
    data: fuelEventPoints,
    areaStyle: {
      color: "white", // White area style for fuel events
    },
  };
}
