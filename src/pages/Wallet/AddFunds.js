import React from "react";

import "./AddFunds.css";

const Addfunds = () => {
  return (
    <div className="card-container">
      <h3 className="page-title">Add Funds to Your Activation Wallet</h3>
      <form>
        <div className="form-list">
          <label for="addfund" className="label">
            Enter Amount in (TRX)
          </label>
          <input type="number" className="input" name="AddFunds" />
        </div>
        <div className="btn_container">
          <button className="submit_btn">Submit</button>
        </div>
      </form>
      <p className="notes">
        Note: Once you press Submit, The system will show you the Tron Address
        to Transfer and the Required Amount of Trons to Transfer. Once you
        transfer, your wallet will be loaded automatically after the required
        number of confirmations. It may take some time for confirmations. Please
        send the exact amount of Coins shown in the next page
      </p>
    </div>
  );
};
export default Addfunds;
