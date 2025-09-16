import { useState, useEffect } from 'react';
import { mockInvoicesData } from '../data/mockData';

export interface Invoice {
    id: string;
    clientName: string;
    amount: number;
    dueDate: string;
    status: string;
}

export const useInvoices = () => {
    const [invoices, setInvoices] = useState<Invoice[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchInvoices = async () => {
            try {
                setLoading(true);
                // Simulate API call
                await new Promise(resolve => setTimeout(resolve, 500));
                setInvoices(mockInvoicesData);
                setError(null);
            } catch (err) {
                setError('Failed to fetch invoices');
                console.error('Error fetching invoices:', err);
            } finally {
                setLoading(false);
            }
        };

        fetchInvoices();
    }, []);

    const updateInvoiceStatus = (invoiceId: string, newStatus: string) => {
        setInvoices(prevInvoices =>
            prevInvoices.map(invoice =>
                invoice.id === invoiceId
                    ? { ...invoice, status: newStatus }
                    : invoice
            )
        );
    };

    return {
        invoices,
        loading,
        error,
        updateInvoiceStatus,
    };
};