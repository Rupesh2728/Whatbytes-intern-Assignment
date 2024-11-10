import React from 'react';

import {
  ProgressCircleRing,
  ProgressCircleRoot,
  ProgressCircleValueText,
} from "@/components/ui/progress-circle"
import Image from 'next/image';
import target from '../../../Assests/target.jpg';


const QuestionAnalysis = ({score}) => {
  return (
    <div className="py-[1rem] mb-[1rem] pl-[0.5rem] border-[0.075rem] ml-[2rem] mt-[1.5rem] rounded-lg xs:w-[90%] lg:w-[31rem]">
     <div className="flex justify-between mt-[1rem] ">
     <p className="font-bold pl-[0.8rem] ">Question Analysis</p>
     <p className=" items-center text-[blue] font-bold mr-[2rem] text-[1.1rem]">{score}/15</p>
     </div>

     <p className="mt-[0.8rem] pl-[0.8rem] w-[90%] text-[1rem] text-slate-600"><span className="font-bold">You scored {score} question correct out of 15.</span> However, it still needs some improvements</p>
 
   <div className="flex justify-center mt-[3rem]">
   <Image src={target} alt="target" className="w-[5rem] h-[4rem] absolute bottom-[5rem]"/>
   <ProgressCircleRoot value={(score/15)*100} colorPalette="blue" size="lg" className="relative">
        <ProgressCircleRing css={{ "--thickness": "1.5rem", "--size" : "10rem" }}/>
     </ProgressCircleRoot>
   </div>
   </div>
  )
}

export default QuestionAnalysis