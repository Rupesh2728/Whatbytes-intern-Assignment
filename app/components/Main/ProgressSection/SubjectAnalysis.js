import React from 'react';
import { HStack } from "@chakra-ui/react"
import {
  ProgressBar,
  ProgressLabel,
  ProgressRoot,
  ProgressValueText,
} from "@/components/ui/progress"


const SubjectAnalysis = () => {
  return (
    <div className="py-[1rem] pb-[2.5rem] pl-[0.5rem] border-[0.075rem] ml-[2rem] mt-[1.5rem] rounded-lg xs:w-[90%] lg:w-[31rem] ">
    <p className="font-bold pl-[0.8rem] mt-[1rem] ">Syllabus Wise Analysis</p>
     
    <div className="mt-[2rem] pl-[0.8rem] text-slate-600">
      <p>HTML Tools, Forms, History</p>
      <ProgressRoot value={80} colorPalette="blue" variant="subtle" className="mt-[1rem] w-[95%]">
      <HStack gap="5">
        <ProgressBar flex="1" className="rounded-lg " />
        <ProgressValueText className="text-[blue] font-bold text-[1rem]">80%</ProgressValueText>
      </HStack>
    </ProgressRoot>
    
    </div>

    <div className="mt-[2rem] pl-[0.8rem] text-slate-600">
      <p>Tags and References in HTML</p>
      <ProgressRoot value={60} colorPalette="orange" variant="subtle" className="mt-[1rem] w-[95%]">
      <HStack gap="5">
        <ProgressBar flex="1" className="rounded-lg " />
        <ProgressValueText className="text-[orange] font-bold text-[1rem]">60%</ProgressValueText>
      </HStack>
    </ProgressRoot>
    
    </div>

    <div className="mt-[2rem] pl-[0.8rem] text-slate-600">
      <p>Tables & References in HTML</p>
      <ProgressRoot value={24} colorPalette="red" variant="subtle" className="mt-[1rem] w-[95%]">
      <HStack gap="5">
        <ProgressBar flex="1" className="rounded-lg " />
        <ProgressValueText className="text-[red] font-bold text-[1rem]">24%</ProgressValueText>
      </HStack>
    </ProgressRoot>
    
    </div>

    <div className="mt-[2rem] pl-[0.8rem] text-slate-600">
      <p>Tables & CSS Basics</p>
      <ProgressRoot value={96} colorPalette="green" variant="subtle" className="mt-[1rem] w-[95%]">
      <HStack gap="5">
        <ProgressBar flex="1" className="rounded-lg " />
        <ProgressValueText className="text-[green] font-bold text-[1rem]">96%</ProgressValueText>
      </HStack>
    </ProgressRoot>
    
    </div>



  </div>
  )
}

export default SubjectAnalysis