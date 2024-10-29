

import { useState } from 'react';
import htmlImage from "../assets/html-icon.svg";
import Image from 'next/image';

export default function SkillTestHeader({ rank, percentile, correctAnswers, onUpdate }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newRank, setNewRank] = useState(rank);
  const [newPercentile, setNewPercentile] = useState(percentile);
  const [newCorrectAnswers, setNewCorrectAnswers] = useState(correctAnswers);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleSave = () => {
    onUpdate(newRank, newPercentile, newCorrectAnswers);
    closeModal();
  };

  return (
    <div className="p-4 border border-gray-300 rounded-md mb-6">
      <div className="flex flex-col md:flex-row justify-between items-center">
        {/* Left Section with Image and Text */}
        <div className="flex items-center space-x-4">
          <Image src={htmlImage} width={50} height={50} alt="HTML Icon" />
          <div>
            <h2 className="text-lg md:text-xl lg:text-2xl font-bold mb-1">Hyper Text Markup Language</h2>
            <p className="text-xs md:text-sm lg:text-base text-gray-700">
              Questions: 08 | Duration: 15 mins | Submitted on 5 June 2021
            </p>
          </div>
        </div>

        {/* Update Button */}
        <button
          onClick={openModal}
          className="mt-4 md:mt-0 bg-[#32174D] text-white px-4 py-1 rounded-md hover:bg-[#32174D]"
        >
          Update
        </button>
      </div>

      {/* Modal for Updating Statistics */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-md w-full max-w-md">
            <h3 className="text-lg font-bold mb-4">Update Statistics</h3>
            <label className="block mb-2">
              Rank:
              <input
                type="number"
                value={newRank}
                onChange={(e) => setNewRank(Number(e.target.value))}
                className="w-full p-2 border rounded-md mt-1"
              />
            </label>
            <label className="block mb-2">
              Percentile:
              <input
                type="number"
                value={newPercentile}
                onChange={(e) => setNewPercentile(Number(e.target.value))}
                className="w-full p-2 border rounded-md mt-1"
              />
            </label>
            <label className="block mb-4">
              Correct Answers:
              <input
                type="number"
                value={newCorrectAnswers}
                onChange={(e) => setNewCorrectAnswers(Number(e.target.value))}
                className="w-full p-2 border rounded-md mt-1"
              />
            </label>
            <div className="flex justify-end space-x-4">
              <button
                onClick={closeModal}
                className="px-4 py-2 bg-gray-300 rounded-md hover:bg-gray-400"
              >
                Cancel
              </button>
              <button
                onClick={handleSave}
                className="px-4 py-2 bg-purple-500 text-white rounded-md hover:bg-[#32174D]"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
