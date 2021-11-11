import React from "react";

import "./Transfer.css";

const Transfer = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="transfer">
      <div class="transfer_title">
        <h4>Transfer Points (wallet Balance $1000.00)</h4>
      </div>
      <form onSubmit={handleSubmit}>
        <div class="transfer_list">
          <label class="title">Reciever UserID</label>
          <input type="text" class="transfer_ipbox" />
        </div>
        <div class="transfer_list">
          <label class="title">Amount to Transfer</label>
          <input type="text" class="transfer_ipbox" />
        </div>
        <div class="transfer_list">
          <label class="title1">Get OTP</label>
          <button type="button" className="otp_btn">
            Generate OTP
          </button>
        </div>
        <div class="transfer_list">
          <label class="title">OTP Reference No.</label>
          <input type="text" class="transfer_ipbox" />
        </div>
        <div class="transfer_list">
          <label class="title">Enter OTP</label>
          <input type="text" class="transfer_ipbox" />
        </div>
      </form>
      <div className="btn_container">
        <button type="submit" class="submit_btn">
          Submit
        </button>
      </div>
      <p class="notes">
        Note: Once You Press the Generate OTP Button, You will receive your OTP
        in your registered email id. Check your Email and get the OTP and enter
        it here. You can edit your tron address only if it is empty. Tron
        Address once entered can not be changed. So use your own Tron Address
        like (Trust Wallet, Tron Link Pro or Token Pocket. Do not use an
        exchange tron address.)
      </p>
    </div>
  );
};
export default Transfer;
