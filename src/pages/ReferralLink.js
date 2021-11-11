import React from "react";

import "./ReferralLink.css";

const ReferralLink = () => {
  return (
    <div className="card-container">
      <h4 className="page-title">Referral Link</h4>
      <form>
        <div class="form_list">
          <label class="form_title">Name</label>
          <select className="form_box height">
            <option>Left</option>
            <option>Right</option>
          </select>
        </div>
        <div className="btn_container">
          <button type="submit" className="submit_btn">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ReferralLink;
