import React from "react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./css/home.css";

import {
    faCommentDollar,
  faPiggyBank,
  faReceipt,
  faSackDollar,
} from "@fortawesome/free-solid-svg-icons";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  LineElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
} from "chart.js";
import TransTable from "./TransTable";
ChartJS.register(
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend
);

const Dashboard = () => {
    const [weeklyExpenses, setWeeklyExpenses] = useState([
        50, 100, 75, 150, 200, 50, 120,
      ]);
    
      //   useEffect(() => {
      //     // Example: Fetch or calculate the weekly expenses here and update state
      //     //setWeeklyExpenses(fetchedData);
      //   }, []);
    
      const data = {
        labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        datasets: [
          {
            label: "Expenses (₹)",
            data: weeklyExpenses,
            fill: false, // Disable filling under the line
            borderColor: "#8183F5", // Line color
            backgroundColor: "#8183F5", // Point color
            pointBorderColor: "#8183F5", // Border color of points
            pointBackgroundColor: "#fff", // Background color of points
            pointRadius: 5, // Size of points on the line
            pointBorderWidth: 3,
          },
        ],
      };
    
      const options = {
        responsive: true,
        plugins: {
          legend: {
            position: "top",
            labels: {
              font: {
                size: 15,
              },
            },
          },
          title: {
            display: true,
          },
          tooltip: {
            bodyFont: {
              size: 15,
            },
          },
        },
        scales: {
          x: {
            ticks: {
              font: {
                size: 15,
              },
            },
          },
          y: {
            beginAtZero: true,
            ticks: {
              font: {
                size: 15,
              },
            },
          },
        },
      };
  return (
    <>
      <div className="row">
        <div className="col-lg-2"></div>
        <div className="col-lg-10">
          <div className="overview">
            <p style={{ color: "black", fontWeight: "bold" }}>Overview</p>
            <div className="row money-details">
              <div className="col-lg-3 money-card">
                <FontAwesomeIcon
                  icon={faSackDollar}
                  style={{
                    color: "rgb(0, 206, 0)",
                    backgroundColor: "rgba(0, 181, 0, 0.162)",
                  }}
                  className="money-icon"
                />
                <div className="details">
                  <p className="section">TOTAL INCOME</p>
                  <p className="money">₹ 35000</p>
                </div>
              </div>
              <div className="col-lg-3 money-card">
                <FontAwesomeIcon
                  icon={faCommentDollar}
                  style={{
                    color: "rgb(226, 61, 61)",
                    backgroundColor: "rgba(181, 0, 0, 0.162)",
                  }}
                  className="money-icon"
                />
                <div className="details">
                  <p className="section">TOTAL EXPENSE</p>
                  <p className="money">₹ 35000</p>
                </div>
              </div>
              <div className="col-lg-3 money-card">
                <FontAwesomeIcon
                  icon={faPiggyBank}
                  style={{
                    color: "rgb(72, 61, 226)",
                    backgroundColor: "rgba(72, 109, 255, 0.284)",
                  }}
                  className="money-icon"
                />
                <div className="details">
                  <p className="section">TOTAL SAVINGS</p>
                  <p className="money">₹ 35000</p>
                </div>
              </div>
              <div className="col-lg-3 money-card">
                <FontAwesomeIcon
                  icon={faReceipt}
                  style={{ color: "", backgroundColor: "" }}
                  className="money-icon"
                />
                <div className="details">
                  <p className="section">TOTAL DUE</p>
                  <p className="money">₹ 35000</p>
                </div>
              </div>
            </div>
            <div>
              <div className="row">
                <div className="col-lg-6 graph">
                  <p className="title">Weekly Expenses</p>
                  <Line className="Line" data={data} options={options} />
                </div>
                <div className="col-lg-6">
                  <p className="title">Transactions</p>
                  <TransTable/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
