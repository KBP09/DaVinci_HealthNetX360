import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import { colors } from '@mui/material';

const chartSetting = {
    xAxis: [
        {
            label: 'Probability',
        },
    ],
    width: 500,
    height: 400,
    colors: [colors.blue[500]],
};

const valueFormatter = (value) => `${(value * 100).toFixed(2)}%`;

export default function HorizontalBars() {
    const dataset = [
        { disease: 'Flu', probability: 0.15 },
        { disease: 'COVID-19', probability: 0.30 },
        { disease: 'Cold', probability: 0.25 },
        { disease: 'Allergy', probability: 0.20 },
        { disease: 'Other', probability: 0.10 },
    ];

    return (
        <BarChart
            dataset={dataset}
            yAxis={[{ scaleType: 'band', dataKey: 'disease' }]}
            series={[{ dataKey: 'probability', label: 'Disease Probability', valueFormatter }]}
            layout="horizontal"
            {...chartSetting}
            sx={{ zIndex: -1 }}
        />
    );
}
