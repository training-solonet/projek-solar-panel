import { useEffect, useState } from "react";
import StatisticCard from "../components/card/StatisticCard";
import { getData } from "../data/api";

const DataRealtime = () => {
  return (
    <div className="h-[100vh] mx-[10%] flex flex-col justify-center items-center">
      <div className="text-center">
        <h1 className="text-4xl font-semibold">Data Realtime</h1>
        <p>Data that is updated every second</p>
      </div>

      <div class="my-8">
        <div class="mx-auto max-w-7xl px-6 lg:px-8 flex justify-center gap-x-8">
          <StatisticCard
            customCard={"w-[850px] h-[280px] max-w-lg px-32"}
            title="Current Data"
            dataAmpere="0"
            dataVolt="0"
            lastUpdate="Last Update : 1 minutes ago"
          />
        </div>
      </div>
    </div>
  );
};

export default DataRealtime;
