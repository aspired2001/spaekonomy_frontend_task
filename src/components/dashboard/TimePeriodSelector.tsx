import React from 'react';
import { Calendar, Star } from 'lucide-react';

interface TimePeriodSelectorProps {
  selectedPeriod: string;
  onPeriodChange: (period: string) => void;
}

export const TimePeriodSelector: React.FC<TimePeriodSelectorProps> = ({ 
  selectedPeriod, 
  onPeriodChange 
}) => {
  const periods = [
    { id: '1month', label: '1 Month' },
    { id: '3months', label: '3 Months' },
    { id: '1year', label: '1 Year' },
  ];

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-medium text-gray-700">Time Period</h3>
        <div className="flex items-center text-xs text-gray-500">
          <span>dd-mm-yyyy - dd-mm-yyyy</span>
        </div>
      </div>
      
      <div className="flex items-center space-x-2">
        {periods.map((period) => (
          <button
            key={period.id}
            onClick={() => onPeriodChange(period.id)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              selectedPeriod === period.id
                ? 'bg-purple-100 text-purple-700 border border-purple-200'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            {period.label}
            {period.id === '1year' && (
              <Star className="w-3 h-3 inline ml-1 text-purple-500" />
            )}
          </button>
        ))}
        
        <button className="flex items-center px-4 py-2 bg-gray-100 text-gray-600 rounded-full text-sm font-medium hover:bg-gray-200">
          <Calendar className="w-4 h-4 mr-2" />
          Custom
        </button>
      </div>
    </div>
  );
};