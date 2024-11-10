"use client";
import Image from "next/image";
import React,{useState,useEffect} from "react";
import htmlimg from "../../../Assests/HTML.png";

const ModelContent = ({ data,setdata,setrank,setpercentile,setcurr_score,rank,percentile,curr_score}) => {
  
      const checkfunc=()=>{
        if(data.rank!=="" && typeof(Number(data.rank)) === "number" && Number(data.rank) >= 1 )
            setrank(true);

       else
            setrank(false);

        if(data.percentile!=="" && typeof(Number(data.percentile)) === "number" && (Number(data.percentile)>=0 && Number(data.percentile)<=100)) 
            setpercentile(true);

        else
            setpercentile(false);

        if(data.curr_score!=="" && typeof(Number(data.curr_score)) === "number" && Number(data.curr_score) >=0 && Number(data.curr_score)<=15) 
            setcurr_score(true);

        else
            setcurr_score(false);
      }
      
      useEffect(()=>{
        checkfunc();
      },[data]);

      const ChangeHandler = (e) => {
        const { name, value } = e.target;
        setdata((prev) => {
          return {
            ...prev,
            [name]: value,
          };
        });
        
        console.log(data);
        };
        
    return (
    <div>
      <div className="flex justify-between pt-[2rem] items-center">
        <p className="text-[1.75rem] font-bold pl-[1.5rem]">
           Update Scores
        </p>
        <Image alt="HTML_Img" src={htmlimg} className="xs:w-[4rem] md:w-[3rem]" />
      </div>

      <div className="p-2 flex justify-between mt-[1.5rem]">
        <div className="flex items-center">
          <div className="bg-[1rem] flex justify-center bg-[rgb(33,33,97)] rounded-full w-[1.75rem] h-[1.75rem]">
            <p className="text-white text-[1rem]  m-auto">1</p>
          </div>

          <label className="text-[1rem] text-[#222222] ml-[1rem]">
            Update your <span className="font-bold">Rank</span>
          </label>
        </div>

       <div>
       <input
          value={data.rank}
          onChange={ChangeHandler}
          name="rank"
          className="h-[2.5rem] border text-[0.9rem] font-[500] border-[blue] rounded-md mt-[0.6rem] hover:border-[rgb(33,33,97)] focus:outline-none pl-[0.5rem]"
          required
        />
          {!rank && <p className="mt-[0.2rem] text-[red] text-[0.8rem]">*required I should be a number</p>}
       </div>
      </div>

      <div className="p-2 flex justify-between">
        <div className="flex items-center">
          <div className="bg-[1rem] flex justify-center bg-[rgb(33,33,97)] rounded-full w-[1.75rem] h-[1.75rem]">
            <p className="text-white text-[1rem]  m-auto">2</p>
          </div>

          <label className=" text-[1rem] text-[#222222] ml-[1rem]">
            Update your <span className="font-bold">Percentile</span>
          </label>
        </div>
       <div>
      <input
          value={data.percentile}
          onChange={ChangeHandler}
          name="percentile"
          className=" h-[2.5rem] border text-[0.9rem] font-[500] border-[blue] rounded-md mt-[0.6rem] hover:border-[rgb(33,33,97)] focus:outline-none pl-[0.5rem]"
          required
        />
       {!percentile &&  <p className="mt-[0.2rem] text-[red] text-[0.8rem]">*required I percentile 0-100</p>}
      </div>
      </div>

      <div className="p-2 flex justify-between">
        <div className="flex items-center">
          <div className="bg-[1rem] flex justify-center bg-[rgb(33,33,97)] rounded-full w-[1.75rem] h-[1.75rem]">
            <p className="text-white text-[1rem]  m-auto">3</p>
          </div>

          <label className="text-[1rem] text-[#222222] ml-[1rem]">
            Update your <span className="font-bold">Current Score (out of 15)</span>
          </label>
        </div>
        <div>
        <input
          value={data.curr_score}
          onChange={ChangeHandler}
          name="curr_score"
          className=" h-[2.5rem] border text-[0.9rem] font-[500] border-[blue] rounded-md mt-[0.6rem] hover:border-[rgb(33,33,97)] focus:outline-none pl-[0.5rem]"
          required
        />
         {!curr_score && <p className="mt-[0.2rem] text-[red] text-[0.8rem]">*required I should be a number</p>}
        </div>
      </div>
    </div>
  );
};

export default ModelContent;
