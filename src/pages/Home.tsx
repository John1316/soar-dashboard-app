/* eslint-disable @typescript-eslint/no-explicit-any */
import CreditCard from "../ui/components/Home/CreditCard";
import RecentTransactions from "../ui/components/Home/RecentTransactions";
import SectionTitle from "../ui/components/Home/SectionTitle";
import Users from "../ui/components/Home/Users";
import { PolarArea, Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  ArcElement,
  RadialLinearScale,
  Tooltip,
  Legend,
} from "chart.js";
import LineChartSection from "../ui/components/Home/LineChartSection";

// Register the required components
ChartJS.register(
  RadialLinearScale,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  Title
);
export default function Home() {
  const series = [
    {
      name: "series",
      data: [120, 400, 300, 350, 250, 300, 120],
      color: "#1814F3",
    },
  ];

  const users = [
    {
      key: Math.random().toString(),
      name: "Livia Bator",
      role: "CEO",
      avatar: "/profile1.svg",
    },
    {
      key: Math.random().toString(),
      name: "Randy Press",
      role: "Director",
      avatar: "/profile2.svg",
    },
    {
      key: Math.random().toString(),
      name: "Workman",
      role: "Designer",
      avatar: "/profile3.svg",
    },
    {
      key: Math.random().toString(),
      name: "Randy Press",
      role: "Director",
      avatar: "/profile4.svg",
    },
    {
      key: Math.random().toString(),
      name: "Workman",
      role: "Designer",
      avatar: "/profile5.svg",
    },
    // Add more users as needed
  ];
  const data = {
    labels: ["Sat", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri"], // x-axis categories
    datasets: [
      {
        label: 'Withdraw',
        data: [76, 85, 101, 98, 87, 105, 91],
        backgroundColor: '#232323',
        borderRadius: 5, // Rounded bar corners
      },
      {
        label: 'Deposit',
        data: [44, 55, 57, 56, 61, 58, 63],
        backgroundColor: '#396AFF',
        borderRadius: 5, // Rounded bar corners
      },
    ],
  };

  // Chart.js options configuration
  const options: any = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top', // Set legend position
        align: 'end', // Align legend to the right
        labels: {
          boxWidth: 12, // Set legend marker size
          padding: 10, // Space between legend item and text
          usePointStyle: true, // Use circular markers
        },
      },
      tooltip: {
        enabled: true, // Enable tooltips
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
          display: false, // Hide x-axis grid lines
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
    barPercentage: 0.4, // Width of each bar relative to the category width
    categoryPercentage: 0.5, // Spacing between bars within a category
  };
  return (
    <main className="home__container">
      <section className="grid lg:grid-cols-3 gap-[30px] mb-[24px]">
        <div className="col-span-2">
          <div className="flex justify-between mb-[21px]">
            <SectionTitle title="My Cards" />
            <button aria-label="see__all--button" className="see__all">See All</button>
          </div>
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-[30px]">
            <CreditCard
              balance="$5,756"
              cardHolder="Eddy Cusuma"
              cardNumber="3778411414471234"
              validThru="12/22"
            />
            <CreditCard
              balance="$5,756"
              cardHolder="Eddy Cusuma"
              cardNumber="3778411414471234"
              validThru="12/22"
              dark={false}
            />
          </div>
        </div>
        <div className="col-span-1">
          <RecentTransactions />
        </div>
      </section>
      <section className="mb-[24px]">
        <div className="grid lg:grid-cols-3 gap-[30px]">
          <div className="col-span-2">
            <SectionTitle title="Weekly Activity" className="mb-[20px]" />
            <div className="home__card">
              {/* <ReactApexChart
                type="bar"
                series={[
                  {
                    name: "Withdraw",
                    data: [76, 85, 101, 98, 87, 105, 91],
                    color: "#232323",
                  },
                  {
                    name: "Diposit",
                    data: [44, 55, 57, 56, 61, 58, 63],
                    color: "#396AFF",
                  },
                ]}
                options={{
                  xaxis: {
                    categories: [
                      "Sat",
                      "Sun",
                      "Mon",
                      "Tue",
                      "Wed",
                      "Thu",
                      "Fri",
                    ],
                    labels: {
                      style: {
                        colors: "#718EBF", // Color of x-axis labels
                        fontSize: "13px", // Font size of x-axis labels
                        fontFamily: "Inter, sans-serif", // Font family of x-axis labels,
                        fontWeight: "400",
                      },
                    },
                  },
                  plotOptions: {
                    bar: {
                      borderRadiusApplication: "end",
                      columnWidth: "22px",
                      dataLabels: {
                        position: "top", // top, center, bottom
                      },
                      barHeight: "12px",
                      borderRadius: 5,
                    },
                  },
                  grid: {
                    padding: {
                      left: 12, // Add space between bars
                      right: 12,
                    },
                  },
                  stroke: {
                    show: true,
                    width: 10,
                    colors: ["transparent"],
                  },
                  dataLabels: {
                    enabled: false,
                    // formatter:  val => val,
                    // offsetY: -20,
                    style: {
                      fontSize: "12px",
                      colors: ["#232323", "#396AFF"],
                    },
                  },
                  legend: {
                    markers: {
                      shape: "circle", // Set legend markers to circles
                    },
                    // Position legend in the top-right corner
                    position: "top",
                    horizontalAlign: "right",
                  },
                  yaxis: {
                    opposite: false,
                    labels: {
                      style: {
                        colors: "#718EBF", // Color of x-axis labels
                        fontSize: "13px", // Font size of x-axis labels
                        fontFamily: "Inter, sans-serif", // Font family of x-axis labels,
                        fontWeight: "400",
                      },
                    },
                  },
                  fill: {
                    colors: ["#232323", "#396AFF"],
                  },
                  chart: {
                    toolbar: {
                      tools: {
                        download: false,
                      },
                    },
                  },
                }}
              ></ReactApexChart> */}
                <Bar data={data} options={options} />

            </div>
          </div>
          <div className="col-span-1">
            <SectionTitle title="Expense Statistics" className="mb-[20px]" />
            <div className="home__card">
              <PolarArea
                options={{
                  responsive: true,
                  
                  plugins: {
                    legend: {
                      position: "top", // Position of the legend,
                      labels: {
                        boxWidth: 12, // Set legend marker size
                        padding: 10, // Space between legend item and text
                        usePointStyle: true, // Use circular markers
                      },
                    },
                    tooltip: {
                      enabled: true, // Enable tooltips
                      callbacks: {
                        label: function (tooltipItem) {
                          const dataset = tooltipItem.dataset.data;
                          const currentValue = dataset[tooltipItem.dataIndex];
                          const total = dataset.reduce(
                            (acc, value) => acc + value,
                            0
                          );
                          const percentage = (
                            (currentValue / total) *
                            100
                          ).toFixed(2);
                          return `${tooltipItem.label}: ${percentage}%`;
                        },
                      },
                    },
                  },
                  scales: {
                    r: {
                      beginAtZero: true, // Start radial scale at zero
                    },
                  },
                }}
                data={{
                  labels: [
                    "Entertainment",
                    "Investment",
                    "Others",
                    "Investment",
                  ],
                  datasets: [
                    {
                      data: [11, 16, 12, 10],
                      backgroundColor: [
                        "#343C6A",
                        "#FC7900",
                        "#232323",
                        "#396AFF",
                      ],
                    },
                  ],
                }}
              />
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="">
          <div className="grid xl:grid-cols-12 lg:grid-cols-2 gap-[30px]">
            <div className="lg:col-span-5 col-span-12">
              <SectionTitle title="Quick Transfer" className="mb-[20px]" />
              <div className="home__card">
                <Users users={users} />
              </div>
            </div>
            <div className="lg:col-span-7 col-span-12">
              <SectionTitle title="Quick Transfer" className="mb-[20px]" />

              <div className="home__card w-full">
                {/* <ReactApexChart
                  options={{
                    dataLabels: {
                      enabled: false,
                    },
                    stroke: {
                      curve: "smooth",
                    },
                    xaxis: {
                      categories: [
                        "Sat",
                        "Sun",
                        "Mon",
                        "Tue",
                        "Wed",
                        "Thu",
                        "Fri",
                      ],
                      labels: {
                        style: {
                          colors: "#718EBF", // Color of x-axis labels
                          fontSize: "13px", // Font size of x-axis labels
                          fontFamily: "Inter, sans-serif", // Font family of x-axis labels,
                          fontWeight: "400",
                        },
                      },
                    },
                    yaxis: {
                      labels: {
                        style: {
                          colors: "#718EBF", // Color of x-axis labels
                          fontSize: "13px", // Font size of x-axis labels
                          fontFamily: "Inter, sans-serif", // Font family of x-axis labels,
                          fontWeight: "400",
                        },
                      },
                    },
                    tooltip: {
                      enabled: false,
                      x: {
                        format: "dd/MM/yy HH:mm",
                      },
                    },
                  }}
                  height={200}
                  series={series}
                  type="area"
                /> */}
                <LineChartSection series={series} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
