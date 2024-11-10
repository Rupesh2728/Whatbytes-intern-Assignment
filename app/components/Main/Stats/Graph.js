import React from "react";
import Image from "next/image";
import graphicon from "../../../Assests/graphIcon.jpg";
import Chart from "./Chart";

const Graph = ({ percentile }) => {
  return (
    <div className="xs:w-[90%] lg:w-[42rem]  border-[0.075rem] rounded-lg mt-[1.5rem] ml-[2rem]">
      <div className=" flex justify-between py-[1rem] pl-[0.5rem] ">
        <div>
          <p className="font-bold pl-[0.8rem]">Comparison Graph</p>
          <p className="text-slate-500 pl-[0.9rem] mt-[1rem] font-bold ">
            You scored {percentile}% percentile which is lower than the
          </p>
          <p className="text-slate-500 pl-[0.9rem]">
            average percentile 72% of all the engineers who took this assessment
          </p>
        </div>

        <div className="m-auto ml-[4rem] xs:mr-[1rem] bg-slate-100 rounded-full xs:w-[4rem] xs:h-[4rem] md:w-[3.25rem] md:h-[3.25rem]">
          <Image
            alt="Graph Icon"
            src={graphicon}
            className="xs:w-[2rem] xs:h-[2.5rem] md:w-[1.5rem] md:h-[2rem] m-auto pt-[1rem]"
          />
        </div>
      </div>

      <Chart percentile={percentile}/>
    </div>
  );
};

export default Graph;
