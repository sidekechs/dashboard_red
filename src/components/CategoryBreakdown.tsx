import React from 'react';
import { AssessmentScores } from '../types/assessment';
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

interface CategoryBreakdownProps {
  scores: AssessmentScores;
}

function CategoryBreakdown({ scores }: CategoryBreakdownProps) {
  const data = scores.senior.categories.map((cat, index) => ({
    name: cat.title,
    senior: scores.senior.categories[index].score,
    middle: scores.middle.categories[index].score,
    entry: scores.entry.categories[index].score,
  }));

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Category Score Comparison</h2>
      <div className="h-[400px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis domain={[0, 10]} />
            <Tooltip />
            <Legend />
            <Bar dataKey="senior" name="Senior Leadership" fill="#DC2626" />
            <Bar dataKey="middle" name="Middle Management" fill="#EF4444" />
            <Bar dataKey="entry" name="Entry Level" fill="#F87171" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default CategoryBreakdown;