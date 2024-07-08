import { useEffect, useState } from "react";
import StatisticCard from "../components/card/StatisticCard";
import { getData } from "../services/api";
import socket from '../services/websocket';

const DataRealtime = () => {
  const [ data, setData ] = useState(null);
  const [lastUpdate, setLastUpdate] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const data = await getData();
      setData(data);
      setLastUpdate(new Date().toLocaleTimeString());
      console.log("Data : ", data);
    };
    fetchData();

    // listen to new sensor data
    socket.on('new-sensor-data', (newData) => {
      console.log("New Sensor Data : ", newData);
    });

  }, []);

  return (
    <div className="h-[100vh] mx-[10%] flex flex-col justify-center items-center">
      <div className="text-center">
        <h1 className="text-4xl font-semibold">Data Realtime</h1>
        <p>Data that is updated every second</p>
      </div>

      <div className="my-8">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 flex justify-center gap-x-8">
          <StatisticCard
            customCard={"w-[850px] h-[280px]"}
            title="Current Data"
            dataAmpere={ data ? data.ampere : "Fetching..." }
            dataVolt={ data ? data.volt : "Fetching..." }
            lastUpdate={ `Last Update : ${lastUpdate}` }
          />
        </div>
      </div>
    </div>
  );
};

export default DataRealtime;
