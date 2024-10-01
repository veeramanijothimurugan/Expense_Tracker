import React from "react";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./css/home.css";
import {
    faBank,
  faCalculator,
  faChartColumn,
  faCommentDollar,
  faCreditCard,
  faDotCircle,
  faEllipsisVertical,
  faExchangeAlt,
  faGear,
  faMoneyBill,
  faMoneyBill1,
  faMoneyBillWheat,
  faPieChart,
  faPiggyBank,
  faReceipt,
  faSackDollar,
  faSignOut,
  faWallet,
} from "@fortawesome/free-solid-svg-icons";
import photo from "/profile.png";
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
ChartJS.register(
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend
);

const Home = () => {
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
        <div className="left col-lg-2">
          <div className="logo">
            <p className="logoName">Wally</p>
            <FontAwesomeIcon icon={faMoneyBillWheat} />
          </div>
          <p className="section">MAIN</p>
          <div className="container menubar">
            <div className="menu active">
              <FontAwesomeIcon className="icon" icon={faPieChart} />
              <p className="menu-item">Dashboard</p>
            </div>
            <div className="menu">
              <FontAwesomeIcon className="icon" icon={faExchangeAlt} />
              <p className="menu-item">Transactions</p>
            </div>
            <div className="menu">
              <FontAwesomeIcon className="icon" icon={faChartColumn} />
              <p className="menu-item">Analytics</p>
            </div>
            <div className="menu">
              <FontAwesomeIcon className="icon" icon={faWallet} />
              <p className="menu-item">Wallet</p>
            </div>
            <div className="menu">
              <FontAwesomeIcon className="icon" icon={faCalculator} />
              <p className="menu-item">Calculator</p>
            </div>
          </div>
          <p className="section">OTHER</p>
          <div className="menubar container">
            <div className="menu">
              <FontAwesomeIcon className="icon" icon={faGear} />
              <p className="menu-item">Settings</p>
            </div>
            <div className="logout">
              <FontAwesomeIcon className="icon" icon={faSignOut} />
              <p className="menu-item">Logout</p>
            </div>
          </div>
        </div>
        <div className="right col-lg-6">
          <div className="user">
            <div>
              <img className="profile" src={photo} alt="" />
            </div>
            <div className="details">
              <p style={{ fontWeight: "bolder" }}>Veeramani J</p>
              <p className="email">veeramani@gmail.com</p>
            </div>
          </div>
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
                  <div className="transactions">
                    <table>
                      <tr>
                        <th>Category</th>
                        <th>Date</th>
                        <th>Amount</th>
                        <th>Payment Method</th>
                        <th>Action</th>
                      </tr>
                      <tr>
                        <td>Food</td>
                        <td>1/10/24</td>
                        <td>60</td>
                        <td><FontAwesomeIcon icon={faBank}/> Account</td>
                        <td>
                          <FontAwesomeIcon icon={faEllipsisVertical} />
                        </td>
                      </tr>
                      <tr>
                        <td>Groceries</td>
                        <td>1/10/24</td>
                        <td>250</td>
                        <td><FontAwesomeIcon icon={faMoneyBill1}/> Cash</td>
                        <td>
                          <FontAwesomeIcon icon={faEllipsisVertical} />
                        </td>
                      </tr>
                      <tr>
                        <td>Petrol</td>
                        <td>1/10/24</td>
                        <td>100</td>
                        <td><FontAwesomeIcon icon={faBank}/> Account</td>
                        <td>
                          <FontAwesomeIcon icon={faEllipsisVertical} />
                        </td>
                      </tr>
                      <tr>
                        <td>Dress</td>
                        <td>1/10/24</td>
                        <td>2000</td>
                        <td><FontAwesomeIcon icon={faCreditCard}/> Card</td>
                        <td>
                          <FontAwesomeIcon icon={faEllipsisVertical} />
                        </td>
                      </tr>
                    </table>
                    <div className="input">
                        <button className="btn add"> ADD</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
