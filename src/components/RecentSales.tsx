import React from 'react';
const recentSales = [{
  name: 'Olivia Martin',
  email: 'olivia@example.com',
  amount: '$1,999'
}, {
  name: 'Jackson Lee',
  email: 'jackson@example.com',
  amount: '$1,499'
}, {
  name: 'Isabella Nguyen',
  email: 'isabella@example.com',
  amount: '$999'
}, {
  name: 'William Kim',
  email: 'william@example.com',
  amount: '$799'
}, {
  name: 'Sofia Davis',
  email: 'sofia@example.com',
  amount: '$599'
}];
export function RecentSales() {
  return <div className="bg-white rounded-lg border border-gray-200 p-6">
      <h2 className="text-lg font-semibold text-gray-900 mb-4">Recent Sales</h2>
      <div className="space-y-4">
        {recentSales.map((sale, index) => <div key={index} className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
                <span className="text-sm font-medium text-gray-600">
                  {sale.name.split(' ').map(n => n[0]).join('')}
                </span>
              </div>
              <div>
                <div className="text-sm font-medium text-gray-900">
                  {sale.name}
                </div>
                <div className="text-xs text-gray-500">{sale.email}</div>
              </div>
            </div>
            <div className="text-sm font-semibold text-gray-900">
              {sale.amount}
            </div>
          </div>)}
      </div>
    </div>;
}