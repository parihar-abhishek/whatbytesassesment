
"use client"


import { useState } from 'react';
import Navbar from '@/components/Navbar';
import SkillTestHeader from '@/components/SkillTestHeader';
import QuickStatistics from '@/components/QuickStatistics';
import ComparisonGraph from '@/components/ComparisonGraph';
import SyllabusAnalysis from '@/components/SyllabusAnalysis';
import QuestionAnalysis from '@/components/QuestionAnalysis';

export default function SkillTestPage() {
  const [rank, setRank] = useState(1);
  const [percentile, setPercentile] = useState(30);
  const [correctAnswers, setCorrectAnswers] = useState(10);

  // Update function to pass down to SkillTestHeader
  const handleUpdate = (newRank, newPercentile, newCorrectAnswers) => {
    setRank(newRank);
    setPercentile(newPercentile);
    setCorrectAnswers(newCorrectAnswers);
  };





 

  return (
  

  <div className="p-4">
  <Navbar />
  <div className="flex flex-col md:flex-row">
    
    <div className="flex-grow p-6">
      <SkillTestHeader rank={1} percentile={percentile} correctAnswers={correctAnswers} onUpdate={handleUpdate} />
      <QuickStatistics rank={rank} correctAnswers={correctAnswers} percentile={percentile} />
      <ComparisonGraph percentile={percentile} />
    </div>
    
    <div className="flex-none w-full md:w-1/3 p-6">
      <SyllabusAnalysis />
      <QuestionAnalysis correctAnswers={correctAnswers} percentile={percentile} />
    </div>
  </div>
</div>




 
  );
}
