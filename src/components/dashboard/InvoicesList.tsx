import React, { useState } from 'react';
import { ChevronDown, Upload, Edit, Bell } from 'lucide-react';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';
import { Invoice } from '../../types/useInvoices.types';

interface InvoicesListProps {
  invoices: Invoice[];
}

export const InvoicesList: React.FC<InvoicesListProps> = ({ invoices }) => {
  const [isExpanded, setIsExpanded] = useState(true);

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'paid':
        return 'bg-green-100 text-green-700 border-green-200';
      case 'overdue':
        return 'bg-red-100 text-red-700 border-red-200';
      case 'disputed':
        return 'bg-orange-100 text-orange-700 border-orange-200';
      case 'partially paid':
        return 'bg-yellow-100 text-yellow-700 border-yellow-200';
      case 'awaited':
        return 'bg-blue-100 text-blue-700 border-blue-200';
      case 'draft':
        return 'bg-gray-100 text-gray-700 border-gray-200';
      default:
        return 'bg-gray-100 text-gray-700 border-gray-200';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status.toLowerCase()) {
      case 'overdue':
      case 'awaited':
        return <Bell className="w-3 h-3" />;
      case 'draft':
        return <Edit className="w-3 h-3" />;
      default:
        return null;
    }
  };

  return (
    <Card className="p-4">
      <div 
        className="flex items-center justify-between cursor-pointer"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <h3 className="text-sm font-semibold text-gray-900">Your Invoices</h3>
        <ChevronDown 
          className={`w-4 h-4 text-gray-500 transition-transform ${
            isExpanded ? 'rotate-180' : ''
          }`} 
        />
      </div>
      
      {isExpanded && (
        <div className="mt-4 space-y-3">
          {invoices.map((invoice) => (
            <div 
              key={invoice.id}
              className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <div className="flex-1">
                <div className="flex items-center justify-between mb-1">
                  <h4 className="text-sm font-medium text-gray-900">
                    {invoice.clientName}
                  </h4>
                  <div className="flex items-center space-x-2">
                    {(invoice.status.toLowerCase() === 'overdue' || 
                      invoice.status.toLowerCase() === 'awaited') && (
                      <Button variant="ghost" size="sm" className="p-1">
                        {getStatusIcon(invoice.status)}
                      </Button>
                    )}
                    {invoice.status.toLowerCase() === 'draft' && (
                      <Button variant="ghost" size="sm" className="p-1">
                        <Edit className="w-3 h-3" />
                      </Button>
                    )}
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2 text-xs text-gray-500">
                    <span>${invoice.amount.toLocaleString()}</span>
                    <span>•</span>
                    <span>Due: {invoice.dueDate}</span>
                  </div>
                  
                  <span 
                    className={`px-2 py-1 rounded-full text-xs font-medium border ${
                      getStatusColor(invoice.status)
                    }`}
                  >
                    {invoice.status}
                  </span>
                </div>
              </div>
            </div>
          ))}
          
          {invoices.some(invoice => 
            invoice.status.toLowerCase() === 'draft' || 
            invoice.status.toLowerCase() === 'unpaid'
          ) && (
            <div className="flex items-center justify-center pt-2">
              <Button variant="outline" size="sm" className="text-xs">
                <Upload className="w-3 h-3 mr-1" />
                Upload
              </Button>
            </div>
          )}
        </div>
      )}
    </Card>
  );
};