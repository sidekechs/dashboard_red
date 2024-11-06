import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

interface SectionBarChartProps {
  data: {
    category: string;
    senior: number;
    middle: number;
    entry: number;
  }[];
}

export default function SectionBarChart({ data }: SectionBarChartProps) {
  return (
    <div className="w-full h-[400px] bg-white rounded-lg shadow-lg p-4">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">Section Scores by Management Level</h3>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="category" />
          <YAxis domain={[0, 10]} />
          <Tooltip />
          <Legend />
          <Bar dataKey="senior" name="Senior Leadership" fill="#DC2626" />
          <Bar dataKey="middle" name="Middle Management" fill="#EF4444" />
          <Bar dataKey="entry" name="Entry Level" fill="#F87171" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}