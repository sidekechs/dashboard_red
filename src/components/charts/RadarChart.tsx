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

interface RadarChartProps {
  data: {
    category: string;
    senior: number;
    middle: number;
    entry: number;
  }[];
}

export default function CategoryRadarChart({ data }: RadarChartProps) {
  return (
    <div className="w-full h-[400px] bg-white rounded-lg shadow-lg p-4">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">Category Performance Radar</h3>
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
            fillOpacity={0.6}
          />
          <Radar
            name="Middle Management"
            dataKey="middle"
            stroke="#EF4444"
            fill="#EF4444"
            fillOpacity={0.6}
          />
          <Radar
            name="Entry Level"
            dataKey="entry"
            stroke="#F87171"
            fill="#F87171"
            fillOpacity={0.6}
          />
          <Legend />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
}