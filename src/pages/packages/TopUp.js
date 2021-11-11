import React from "react";

import "./TopUp.css";

const TopUp = () => {
  return (
    <div className="card-container">
      <h4 className="page-title">Topup(Wallet Balance $1000)</h4>
      <form>
        <div class="form_list">
          <label class="form_title">Choose Package</label>
          <select className="form_box height">
            <option>Above $15</option>
            <option>Above $50</option>
            <option>Above $75</option>
            <option>Above $150</option>
          </select>
        </div>
        <div className="btn_container">
          <button type="submit" className="submit_btn">
            Top Up
          </button>
        </div>
      </form>
    </div>
  );
};

export default TopUp;
