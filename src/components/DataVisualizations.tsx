import React from 'react';
import SectionBarChart from './charts/SectionBarChart';
import EffectivenessDonut from './charts/EffectivenessDonut';
import ResponseDistribution from './charts/ResponseDistribution';
import CategoryRadarChart from './charts/RadarChart';
import { AssessmentResponse } from '../types/assessment';
import { calculateScores } from '../utils/scoring';

interface DataVisualizationsProps {
  response: AssessmentResponse;
}

export default function DataVisualizations({ response }: DataVisualizationsProps) {
  const scores = calculateScores(response);
  
  const sectionData = response.responses.senior.map(cat => ({
    category: cat.categoryTitle,
    senior: scores.senior.categories.find(c => c.title === cat.categoryTitle)?.score || 0,
    middle: scores.middle.categories.find(c => c.title === cat.categoryTitle)?.score || 0,
    entry: scores.entry.categories.find(c => c.title === cat.categoryTitle)?.score || 0,
  }));

  const effectivenessData = [
    {
      name: 'Senior Leadership',
      value: scores.senior.totalScore,
      color: '#DC2626' // Red-600
    },
    {
      name: 'Middle Management',
      value: scores.middle.totalScore,
      color: '#EF4444' // Red-500
    },
    {
      name: 'Entry Level',
      value: scores.entry.totalScore,
      color: '#F87171' // Red-400
    }
  ];

  const distributionData = response.responses.senior.map(cat => {
    const answers = cat.answers;
    return {
      category: cat.categoryTitle,
      yes: answers.filter(a => a.score === 2).length,
      partial: answers.filter(a => a.score === 1).length,
      no: answers.filter(a => a.score === 0).length,
    };
  });

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <SectionBarChart data={sectionData} />
        <CategoryRadarChart data={sectionData} />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <EffectivenessDonut 
          data={effectivenessData}
          title="Overall Effectiveness Distribution"
        />
        <ResponseDistribution data={distributionData} />
      </div>
    </div>
  );
}