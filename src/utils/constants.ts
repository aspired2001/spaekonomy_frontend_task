export const TIME_PERIODS = {
    ONE_MONTH: '1month',
    THREE_MONTHS: '3months',
    ONE_YEAR: '1year',
    CUSTOM: 'custom'
} as const;

export const INVOICE_STATUSES = {
    PAID: 'paid',
    UNPAID: 'unpaid',
    OVERDUE: 'overdue',
    DISPUTED: 'disputed',
    PARTIALLY_PAID: 'partially paid',
    AWAITED: 'awaited',
    DRAFT: 'draft',
    UPDATE_STATUS: 'update status'
} as const;

export const COLORS = {
    PRIMARY: 'purple',
    SECONDARY: 'pink',
    SUCCESS: 'green',
    WARNING: 'yellow',
    DANGER: 'red',
    INFO: 'blue',
    GRAY: 'gray'
} as const;

export const BREAKPOINTS = {
    SM: '640px',
    MD: '768px',
    LG: '1024px',
    XL: '1280px'
} as const;