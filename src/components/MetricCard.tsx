import React from 'react';
interface MetricCardProps {
  title: string;
  value: string;
  change: string;
  icon: React.ReactNode;
  trend: 'up' | 'down';
}
export function MetricCard({
  title,
  value,
  change,
  icon,
  trend
}: MetricCardProps) {
  return <div className="bg-white rounded-lg border border-gray-200 p-6">
      <div className="flex items-center justify-between mb-4">
        <span className="text-sm font-medium text-gray-600">{title}</span>
        <div className="text-gray-400">{icon}</div>
      </div>
      <div className="flex items-end justify-between">
        <div>
          <div className="text-2xl font-bold text-gray-900">{value}</div>
          <div className={`text-sm font-medium mt-1 ${trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
            {change} from last month
          </div>
        </div>
      </div>
    </div>;
}