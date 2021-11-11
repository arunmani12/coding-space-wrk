import React from "react";
import { IoPlaySkipBackSharp, IoPlaySkipForward } from "react-icons/io5";
import { AiOutlineThunderbolt } from "react-icons/ai";
import { BsHandThumbsUp } from "react-icons/bs";

import "./DashboardContent.css";

const DashboardContent = () => {
  return (
    <div className="dashboard-content">
      <div className="info-container">
        <div className="info">
          <h3>Date of Join</h3>
          <p>1/11/2021</p>
        </div>
        <div className="info">
          <h3>Free Coin Today Price</h3>
          <p>$40/-</p>
        </div>
        <div className="info">
          <h3>Wallet</h3>
          <p>$500</p>
        </div>
        <div className="info">
          <h3>Invested</h3>
          <p>$10,000</p>
        </div>
        <div className="info">
          <h3>ROI</h3>
          <p>$500</p>
        </div>
        <div className="info">
          <h3>Referral Amount</h3>
          <p>$500</p>
        </div>
      </div>
      <div className="coinDetails-container">
        <div className="coinDetails">
          <IoPlaySkipBackSharp className="coinDetails-icon" size="32px" />
          <div className="coinDetails-info">
            <h3>Total Left</h3>
            <p>$500</p>
          </div>
        </div>
        <div className="coinDetails">
          <IoPlaySkipForward className="coinDetails-icon" size="32px" />
          <div className="coinDetails-info">
            <h3>Total Right</h3>
            <p>$500</p>
          </div>
        </div>
        <div className="coinDetails">
          <AiOutlineThunderbolt className="coinDetails-icon" size="32px" />
          <div className="coinDetails-info">
            <h3>Overall Total</h3>
            <p>$500</p>
          </div>
        </div>
        <div className="coinDetails">
          <BsHandThumbsUp className="coinDetails-icon" size="32px" />
          <div className="coinDetails-info">
            <h3>Total Coins</h3>
            <p>$500</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default DashboardContent;
