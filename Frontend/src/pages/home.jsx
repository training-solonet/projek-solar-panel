import { useEffect, useRef, useState } from "react";
import BGSolarPanel from "../assets/img/solar-panel.jpg";

const HomePage = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const contentRef = useRef(null);

  useEffect(() => {
    document.title = "Solar Panel Monitoring";
  });

  // current time every second
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const formatTime = (time) => {
    const hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
    return `${hours}:${minutes}:${seconds}`;
  };

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
            <p className="text-white my-2 w-[60%]">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla
              ratione provident pariatur ab optio facilis.
            </p>
            <button 
            onClick={handleScroll}
            className="text-white mt-2 font-semibold px-7 py-2 rounded-3xl border-[3px] border-white hover:text-black hover:bg-white duration-500 ease-in-out">
              See Now
            </button>
          </div>
          {/* <img src={vector} alt="vector" className="w-[700px]" /> */}
        </div>
      </div>

      {/* content */}
      <div className="bg-slate-200" ref={contentRef}>
        <div className="h-[100vh] mx-[10%] flex justify-center items-center">
          <div className="text-center">
            <h1 className="text-3xl font-semibold">Current Data</h1>
            <p>{`${formatTime(currentTime)}`}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
