/* eslint-disable @typescript-eslint/no-explicit-any */
import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
} from 'chart.js';

// Register necessary components
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
);

export default function LineChartSection({ series }: any) {
    // Assuming `series` is an array of objects containing `name` and `data`
    const labels = ["Sat", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri"];

    // Convert ApexChart series to Chart.js dataset format
    const datasets = series.map((serie: any) => ({
        label: serie.name,
        data: serie.data,
        fill: {
            target: "origin", // Set the fill options
            above: "rgba(57, 106, 255, 0.3)"
        }, // Enable area fill
        backgroundColor: 'rgba(57, 106, 255, 0.3)', // The fill color for the area
        borderColor: '#396AFF', // Line color
        tension: 0.4, // Smooth curve (similar to `curve: 'smooth'` in ApexCharts)
        pointRadius: 0, // Hide data points
    }));

    const data = {
        labels,
        datasets,
    };

    const options: any = {
        responsive: true,
        plugins: {
            legend: {
                display: true,
            },
            tooltip: {
                enabled: false, // Disable tooltips
            },
        },
        scales: {
            x: {
                ticks: {
                    color: '#718EBF', // x-axis label color
                    font: {
                        size: 13, // x-axis label font size
                        family: 'Inter, sans-serif', // x-axis label font family
                        weight: '400', // x-axis label font weight
                    },
                },
                grid: {
                    display: false, // Hide grid lines
                },
            },
            y: {
                ticks: {
                    color: '#718EBF', // y-axis label color
                    font: {
                        size: 13, // y-axis label font size
                        family: 'Inter, sans-serif', // y-axis label font family
                        weight: '400', // y-axis label font weight
                    },
                },
                grid: {
                    drawBorder: false, // Hide y-axis grid lines border
                },
            },
        },
    };

    return (
        <Line data={data} options={options} />
    );
};

