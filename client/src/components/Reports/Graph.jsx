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

export default function HorizontalBars({dataset}) {
    if (!dataset || dataset.length === 0) {
        console.error('Dataset is missing or empty');
        return <p>No data available</p>;
    }

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
