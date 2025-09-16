import React from 'react';
import { Header } from '../ui/Header';
import { Footer } from './Footer';

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 px-4 py-6 md:px-6 lg:px-8 max-w-md mx-auto w-full md:max-w-2xl lg:max-w-4xl">
        {children}
      </main>
      <Footer />
    </div>
  );
};