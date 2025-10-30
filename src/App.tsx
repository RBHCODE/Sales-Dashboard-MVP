import React from 'react';
import { MetricCard } from './components/MetricCard';
import { SalesChart } from './components/SalesChart';
import { RecentSales } from './components/RecentSales';
import { TrendingUpIcon, DollarSignIcon, UsersIcon, ShoppingCartIcon } from 'lucide-react';
export function App() {
  return <div className="w-full min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 px-6 py-4">
        <h1 className="text-2xl font-bold text-gray-900">Sales Dashboard</h1>
      </header>
      {/* Main Content */}
      <main className="p-6">
        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          <MetricCard title="Total Revenue" value="$45,231" change="+20.1%" icon={<DollarSignIcon className="w-5 h-5" />} trend="up" />
          <MetricCard title="Sales" value="2,350" change="+15.3%" icon={<ShoppingCartIcon className="w-5 h-5" />} trend="up" />
          <MetricCard title="Customers" value="1,234" change="+8.2%" icon={<UsersIcon className="w-5 h-5" />} trend="up" />
          <MetricCard title="Growth Rate" value="12.5%" change="-2.4%" icon={<TrendingUpIcon className="w-5 h-5" />} trend="down" />
        </div>
        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <SalesChart />
          </div>
          <div>
            <RecentSales />
          </div>
        </div>
      </main>
    </div>;
}