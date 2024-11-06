import React from 'react';
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
  Legend,
} from 'recharts';
import { AssessmentScores } from '../types/assessment';

interface CategoryRadarChartProps {
  scores: AssessmentScores;
}

export default function CategoryRadarChart({ scores }: CategoryRadarChartProps) {
  const data = scores.senior.categories.map((cat, index) => ({
    category: cat.title,
    senior: scores.senior.categories[index].score,
    middle: scores.middle.categories[index].score,
    entry: scores.entry.categories[index].score,
  }));

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Category Performance Overview</h2>
      <div className="h-[400px]">
        <ResponsiveContainer width="100%" height="100%">
          <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
            <PolarGrid />
            <PolarAngleAxis dataKey="category" />
            <PolarRadiusAxis domain={[0, 10]} />
            <Radar
              name="Senior Leadership"
              dataKey="senior"
              stroke="#DC2626"
              fill="#DC2626"
              fillOpacity={0.3}
            />
            <Radar
              name="Middle Management"
              dataKey="middle"
              stroke="#EF4444"
              fill="#EF4444"
              fillOpacity={0.3}
            />
            <Radar
              name="Entry Level"
              dataKey="entry"
              stroke="#F87171"
              fill="#F87171"
              fillOpacity={0.3}
            />
            <Legend />
          </RadarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}