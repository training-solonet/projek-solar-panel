import { useEffect, useRef, useState } from "react";
import BGSolarPanel from "../assets/img/solar-panel.jpg";
import Button from "../components/button/Button";
import DataRecording from "../layout/DataRecording";
import DataRealtime from "../layout/DataRealtime";

const HomePage = () => {
  const contentRef = useRef(null);

  useEffect(() => {
    document.title = "Solar Panel Monitoring";
  });

  const handleScroll = () => {
    contentRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="bg-[#FFF]">
      <div
        className="relative h-[100vh] flex items-center bg-cover bg-center"
        style={{ backgroundImage: `url(${BGSolarPanel})` }}
      >
        <div className="absolute inset-0 bg-black opacity-70"></div>
        <div className="relative z-10 mx-[10%] flex justify-between items-center">
          <div>
            <h1 className="text-white text-5xl font-semibold">
              Solar Panel Monitoring
            </h1>
            <p className="text-white my-2 w-[70%]">
              With the Solar Panel Monitoring will make it easier to view data
              and also directly
            </p>
            <Button
              oc={handleScroll}
              customStyles={
                "text-white bg-transparent border-white border-[2px] hover:bg-white hover:text-black"
              }
            >
              See Now
            </Button>
          </div>
        </div>
      </div>

      <div className="bg-slate-100" ref={contentRef}>
        <DataRealtime />
      </div>

      <div className="bg-slate-300">
        <DataRecording />
      </div>
    </div>
  );
};

export default HomePage;
