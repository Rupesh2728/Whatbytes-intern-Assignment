'use client'
import React,{useState} from 'react'
import Test from './Test'
import QuickStats from './QuickStats'
import Graph from './Graph'

const Stats = ({func}) => {
  
  const [data, setdata] = useState({
    rank:"2",
    percentile: "60",
    curr_score: "12",
  });

  const datafunc=(data)=>{
     setdata(data);
     console.log(data);
     func(data);
  }
   
  return (
    <div>
        <Test datafunc={datafunc}/>
        <QuickStats data={data}/>
        <Graph percentile={data.percentile} data={data}/>
    </div>
  )
}

export default Stats