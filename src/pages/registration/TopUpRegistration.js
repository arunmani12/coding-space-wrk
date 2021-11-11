import React from "react";

import "./TopUpRegistration.css";

const TopUpRegistration = () => {
  return (
    <div className="card-container">
      <h4 className="page-title">Topup Registration</h4>
      <form className="form-topup">
        <div className="form-group-topup">
          <label className="form-label-topup">Member ID</label>
          <input type="text" className="form-input-topup" />
        </div>
        <div className="form-group-topup">
          <label className="form-label-topup">Name</label>
          <input type="text" className="form-input-topup" />
        </div>
        <div className="form-group-topup">
          <label className="form-label-topup">Package Cost</label>
          <input type="text" className="form-input-topup" />
        </div>
        <div className="form-group-topup">
          <label className="form-label-topup">Total Investment</label>
          <input type="text" className="form-input-topup" />
        </div>
        <div className="form-group-topup">
          <label className="form-label-topup">Current Package</label>
          <input type="text" className="form-input-topup" />
        </div>
      </form>
      <h4 className="page-title">Package Details</h4>
      <form className="form-topup">
        <div className="form-group-topup">
          <label className="form-label-topup">Product</label>
          <select className="form-input-topup">
            <option>Select</option>
          </select>
        </div>
        <div className="form-group-topup">
          <label className="form-label-topup">Package Name</label>
          <select className="form-input-topup">
            <option>Select</option>
          </select>
        </div>
        <div>
          <button type="submit" className="submit_btn btn_model">
            Top Up
          </button>
        </div>
      </form>
    </div>
  );
};

export default TopUpRegistration;
