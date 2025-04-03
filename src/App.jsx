import ReactECharts from "echarts-for-react";
import {
  // modifiedData as data,
  testModifiedData,
  transformData,
} from "./helperFunctions";
import { originalData } from "./fakeData";
import { useEffect, useState } from "react";

function App() {
  console.log("testModifiedData", { testModifiedData });
  const [data, setData] = useState([]);
  useEffect(() => {
    setData(transformData(originalData));
  }, []);

  const option = {
    title: { text: "Fuel Level Over Time" },
    tooltip: { trigger: "axis" },
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
