import React from 'react';
import { Trophy, Target, AlertTriangle } from 'lucide-react';

interface SectionSummaryProps {
  sections: {
    title: string;
    score: number;
    maxScore: number;
    effectiveness: string;
  }[];
}

export default function SectionSummary({ sections }: SectionSummaryProps) {
  const getIcon = (effectiveness: string) => {
    switch (effectiveness.toLowerCase()) {
      case 'strongly effective':
        return <Trophy className="w-5 h-5 text-emerald-500" />;
      case 'moderately effective':
        return <Target className="w-5 h-5 text-yellow-500" />;
      default:
        return <AlertTriangle className="w-5 h-5 text-red-500" />;
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
      {sections.map((section, index) => (
        <div key={index} className="bg-white rounded-lg shadow p-4">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-lg font-semibold text-gray-800">{section.title}</h3>
            {getIcon(section.effectiveness)}
          </div>
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">Score</span>
              <span className="text-sm font-medium text-gray-900">
                {section.score}/{section.maxScore}
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className={`h-2 rounded-full ${
                  section.effectiveness.toLowerCase().includes('strongly')
                    ? 'bg-emerald-500'
                    : section.effectiveness.toLowerCase().includes('moderately')
                    ? 'bg-yellow-500'
                    : 'bg-red-500'
                }`}
                style={{ width: `${(section.score / section.maxScore) * 100}%` }}
              />
            </div>
            <p className="text-sm font-medium text-gray-600">
              {section.effectiveness}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}