import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./css/home.css";
import {
    faCalculator,
  faChartColumn,
  faExchangeAlt,
  faGear,
  faMoneyBillWheat,
  faPieChart,
  faSignOut,
  faWallet,
} from "@fortawesome/free-solid-svg-icons";
import photo from "/profile.png";
import Dashboard from "./Dashboard";
import Transactions from "./Transactions";

const Home = () => {

  return (
    <>
      <div className="row">
        <div className="menus left col-lg-2">
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
        <div className="right col-lg-10">
          {/* <div className="user">
            <div>
              <img className="profile" src={photo} alt="" />
            </div>
            <div className="details">
              <p style={{ fontWeight: "bolder" }}>Veeramani J</p>
              <p className="email">veeramani@gmail.com</p>
            </div>
          </div> */}
        </div>
        {/* <Dashboard/> */}
        <Transactions/>
      </div>
    </>
  );
};

export default Home;
