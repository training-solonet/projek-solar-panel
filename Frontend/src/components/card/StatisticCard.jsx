import React, { useState } from "react";

const StatisticCard = ({ title, dataAmpere, dataVolt, customCard, lastUpdate }) => {
  return (
    <div className={`${customCard} mx-auto flex justify-center items-center max-w-xs flex-col bg-white w-[250px] h-[250px] rounded-3xl shadow-xl`}>
      <h1 className="text-2xl font-bold text-gray-600">
        {title}
      </h1>
      <div className="flex justify-between items-center w-full px-12 text-sm mt-6">
        <p>Ampere</p>
        <p>{dataAmpere}</p>
      </div>
      <div className="flex justify-between items-center w-full px-12 text-sm">
        <p>Volt</p>
        <p>{dataVolt}</p>
      </div>
      {lastUpdate && <p className="text-gray-500 font-medium text-xs mt-8">{lastUpdate}</p>}
    </div>
  );
};

export default StatisticCard;
