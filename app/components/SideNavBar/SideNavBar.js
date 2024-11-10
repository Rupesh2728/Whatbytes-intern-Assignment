import React from 'react'
import { RiBarChartFill } from "react-icons/ri";
import { FaRegFile } from "react-icons/fa";
import { SlBadge } from "react-icons/sl";
const SideNavBar = () => {
  return (
    <div className=" pt-[3rem] border-r-[0.075rem] border-t-0 border-l-0 border-b-0 lg:w-[18.5vw] md:w-[25vw] pr-[0.8rem] font-bold hover:text-[blue] cursor-pointer ">
        <div className="h-[4rem] flex hover:bg-[#dfdada] rounded-r-[2rem] text-[#5c5a5a] hover:text-[blue]">
          <div className=" w-full m-[1rem] flex items-center">
          <RiBarChartFill className="text-[1.2rem]"/>
          <p className="text-[1.1rem] pl-[1rem]">Dashboard</p>
          </div>
        </div>

        <div className="mt-[0.75rem] h-[4rem] flex hover:bg-[#dfdada] rounded-r-[2rem] text-[#5c5a5a] hover:text-[blue]">
          <div className=" w-full m-[1rem] flex items-center">
          <SlBadge className="text-[1.2rem]"/>
          <p className="text-[1.1rem]  pl-[1rem]">Skill Test</p>
          </div>
        </div>

        <div className="mt-[0.75rem] h-[4rem] flex hover:bg-[#dfdada] rounded-r-[2rem] text-[#5c5a5a] hover:text-[blue]">
          <div className=" w-full m-[1rem] flex items-center">
          <FaRegFile className="text-[1.2rem] "/>
          <p className="text-[1.1rem] pl-[1rem]">Internship</p>
          </div>
        </div>
    </div>
  )
}

export default SideNavBar