export interface ChartData {
    month: string;
    income: number;
    growth: number;
}

export interface ChartDataHookReturn {
    chartData: ChartData[];
    selectedPeriod: string;
    setSelectedPeriod: (period: string) => void;
    loading: boolean;
}