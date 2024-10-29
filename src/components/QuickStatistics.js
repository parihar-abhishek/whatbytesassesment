// export default function QuickStatistics({ rank, percentile, correctAnswers }) {
//   return (
//     <div className="p-4 border border-gray-300 rounded-md mb-6 ">
//       <h3 className="text-lg font-bold mb-4">Quick Statistics</h3>
//       <div className="flex justify-around text-center ">
        
//         {/* Rank Section */}
//         <div className="flex items-center space-x-2 "> {/* Adjusted space-x */}
//           <span className="flex items-center justify-center text-xl rounded-full h-11 w-11 bg-gray-200 mr-3">
//             🏆
//           </span>
//           <div className="text-left"> {/* Added text-left */}
//             <p className="text-xl font-bold">{rank}</p>
//             <p className="text-sm text-gray-700">YOUR RANK</p>
//           </div>
//         </div>
        
//         {/* Percentile Section */}
//         <div className="flex items-center space-x-2"> {/* Adjusted space-x */}
//           <span className="flex items-center justify-center text-xl rounded-full h-11 w-11 bg-gray-200 mr-3">
//             📝
//           </span>
//           <div className="text-left "> {/* Added text-left */}
//             <p className="text-xl font-bold">{percentile}%</p>
//             <p className="text-sm text-gray-700">PERCENTILE</p>
//           </div>
//         </div>
        
//         {/* Correct Answers Section */}
//         <div className="flex items-center space-x-2"> {/* Adjusted space-x */}
//           <span className="flex items-center justify-center text-xl rounded-full h-11 w-11 bg-gray-200 mr-3">
//             ✅
//           </span>
//           <div className="text-left"> {/* Added text-left */}
//             <p className="text-xl font-bold">{correctAnswers} / 15</p>
//             <p className="text-sm text-gray-700">CORRECT ANSWERS</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }





// export default function QuickStatistics({ rank, percentile, correctAnswers }) {
//   return (
//     <div className="p-4 border border-gray-300 rounded-md mb-6 ">
//       <h3 className="text-lg font-bold mb-4">Quick Statistics</h3>
//       <div className="flex flex-wrap justify-around text-center space-y-4 md:space-y-0 md:flex-nowrap">
        
//         {/* Rank Section */}
//         <div className="flex items-center space-x-2 w-full md:w-auto"> {/* Adjust width for responsiveness */}
//           <span className="flex items-center justify-center text-xl rounded-full h-11 w-11 bg-gray-200 mr-3">
//             🏆
//           </span>
//           <div className="text-left"> {/* Added text-left */}
//             <p className="text-xl font-bold">{rank}</p>
//             <p className="text-sm text-gray-700">YOUR RANK</p>
//           </div>
//         </div>
        
//         {/* Percentile Section */}
//         <div className="flex items-center space-x-2 w-full md:w-auto"> {/* Adjust width for responsiveness */}
//           <span className="flex items-center justify-center text-xl rounded-full h-11 w-11 bg-gray-200 mr-3">
//             📝
//           </span>
//           <div className="text-left "> {/* Added text-left */}
//             <p className="text-xl font-bold">{percentile}%</p>
//             <p className="text-sm text-gray-700">PERCENTILE</p>
//           </div>
//         </div>
        
//         {/* Correct Answers Section */}
//         <div className="flex items-center space-x-2 w-full md:w-auto"> {/* Adjust width for responsiveness */}
//           <span className="flex items-center justify-center text-xl rounded-full h-11 w-11 bg-gray-200 mr-3">
//             ✅
//           </span>
//           <div className="text-left"> {/* Added text-left */}
//             <p className="text-xl font-bold">{correctAnswers} / 15</p>
//             <p className="text-sm text-gray-700">CORRECT ANSWERS</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }



export default function QuickStatistics({ rank, percentile, correctAnswers }) {
  return (
    <div className="p-4 border border-gray-300 rounded-md mb-6">
      <h3 className="text-lg md:text-xl font-bold mb-4">Quick Statistics</h3>
      <div className="flex flex-wrap justify-around text-center space-y-4 md:space-y-0 md:flex-nowrap">
        
        {/* Rank Section */}
        <div className="flex items-center space-x-2 w-full md:w-auto"> {/* Adjust width for responsiveness */}
          <span className="flex items-center justify-center text-xl rounded-full h-11 w-11 bg-gray-200 mr-3">
            🏆
          </span>
          <div className="text-left"> {/* Added text-left */}
            <p className="text-lg md:text-xl font-bold">{rank}</p>
            <p className="text-xs md:text-sm text-gray-700">YOUR RANK</p>
          </div>
        </div>
        
        {/* Percentile Section */}
        <div className="flex items-center space-x-2 w-full md:w-auto"> {/* Adjust width for responsiveness */}
          <span className="flex items-center justify-center text-xl rounded-full h-11 w-11 bg-gray-200 mr-3">
            📝
          </span>
          <div className="text-left "> {/* Added text-left */}
            <p className="text-lg md:text-xl font-bold">{percentile}%</p>
            <p className="text-xs md:text-sm text-gray-700">PERCENTILE</p>
          </div>
        </div>
        
        {/* Correct Answers Section */}
        <div className="flex items-center space-x-2 w-full md:w-auto"> {/* Adjust width for responsiveness */}
          <span className="flex items-center justify-center text-xl rounded-full h-11 w-11 bg-gray-200 mr-3">
            ✅
          </span>
          <div className="text-left"> {/* Added text-left */}
            <p className="text-lg md:text-xl font-bold">{correctAnswers} / 15</p>
            <p className="text-xs md:text-sm text-gray-700">CORRECT ANSWERS</p>
          </div>
        </div>
      </div>
    </div>
  );
}
