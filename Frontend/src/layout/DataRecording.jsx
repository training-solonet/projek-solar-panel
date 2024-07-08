import { useEffect, useState } from "react";
import StatisticCard from "../components/card/StatisticCard";
import { getAvg, getMax, getMin } from "../services/api";
import socket from "../services/websocket";

const DataRecording = () => {
  const [maxData, setMaxData] = useState(null);
  const [minData, setMinData] = useState(null);
  const [avgData, setAvgData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const max = await getMax();
        setMaxData(max);
        console.log(`Maximal Data : `, max);

        const min = await getMin();
        setMinData(min);
        console.log(`Minimal Data : `, min);

        const avg = await getAvg();
        setAvgData(avg);
        console.log(`Average Data : `, avg);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  const FormatNumber = (num) => {
    if (num != null && num != undefined) {
      return parseFloat((num).toFixed(2));
    }
    return "Fetching...";
  }

  return (
    <div className="h-[150vh] md:h-[120vh] lg:h-[100vh] mx-[10%] flex flex-col justify-center items-center">
      <div className="text-center">
        <h1 className="text-4xl font-semibold">Data Recording</h1>
      </div>

      <div className="my-8">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 flex justify-center gap-y-8 gap-x-8 flex-col md:flex-col lg:flex-row">
          <StatisticCard
            title="Average Data"
            dataAmpere={ FormatNumber(avgData?.average[0].ampere) }
            dataVolt={ FormatNumber(avgData?.average[0].volt) }
          />
          <StatisticCard
            title="Maximum Data"
            dataAmpere={ FormatNumber(maxData?.ampere) }
            dataVolt={ FormatNumber(maxData?.volt) }
          />
          <StatisticCard
            title="Minimum Data"
            dataAmpere={ FormatNumber(minData?.ampere) }
            dataVolt={ FormatNumber(minData?.volt) }
          />
        </div>
      </div>
    </div>
  );
};

export default DataRecording;
