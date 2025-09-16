import { useState, useEffect } from 'react';

export interface ChartData {
    month: string;
    income: number;
    growth: number;
}

export const useChartData = () => {
    const [chartData, setChartData] = useState<ChartData[]>([]);
    const [selectedPeriod, setSelectedPeriod] = useState('1year'); // ✅ default changed
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchChartData = async () => {
            setLoading(true);

            await new Promise(resolve => setTimeout(resolve, 300));

            const data: ChartData[] = [
                { month: 'Jan', income: 3000, growth: 15 },
                { month: 'Feb', income: 4500, growth: 50 },
                { month: 'Mar', income: 6000, growth: 33 },
                { month: 'Apr', income: 2800, growth: -53 },
                { month: 'May', income: 5200, growth: 86 },
                { month: 'Jun', income: 4800, growth: -8 },
                { month: 'Jul', income: 5500, growth: 12 },
                { month: 'Aug', income: 6100, growth: 25 },
                { month: 'Sep', income: 5800, growth: -15 },
                { month: 'Oct', income: 6400, growth: 20 },
                { month: 'Nov', income: 7200, growth: 18 },
                { month: 'Dec', income: 7600, growth: 22 },
            ];

            let filteredData = data;

            if (selectedPeriod === '1month') {
                filteredData = data.slice(-1);
            } else if (selectedPeriod === '3months') {
                filteredData = data.slice(-3);
            } else if (selectedPeriod === '1year') {
                filteredData = data; // ✅ full 12 months
            }

            setChartData(filteredData);
            setLoading(false);
        };

        fetchChartData();
    }, [selectedPeriod]);

    return {
        chartData,
        selectedPeriod,
        setSelectedPeriod,
        loading,
    };
};
