import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
const data = [{
  month: 'Jan',
  sales: 4000
}, {
  month: 'Feb',
  sales: 3000
}, {
  month: 'Mar',
  sales: 5000
}, {
  month: 'Apr',
  sales: 4500
}, {
  month: 'May',
  sales: 6000
}, {
  month: 'Jun',
  sales: 5500
}, {
  month: 'Jul',
  sales: 7000
}];
export function SalesChart() {
  return <div className="bg-white rounded-lg border border-gray-200 p-6">
      <h2 className="text-lg font-semibold text-gray-900 mb-4">
        Sales Overview
      </h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
          <XAxis dataKey="month" stroke="#6b7280" />
          <YAxis stroke="#6b7280" />
          <Tooltip />
          <Line type="monotone" dataKey="sales" stroke="#3b82f6" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>;
}