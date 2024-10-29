


export default function SyllabusAnalysis() {
  const syllabusData = [
    { topic: 'HTML Tools, Forms, History', percentage: 80 },
    { topic: 'Tags & References in HTML', percentage: 60 },
    { topic: 'Tables & References in HTML', percentage: 24 },
    { topic: 'Tables & CSS Basics', percentage: 96 },
  ];

  return (
    <div className="p-4 md:p-6 border border-gray-300 rounded-md bg-white mb-10">
      <h3 className="text-lg md:text-xl font-bold mb-6">Syllabus Wise Analysis</h3>
      <ul>
        {syllabusData.map((item, index) => (
          <li key={index} className="mb-6 md:mb-8">
            <div className="flex justify-between mb-1">
              <span className="text-sm md:text-base font-medium text-gray-700">{item.topic}</span>
              <span
                className={`text-sm md:text-base font-semibold ${
                  item.percentage > 90
                    ? 'text-green-500'
                    : item.percentage >= 80
                    ? 'text-blue-500'
                    : item.percentage >= 50
                    ? 'text-orange-500'
                    : 'text-red-500'
                }`}
              >
                {item.percentage}%
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div
                className={`h-2.5 rounded-full ${
                  item.percentage > 90
                    ? 'bg-green-500'
                    : item.percentage >= 80
                    ? 'bg-blue-500'
                    : item.percentage >= 50
                    ? 'bg-orange-500'
                    : 'bg-red-500'
                }`}
                style={{ width: `${item.percentage}%` }}
              ></div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
