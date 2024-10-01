/* eslint-disable @typescript-eslint/no-explicit-any */
// import CreditCard from "../ui/components/Home/CreditCard";
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
import { useEffect, useState } from "react";
import { statisticsService } from "../services/statistics";
// import { NavLink } from "react-router-dom";
// import { Button } from "@nextui-org/react";
import { RecentTransactionsService } from "../services/RecentTransactions";
import ResponseModal from "../ui/components/ResponseModal";
import { CardService } from "../services/Cards";
import Loader from "../ui/components/Loader";
import CreditCardSection from "../ui/components/Home/CreditCardSection";

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
  const [loading, setLoading] = useState<boolean>(true); // State for loading

  const [statistics, setStatistics] = useState<any>(null)
  const [recentTransactions, setRecentTransactions] = useState<any>(null)
  const [creditCards, setCreditCards] = useState<CreditCardProps[]>([])
  const [visible, setVisible] = useState<boolean>(false)
  const series = [
    {
      name: "series",
      data: statistics?.balanceHistory,
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

  async function getStatisticsData() {
    const responseOfStatistics = await statisticsService()
    setStatistics(responseOfStatistics || {})
    // console.log("🚀 ~ getStatisticsData ~ responseOfStatistics:", responseOfStatistics)
  }
  async function getRecentTransactionsData() {
    const responseOftransactions = await RecentTransactionsService()
    setRecentTransactions(responseOftransactions?.transactions || [])
    // console.log("🚀 ~ getRecentTransactionsData ~ responseOftransactions:", responseOftransactions)
  }
  async function getCreditCards() {
    const responseCardService = await CardService()
    setCreditCards(responseCardService.creditCards || [])
    // setRecentTransactions(responseOftransactions?.transactions || [])
    // console.log("🚀 ~ responseCardService ~ responseOftransactions:", responseCardService)
  }
  // Combined fetch function to handle all data fetching
  async function fetchAllData() {
    setLoading(true);
    try {
      // Parallel fetching
      await Promise.allSettled([
        getRecentTransactionsData(),
        getStatisticsData(),
        getCreditCards(),
      ]);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false); // Set loading to false when all data is fetched
    }
  }

  useEffect(() => {
    fetchAllData()
    return () => {

    }
  }, [])

  return !loading ? (
    <main className="home__container">
      <section className="grid lg:grid-cols-3 grid-cols-1 gap-[30px] mb-[24px]">
        <div className="lg:col-span-2">
          <CreditCardSection creditCards={creditCards} />
          {/* <div className="flex justify-between mb-[21px]">
            <SectionTitle title="My Cards" />
            {creditCards?.length > 2 && <Button to={'/creditCards'} as={NavLink} aria-label="see__all--button" className="see__all">See All</Button>}
          </div>
          <Swiper
            spaceBetween={20} // Space between slides
            slidesPerView={1.2} // Default slides per view (for mobile)
            breakpoints={{
              // Breakpoint for larger screens
              1024: {
                spaceBetween: 30,
                slidesPerView: 2, // Show 2 slides on large screens
              }
            }}
            draggable={true}
          >
            {creditCards?.length
              ? creditCards.slice(0, 2).map((credit: CreditCardProps, index: number) => (
                <SwiperSlide key={index}>
                  <CreditCard
                    balance={credit.balance}
                    cardHolder={credit.cardHolder}
                    cardNumber={credit.cardNumber}
                    validThru={credit.validThru}
                    dark={index % 2 === 0}
                  />
                </SwiperSlide>
              ))
              : ""}
          </Swiper> */}
          {/* <div className="grid lg:grid-cols-2 grid-cols-1 gap-[30px]">
            {creditCards?.length ? creditCards.slice(0,2).map((credit: CreditCardProps, index: number) => <CreditCard
              balance={credit.balance}
              cardHolder={credit.cardHolder}
              cardNumber={credit.cardNumber}
              validThru={credit.validThru}
              dark={index % 2 === 0}
            />): ""}
            
          </div> */}
        </div>
        <div className="lg:col-span-1">
          <RecentTransactions transactions={recentTransactions} />
        </div>
      </section>
      <section className="mb-[24px]">
        <div className="grid lg:grid-cols-3 grid-cols-1 gap-[30px]">
          <div className="lg:col-span-2">
            <SectionTitle title="Weekly Activity" className="mb-[20px]" />
            <div className="home__card">
              <Bar data={data} options={options} />

            </div>
          </div>
          <div className="lg:col-span-1">
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
                      data: statistics?.expenses,
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
          <div className="grid xl:grid-cols-12 lg:grid-cols-2 grid-cols-1 gap-[30px]">
            <div className="lg:col-span-5">
              <SectionTitle title="Quick Transfer" className="mb-[20px]" />
              <div className="home__card">
                <Users users={users} onSuccess={() => setVisible(true)} />
              </div>
            </div>
            <div className="lg:col-span-7">
              <SectionTitle title="Balance History" className="mb-[20px]" />

              <div className="home__card w-full">
                <LineChartSection series={series} />
              </div>
            </div>
          </div>
        </div>
      </section>
      <ResponseModal message="Success" type="success" onClose={() => setVisible(false)} visible={visible} />
    </main>
  ) : <Loader />;
}
