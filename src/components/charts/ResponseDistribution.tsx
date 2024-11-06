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

interface ResponseDistributionProps {
  data: {
    category: string;
    yes: number;
    partial: number;
    no: number;
  }[];
}

export default function ResponseDistribution({ data }: ResponseDistributionProps) {
  return (
    <div className="w-full h-[400px] bg-white rounded-lg shadow-lg p-4">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">Response Distribution by Category</h3>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="category" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="yes" name="Yes" stackId="a" fill="#DC2626" />
          <Bar dataKey="partial" name="Partially" stackId="a" fill="#EF4444" />
          <Bar dataKey="no" name="No" stackId="a" fill="#F87171" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}