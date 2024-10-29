


'use client'; 

import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export default function QuestionAnalysis({ correctAnswers }) {
  const totalQuestions = 15;
  const scorePercentage = (correctAnswers / totalQuestions) * 100;

  return (
    <div className="p-4 md:p-6 border border-gray-300 rounded-md mb-6">
      <div className="flex flex-col md:flex-row justify-between items-center mb-4">
        <h3 className="text-lg md:text-xl font-bold">Question Analysis</h3>
        <span className="text-lg md:text-xl font-bold text-blue-500">
          {correctAnswers} / {totalQuestions}
        </span>
      </div>

      <p className="text-sm md:text-base text-gray-700 mb-4">
        <span className="font-semibold">
          You scored {correctAnswers} questions correct out of {totalQuestions}.
        </span>
        However, it still <br /> needs some improvements.
      </p>

      {/* Center the Circular Progress Bar and Emoji */}
      <div className="flex items-center justify-center mb-4">
        <div className="relative w-32 md:w-40 h-32 md:h-40"> {/* Adjusted width and height */}
          <CircularProgressbar
            value={scorePercentage}
            styles={{
              path: {
                stroke: `#3b82f6`, // Tailwind indigo-600 color
                strokeWidth: 8, // Increased thickness
              },
              trail: {
                stroke: '#E5E7EB',
                strokeWidth: 8, // Tailwind gray-200 color
              },
            }}
          />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-3xl md:text-4xl">
            🎯 {/* Archery emoji */}
          </div>
        </div>
      </div>
    </div>
  );
}
