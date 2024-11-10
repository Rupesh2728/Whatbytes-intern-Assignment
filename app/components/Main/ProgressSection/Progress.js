import React from 'react'
import SubjectAnalysis from './SubjectAnalysis'
import QuestionAnalysis from './QuestionAnalysis'


const Progress = ({data}) => {
  return (
    <div>
     <SubjectAnalysis/>
     <QuestionAnalysis score={data.curr_score}/>
    </div>
  )
}

export default Progress