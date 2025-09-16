import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-200 px-4 py-4 md:px-6">
      <div className="max-w-md mx-auto w-full md:max-w-2xl lg:max-w-4xl text-center">
        <p className="text-sm text-gray-500">
          <span className="font-medium text-purple-600">Sparkonomy</span>
          <br />
          <span className="text-xs">Powered by Waghat</span>
        </p>
      </div>
    </footer>
  );
};