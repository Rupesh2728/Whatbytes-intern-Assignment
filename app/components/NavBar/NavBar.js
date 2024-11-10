import React from 'react';
import Image from 'next/image';
import logo from '../../Assests/whatbyteslogo.png';
import profile_pic from '../../Assests/profile.jpeg';

const NavBar = () => {
  return (
    <div className="flex justify-between mt-[1.25rem] border-t-0 border-l-0 border-r-0 border-b-[0.075rem] pb-[1.5rem] ">
     <Image className="w-[13rem] ml-[1rem]" src={logo} alt="logo"/>
 
    <button className="flex items-center border-[0.1rem] rounded-lg shadow-md mr-[1rem]">
       <Image alt="Profile_Pic" src={profile_pic} className="w-[1.8rem] h-[2.1rem] rounded-[50%] ml-[0.5rem]"/>
       <p className="font-bold px-[0.5rem]">Rahil Siddique</p>
    </button>
    </div>
  )
}

export default NavBar