export interface Invoice {
    id: string;
    clientName: string;
    amount: number;
    dueDate: string;
    status: string;
}

export interface InvoicesHookReturn {
    invoices: Invoice[];
    loading: boolean;
    error: string | null;
    updateInvoiceStatus: (invoiceId: string, newStatus: string) => void;
}