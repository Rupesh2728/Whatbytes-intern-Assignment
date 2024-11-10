"use client";
import React, { useState } from "react";
import htmlimg from "../../../Assests/HTML.png";
import { FaArrowRight } from "react-icons/fa6";
import {
  DialogActionTrigger,
  DialogBody,
  DialogContent,
  DialogFooter,
  DialogRoot,
  DialogBackdrop
} from "@/components/ui/dialog";
import Image from "next/image";
import ModelContent from "./ModelContent";

const Test = ({datafunc}) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => setIsOpen(true);

  const [rank, setrank] = useState(true);
  const [percentile, setpercentile] = useState(true);
  const [curr_score, setcurr_score] = useState(true);

  const [data, setdata] = useState({
    rank:"2",
    percentile: "60",
    curr_score: "12",
  });

  const SubmitHandler = () => {
    datafunc(data);
    setIsOpen(false);
  };

  const onCancelHandler=()=>{
    setIsOpen(false);
    setdata({
      rank: 2,
      percentile: 60,
      curr_score: 12,
    })
  }


  return (
    <>
      <DialogRoot
        key="center"
        placement="center"
        motionPreset="slide-in-bottom"
        open={isOpen}
        size="lg"
        style={{'width': '80%'}}
      >
        {/* <DialogBackdrop  className="w-[115vw] h-[200vw]"/> */}
        <DialogContent>
          <DialogBody>
            <ModelContent data={data} setdata={setdata}  setrank={setrank} setpercentile={setpercentile} setcurr_score={setcurr_score} 
            rank={rank} percentile={percentile} curr_score={curr_score}/>
          </DialogBody>
          <DialogFooter>
            <DialogActionTrigger asChild>
            <button
              onClick={onCancelHandler}
              className=" text-[rgb(33,33,97)] font-bold border-[0.1rem] border-[rgb(33,33,97)] px-[0.8rem] h-[3rem] rounded-lg ml-[0.8rem]"
            >
             Cancel
            </button>
            </DialogActionTrigger>

            
            {(rank && percentile && curr_score )? (<button
              onClick={SubmitHandler}
              className="bg-[rgb(33,33,97)] flex text-white border-[0.1rem] px-[0.8rem] w-[7rem] h-[3rem] rounded-lg ml-[0.8rem]"
            >
              <p className="m-auto">Save</p>
              <FaArrowRight className="m-auto"/>
            </button>) : 

           ( <button disabled={true}
            onClick={SubmitHandler}
            className="bg-[indianred] flex text-white border-[0.1rem] px-[0.8rem] w-[7rem] h-[3rem] rounded-lg ml-[0.8rem]"
          >
            <p className="m-auto">Save</p>
            <FaArrowRight className="m-auto"/>
          </button>)}
          </DialogFooter>
        </DialogContent>
      </DialogRoot>

      <div className="flex p-[1.8rem] pl-[0.5rem] border-[0.075rem] ml-[2rem] mt-[1.5rem] rounded-lg xs:w-[90%] sm:w-[85%] md:w-[90%] lg:w-[95%]">
        <Image alt="HTML_Img" src={htmlimg} className="xs:w-[4.5rem] xs:h-[4.5rem] md:w-[7.5vw] md:h-[7.5vw] lg:w-[3.5rem] lg:h-[3.5rem]" />
        <div className="flex-col ml-[1rem] mt-[0.5rem] ">
          <p className="font-bold md:text-[2vw] lg:text-[1rem]">Hyper Text Markup Language</p>
          <p className="md:text-[2vw] lg:text-[1rem] text-slate-500">
            Questions: 08 | Duration: 15 mins | Submitted on 5 June 2021
          </p>
        </div>
        <button
          onClick={handleOpen}
          className="bg-[rgb(33,33,97)] hover:bg-[blue] text-white font-semibold w-[7rem] h-[2.75rem] rounded-lg xs:text-[0.8rem] md:text-[0.9rem] ml-[1rem]"
        >
          Update
        </button>
      </div>
    </>
  );
};

export default Test;
