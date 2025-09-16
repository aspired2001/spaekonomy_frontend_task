import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Button } from '../ui/Button';

export const Header: React.FC = () => {
  return (
    <header className="bg-white border-b border-gray-200 px-4 py-3 md:px-6">
      <div className="flex items-center justify-between max-w-md mx-auto w-full md:max-w-2xl lg:max-w-4xl">
        <div className="flex items-center space-x-3">
          <Button variant="ghost" size="sm" className="p-2">
            <ArrowLeft className="w-5 h-5 text-gray-600" />
          </Button>
          <h1 className="text-lg font-semibold text-gray-900">Dashboard</h1>
        </div>
        
        <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 flex items-center justify-center">
          <span className="text-white text-sm font-medium">W</span>
        </div>
      </div>
    </header>
  );
};