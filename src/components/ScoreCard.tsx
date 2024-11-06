import React from 'react';
import { SectionScores } from '../types/assessment';

interface ScoreCardProps {
  title: string;
  scores: SectionScores;
}

function ScoreCard({ title, scores }: ScoreCardProps) {
  const getColorClass = (score: number) => {
    const percentage = (score / 50) * 100;
    if (percentage >= 80) return 'bg-red-600';
    if (percentage >= 60) return 'bg-red-500';
    if (percentage >= 40) return 'bg-red-400';
    if (percentage >= 20) return 'bg-red-300';
    return 'bg-red-200';
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-xl font-bold mb-4 text-gray-800">{title}</h2>
      <div className="mb-4">
        <div className="flex justify-between items-center mb-2">
          <span className="text-gray-600">Total Score</span>
          <span className="font-bold text-2xl text-red-700">{scores.totalScore}/50</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2.5">
          <div
            className={`h-2.5 rounded-full ${getColorClass(scores.totalScore)}`}
            style={{ width: `${(scores.totalScore / 50) * 100}%` }}
          ></div>
        </div>
      </div>
      <div className="mb-4">
        <h3 className="font-semibold text-gray-700 mb-2">Effectiveness Level</h3>
        <p className="text-red-700 font-bold">{scores.effectiveness}</p>
      </div>
      <div>
        <h3 className="font-semibold text-gray-700 mb-2">Category Breakdown</h3>
        {scores.categories.map((category, index) => (
          <div key={index} className="mb-2">
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">{category.title}</span>
              <span className="font-medium">{category.score}/10</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-1.5 mt-1">
              <div
                className={`h-1.5 rounded-full ${getColorClass(category.score * 5)}`}
                style={{ width: `${(category.score / 10) * 100}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ScoreCard;