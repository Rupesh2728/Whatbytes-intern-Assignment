'use client'
import React,{useState} from 'react'
import Stats from './Stats/Stats'
import Progress from './ProgressSection/Progress'


const Main = () => {
  
  const [data, setdata] = useState({
    rank:"2",
    percentile: "60",
    curr_score: "12",
  });

  const func=(data)=>{
     setdata(data);
  }
  
  return (
    <div className="flex-col">
    <p className="mt-[2rem] ml-[2rem] text-[1.1rem]">Skill Test</p>
     
    <div className="lg:flex"> 
     <Stats func={func}/>   
     <Progress data={data}/>
    </div>
    </div>
  )
}

export default Main