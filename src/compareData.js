export const originalData = {
  normalizedFuelTimeline: [
    {
      status: "REFUELING",
      status_display_text: "Refuel",
      duration: null,
      start_location: {
        device_timestamp: 1735450636000,
        lat: 10.78265,
        lng: 79.20586,
        address: {
          display_text:
            "Coimbatore - Nagapattinam Hwy, Annai Meena Nagar, Alangudi Bit, Punnainallur, Tamil Nadu 613501",
          full_address:
            "Coimbatore - Nagapattinam Hwy, Annai Meena Nagar, Alangudi Bit, Punnainallur, Tamil Nadu 613501",
        },
      },
      end_location: null,
      fuel_reading_count: "236.75 L",
      fuel_sensor_event_details: {
        start_fuel_level: {
          value: "113.25",
          display_text: "113.25 L",
        },
        end_fuel_level: {
          value: "350.00",
          display_text: "350.00 L",
        },
        changed_fuel_level: {
          value: "236.75",
          display_text: "236.75 L",
        },
      },
      distance: null,
      display_name: "Refuel",
      poi_details: null,
    },
  ],
  normalizedLowNetworkPlots: [
    {
      start_time: 1735267158000,
      end_time: 1735281982000,
    },
    {
      start_time: 1735282132000,
      end_time: 1735351308000,
    },
    {
      start_time: 1735353568000,
      end_time: 1735449756000,
    },
  ],
  normalizedData: [
    {
      device_timestamp: 1735281982000,
      speed: 40,
      ignition: true,
      level: 108.5,
    },
    {
      device_timestamp: 1735282132000,
      speed: 42,
      ignition: true,
      level: 93.5,
    },
    {
      device_timestamp: 1735351308000,
      speed: 0,
      ignition: true,
      level: 249,
    },
    {
      device_timestamp: 1735351528000,
      speed: 0,
      ignition: false,
      level: 224.25,
    },
    {
      device_timestamp: 1735351828000,
      speed: 0,
      ignition: false,
      level: 190.5,
    },
    {
      device_timestamp: 1735352128000,
      speed: 0,
      ignition: false,
      level: 156.75,
    },
    {
      device_timestamp: 1735352428000,
      speed: 0,
      ignition: false,
      level: 123,
    },
    {
      device_timestamp: 1735352728000,
      speed: 0,
      ignition: false,
      level: 89.25,
    },
    {
      device_timestamp: 1735353028000,
      speed: 0,
      ignition: true,
      level: 55.5,
    },
    {
      device_timestamp: 1735353328000,
      speed: 52,
      ignition: true,
      level: 21.75,
    },
    {
      device_timestamp: 1735353568000,
      speed: 52,
      ignition: true,
      level: 0,
    },
    {
      device_timestamp: 1735449756000,
      speed: 0,
      ignition: true,
      level: 267.39,
    },
    {
      device_timestamp: 1735449936000,
      speed: 0,
      ignition: true,
      level: 208.25,
    },
    {
      device_timestamp: 1735450236000,
      speed: 0,
      ignition: true,
      level: 137,
    },
    {
      device_timestamp: 1735450636000,
      speed: 0,
      ignition: true,
      level: 113.25,
    },
    {
      device_timestamp: 1735450656000,
      speed: 0,
      ignition: true,
      level: 118,
    },
    {
      device_timestamp: 1735450676000,
      speed: 0,
      ignition: true,
      level: 122.75,
    },
    {
      device_timestamp: 1735450696000,
      speed: 0,
      ignition: true,
      level: 127.5,
    },
    {
      device_timestamp: 1735450716000,
      speed: 0,
      ignition: false,
      level: 132.25,
    },
    {
      device_timestamp: 1735450736000,
      speed: 0,
      ignition: false,
      level: 137,
    },
    {
      device_timestamp: 1735450756000,
      speed: 0,
      ignition: false,
      level: 141.75,
    },
    {
      device_timestamp: 1735450776000,
      speed: 0,
      ignition: false,
      level: 146.5,
    },
    {
      device_timestamp: 1735450796000,
      speed: 0,
      ignition: false,
      level: 151.25,
    },
  ],
};

export const modifiedData = [
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
        1735281982000,
        108.5,
        {
          device_timestamp: 1735281982000,
          speed: 40,
          ignition: true,
          level: 108.5,
        },
      ],
      [
        1735282132000,
        93.5,
        {
          device_timestamp: 1735282132000,
          speed: 42,
          ignition: true,
          level: 93.5,
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
        1735351308000,
        249,
        {
          device_timestamp: 1735351308000,
          speed: 0,
          ignition: true,
          level: 249,
        },
      ],
      [
        1735351308000,
        249,
        {
          device_timestamp: 1735351308000,
          speed: 0,
          ignition: true,
          level: 249,
        },
      ],
    ],
  },
  {
    type: "line",
    lineStyle: {
      type: "solid",
      color: "green",
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
        1735351528000,
        224.25,
        {
          device_timestamp: 1735351528000,
          speed: 0,
          ignition: false,
          level: 224.25,
        },
      ],
      [
        1735351528000,
        224.25,
        {
          device_timestamp: 1735351528000,
          speed: 0,
          ignition: false,
          level: 224.25,
        },
      ],
      [
        1735351828000,
        190.5,
        {
          device_timestamp: 1735351828000,
          speed: 0,
          ignition: false,
          level: 190.5,
        },
      ],
      [
        1735352128000,
        156.75,
        {
          device_timestamp: 1735352128000,
          speed: 0,
          ignition: false,
          level: 156.75,
        },
      ],
      [
        1735352428000,
        123,
        {
          device_timestamp: 1735352428000,
          speed: 0,
          ignition: false,
          level: 123,
        },
      ],
      [
        1735352728000,
        89.25,
        {
          device_timestamp: 1735352728000,
          speed: 0,
          ignition: false,
          level: 89.25,
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
        1735353028000,
        55.5,
        {
          device_timestamp: 1735353028000,
          speed: 0,
          ignition: true,
          level: 55.5,
        },
      ],
      [
        1735353028000,
        55.5,
        {
          device_timestamp: 1735353028000,
          speed: 0,
          ignition: true,
          level: 55.5,
        },
      ],
      [
        1735353328000,
        21.75,
        {
          device_timestamp: 1735353328000,
          speed: 52,
          ignition: true,
          level: 21.75,
        },
      ],
      [
        1735353568000,
        0,
        {
          device_timestamp: 1735353568000,
          speed: 52,
          ignition: true,
          level: 0,
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
        1735449756000,
        267.39,
        {
          device_timestamp: 1735449756000,
          speed: 0,
          ignition: true,
          level: 267.39,
        },
      ],
      [
        1735449756000,
        267.39,
        {
          device_timestamp: 1735449756000,
          speed: 0,
          ignition: true,
          level: 267.39,
        },
      ],
      [
        1735449936000,
        208.25,
        {
          device_timestamp: 1735449936000,
          speed: 0,
          ignition: true,
          level: 208.25,
        },
      ],
      [
        1735450236000,
        137,
        {
          device_timestamp: 1735450236000,
          speed: 0,
          ignition: true,
          level: 137,
        },
      ],
      [
        1735450636000,
        113.25,
        {
          device_timestamp: 1735450636000,
          speed: 0,
          ignition: true,
          level: 113.25,
        },
      ],
      [
        1735450656000,
        118,
        {
          device_timestamp: 1735450656000,
          speed: 0,
          ignition: true,
          level: 118,
        },
      ],
      [
        1735450676000,
        122.75,
        {
          device_timestamp: 1735450676000,
          speed: 0,
          ignition: true,
          level: 122.75,
        },
      ],
      [
        1735450696000,
        127.5,
        {
          device_timestamp: 1735450696000,
          speed: 0,
          ignition: true,
          level: 127.5,
        },
      ],
    ],
  },
  {
    type: "line",
    lineStyle: {
      type: "solid",
      color: "green",
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
        1735450716000,
        132.25,
        {
          device_timestamp: 1735450716000,
          speed: 0,
          ignition: false,
          level: 132.25,
        },
      ],
      [
        1735450716000,
        132.25,
        {
          device_timestamp: 1735450716000,
          speed: 0,
          ignition: false,
          level: 132.25,
        },
      ],
      [
        1735450736000,
        137,
        {
          device_timestamp: 1735450736000,
          speed: 0,
          ignition: false,
          level: 137,
        },
      ],
      [
        1735450756000,
        141.75,
        {
          device_timestamp: 1735450756000,
          speed: 0,
          ignition: false,
          level: 141.75,
        },
      ],
      [
        1735450776000,
        146.5,
        {
          device_timestamp: 1735450776000,
          speed: 0,
          ignition: false,
          level: 146.5,
        },
      ],
      [
        1735450796000,
        151.25,
        {
          device_timestamp: 1735450796000,
          speed: 0,
          ignition: false,
          level: 151.25,
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
    symbolSize: 20,
    data: [
      [
        1735450636000,
        113.25,
        {
          device_timestamp: 1735450636000,
          speed: 0,
          ignition: false,
          level: 113.25,
          isLowNetwork: false,
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
  },
  {
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
        1735267158000,
        108.5,
        {
          device_timestamp: 1735267158001,
        },
      ],
      [
        1735274570000,
        108.5,
        {
          device_timestamp: 1735274570001,
        },
      ],
    ],
  },
  {
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
        1735274570000,
        108.5,
        {
          device_timestamp: 1735274570000,
          start_time: 1735267158000,
          end_time: 1735281982000,
          status: "LOW_NETWORK",
        },
      ],
    ],
  },
  {
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
        1735274570000,
        108.5,
        {
          device_timestamp: 1735274570001,
        },
      ],
      [
        1735281982000,
        108.5,
        {
          device_timestamp: 1735281982001,
        },
      ],
    ],
  },
  {
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
        1735282132000,
        93.5,
        {
          device_timestamp: 1735282132001,
        },
      ],
      [
        1735316720000,
        171.25,
        {
          device_timestamp: 1735316720001,
        },
      ],
    ],
  },
  {
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
        1735316720000,
        171.25,
        {
          device_timestamp: 1735316720000,
          start_time: 1735282132000,
          end_time: 1735351308000,
          status: "LOW_NETWORK",
        },
      ],
    ],
  },
  {
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
        1735316720000,
        171.25,
        {
          device_timestamp: 1735316720001,
        },
      ],
      [
        1735351308000,
        249,
        {
          device_timestamp: 1735351308001,
        },
      ],
    ],
  },
  {
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
        1735353568000,
        0,
        {
          device_timestamp: 1735353568001,
        },
      ],
      [
        1735401662000,
        133.695,
        {
          device_timestamp: 1735401662001,
        },
      ],
    ],
  },
  {
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
        1735401662000,
        133.695,
        {
          device_timestamp: 1735401662000,
          start_time: 1735353568000,
          end_time: 1735449756000,
          status: "LOW_NETWORK",
        },
      ],
    ],
  },
  {
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
        1735401662000,
        133.695,
        {
          device_timestamp: 1735401662001,
        },
      ],
      [
        1735449756000,
        267.39,
        {
          device_timestamp: 1735449756001,
        },
      ],
    ],
  },
];
