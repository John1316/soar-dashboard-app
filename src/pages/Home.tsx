import ReactApexChart from "react-apexcharts";
import CreditCard from "../ui/components/Home/CreditCard";
import RecentTransactions from "../ui/components/Home/RecentTransactions";
import SectionTitle from "../ui/components/Home/SectionTitle";

export default function Home() {

  const series: any = [{
    name: 'series1',
    data: [31, 40, 28, 51, 42, 109, 100]
  }]
  const options: any = {
    options: {
      chart: {
        height: 350,
        type: 'area'
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: 'smooth'
      },
      xaxis: {
        type: 'datetime',
        categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"]
      },
      tooltip: {
        x: {
          format: 'dd/MM/yy HH:mm'
        },
      },
    },
  }



  return <main className="home__container">
    <section className="grid lg:grid-cols-3 gap-[30px] mb-[24px]">
      <div className="col-span-2">
        <div className="flex justify-between mb-[21px]">
          <SectionTitle title="My Cards" />
          <button className="see__all">See All</button>
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
            <ReactApexChart
              type="bar"
              series={[
                {
                  name: 'Withdraw',
                  data: [76, 85, 101, 98, 87, 105, 91],
                  color: "#232323"
                },
                {
                  name: "Diposit",
                  data: [44, 55, 57, 56, 61, 58, 63],
                  color: "#396AFF"
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
                    "Fri"
                  ],
                },
                plotOptions: {
                  bar: {
                    borderRadiusApplication: "end",
                    columnWidth: "22px",
                    dataLabels: {
                      position: "top", // top, center, bottom
                    },
                    barHeight: '12px',
                    borderRadius: 5
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
                  colors: ['transparent']
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
                    shape: 'circle', // Set legend markers to circles
                  },
                  // Position legend in the top-right corner
                  position: 'top',
                  horizontalAlign: 'right',

                },
                yaxis: {
                  opposite: false,
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
            ></ReactApexChart>
          </div>
        </div>
        <div className="col-span-1">
        </div>
      </div>

    </section>
    <section>
      <div className="grid grid-cols-3">
        <div className="col-span-1">s</div>
        <div className="col-span-2">
          <ReactApexChart options={options} series={series} type="area" />

        </div>
      </div>
    </section>
  </main>

}
