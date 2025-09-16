import React from 'react';
import { Card } from '../ui/Card';

export const EarningsCards: React.FC = () => {
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 gap-4">
        <Card className="p-4">
          <div className="text-center">
            <h3 className="text-sm font-medium text-gray-600 mb-2">Total Earnings</h3>
            <p className="text-2xl font-bold text-[#8134AF]">$1,25,000</p>
          </div>
        </Card>
      </div>
      
      <div className="grid grid-cols-2 gap-4">
        <Card className="p-4">
          <div className="text-center">
            <h4 className="text-xs font-medium text-gray-500 mb-1">Payment Awaited</h4>
            <p className="text-lg font-semibold text-[#8134AF]">$25,000</p>
          </div>
        </Card>
        
        <Card className="p-4">
          <div className="text-center">
            <h4 className="text-xs font-medium text-gray-500 mb-1">Payment Overdue</h4>
            <p className="text-lg font-semibold text-[#8134AF]">$25,000</p>
          </div>
        </Card>
      </div>
    </div>
  );
};