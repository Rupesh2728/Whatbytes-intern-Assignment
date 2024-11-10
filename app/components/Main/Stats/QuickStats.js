import React from 'react';
import correct from '../../../Assests/correct.png'
import notepad from '../../../Assests/notepad.png'
import trophy from '../../../Assests/trophy.png'

import Image from 'next/image'

const QuickStats = ({data}) => {
  return (
    <div className="py-[1rem] pl-[0.5rem] border-[0.075rem] ml-[2rem] mt-[1.5rem] rounded-lg xs:w-[90%] sm:w-[85%] md:w-[90%] lg:w-[95%]">
      <p className="font-bold pl-[0.8rem] ">Quick Statistics</p>
      
     <div className="flex justify-evenly">
        
     <div className="mt-[0.5rem] border-r-[0.1rem]">
        <div className="flex py-[0.75rem] px-[1rem]">
        <div className="bg-[1rem] bg-slate-100 rounded-full w-[3.25rem] h-[3.25rem]">
           <Image alt="Trophy" src={trophy} className="w-[2.25rem] m-auto pt-[0.5rem]"/>
         </div>
         <div className="text-[1rem] ml-[0.5rem]">
            <p className="font-bold text-[1.3rem]">{data.rank}</p>
            <p className="xs:text-[0.65rem] md:text-[0.9rem] text-slate-500">YOUR RANK</p>
         </div>
        </div>
      </div>

      <div className="mt-[0.5rem] border-r-[0.1rem]">
     <div className="flex py-[0.75rem] px-[1rem]">
         <div className="bg-[1rem] bg-slate-100 rounded-full w-[3.5rem] h-[3.5rem]">
           <Image alt="Notepad" src={notepad} className="w-[1.5rem] m-auto pt-[0.85rem]"/>
         </div>
         <div className="text-[1rem] ml-[0.5rem]">
            <p className="font-bold text-[1.3rem]">{data.percentile}%</p>
            <p className="xs:text-[0.65rem] md:text-[0.9rem] text-slate-500">PERCENTILE</p>
         </div>
      </div>
     </div>

     <div className="mt-[0.5rem]">
     <div className="flex py-[0.75rem] px-[1rem] ">
          <div className="bg-[1rem] bg-slate-100 rounded-full w-[3.5rem] h-[3.5rem]">
           <Image alt="correct" src={correct} className="w-[2.75rem] m-auto pt-[0.9rem]"/>
         </div>
         <div className="text-[1rem] ml-[0.5rem]">
            <p className="font-bold text-[1.3rem] tracking-wider">{data.curr_score}/15</p>
            <p className="xs:text-[0.65rem] md:text-[0.9rem] text-slate-500">CORRECT ANSWERS</p>
         </div>
      </div>
     </div>
     </div>
   
    </div>
  )
}

export default QuickStats