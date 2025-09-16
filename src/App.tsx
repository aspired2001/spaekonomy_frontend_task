import React from 'react';
import { DashboardLayout } from './components/layout/DashboardLayout';
import { CreateInvoiceCard } from './components/dashboard/CreateInvoiceCard';
import { EarningsCards } from './components/dashboard/EarningsCards';
import { IncomeChart } from './components/dashboard/IncomeChart';
import { InvoicesList } from './components/dashboard/InvoicesList';
import { TimePeriodSelector } from './components/dashboard/TimePeriodSelector';
import { useInvoices } from './hooks/useInvoices';
import { useChartData } from './hooks/useChartData';

const App: React.FC = () => {
  const { invoices } = useInvoices();
  const { chartData, selectedPeriod, setSelectedPeriod } = useChartData();

  return (
    <div className="min-h-screen bg-gray-50">
      <DashboardLayout>
        <div className="space-y-6">
          {/* Create Invoice Section */}
          <CreateInvoiceCard />
          
          {/* Time Period Selector */}
          <TimePeriodSelector 
            selectedPeriod={selectedPeriod}
            onPeriodChange={setSelectedPeriod}
          />
          
          {/* Earnings Cards */}
          <EarningsCards />
          
          {/* Income Chart */}
          <IncomeChart 
            data={chartData}
            selectedPeriod={selectedPeriod}
          />
          
          {/* Invoices List */}
          <InvoicesList invoices={invoices} />
        </div>
      </DashboardLayout>
    </div>
  );
};

export default App;