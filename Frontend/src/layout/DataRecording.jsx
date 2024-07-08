import { useEffect, useState } from "react";
import StatisticCard from "../components/card/StatisticCard";
import { getAvg, getMax, getMin } from "../services/api";

const DataRecording = () => {
  const [maxData, setMaxData] = useState(null);
  const [minData, setMinData] = useState(null);
  const [avgData, setAvgData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const max = await getMax();
      setMaxData(max);
      // console.log("Max Data : ", max);

      const min = await getMin();
      setMinData(min);
      // console.log("Min Data : ", min);

      const avg = await getAvg();
      setAvgData(avg);
      // console.log("Average Data : ", avg);
    };
    fetchData();
  }, []);

  return (
    <div className="h-[150vh] md:h-[120vh] lg:h-[100vh] mx-[10%] flex flex-col justify-center items-center">
      <div className="text-center">
        <h1 className="text-4xl font-semibold">Data Recording</h1>
      </div>

      <div class="my-8">
        <div class="mx-auto max-w-7xl px-6 lg:px-8 flex justify-center gap-y-8 gap-x-8 flex-col md:flex-col lg:flex-row">
          <StatisticCard
            title="Average Data"
            dataAmpere={avgData ? avgData.average[0].ampere : "Fetching..."}
            dataVolt={avgData ? avgData.average[0].volt : "Fetching..."}
          />
          <StatisticCard
            title="Maximum Data"
            dataAmpere={maxData ? maxData.ampere : "Fetching..."}
            dataVolt={maxData ? maxData.volt : "Fetching..."}
          />
          <StatisticCard
            title="Minimum Data"
            dataAmpere={minData ? minData.ampere : "Fetching..."}
            dataVolt={minData ? minData.volt : "Fetching..."}
          />
        </div>
      </div>
    </div>
  );
};

export default DataRecording;
