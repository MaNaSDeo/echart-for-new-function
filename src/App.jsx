import ReactECharts from "echarts-for-react";
import {
  // modifiedData as data,
  // testModifiedData,
  transformData,
} from "./helperFunctions";
// import { modifiedData as data } from "./compareData";
import { originalData, low_network_plots, fuel_timeline } from "./fakeData";
import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    setData(transformData(originalData, low_network_plots, fuel_timeline));
  }, []);

  console.log("data", { data });

  const option = {
    title: { text: "Fuel Level Over Time" },
    toolbox: {
      show: false,
    },
    xAxis: {
      type: "time",
      // boundaryGap: ["5%", "5%"], // Fix applied here
      boundaryGap: false,
      min: "dataMin", // Start x-axis from the first data point
      max: "dataMax", // End x-axis at the last data point
    },
    yAxis: {
      type: "value",
      axisLabel: {
        formatter: "{value} L",
      },
      axisPointer: {
        snap: false,
      },
    },
    series: data,
    tooltip: {
      trigger: "axis",
      formatter: function (params) {
        console.log("params", {
          params,
          value: params[0]?.value,
          obj: params[0]?.value?.[2],
        });
        const tooltipLines = params.map((item) => {
          const { seriesName, data } = item;
          console.log("seriesName, data", { seriesName, data });
          const time = data?.[0];
          const value = data?.[1];
          const deviceTime = data[2]?.device_timestamp
            ? new Date(data.device_timestamp).toLocaleString()
            : "N/A";

          console.log("seriesName, data", {
            time,
            value,
            deviceTime,
            seriesName,
            data,
          });

          return `
            <strong>${seriesName}</strong><br/>
            Value: ${value} L<br/>
            Time: ${time}<br/>
            Device Timestamp: ${deviceTime}
          `;
        });
        return tooltipLines.join("<br/><br/>");
      },
    },
  };
  return (
    <div>
      <ReactECharts
        option={option}
        style={{ height: "100vh", width: "100vw" }}
        notMerge={true}
        lazyUpdate={true}
        key={JSON.stringify(option)} // Force update when option changes
      />
    </div>
  );
}

export default App;
