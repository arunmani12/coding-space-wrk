import React from "react";
import "./Profile.css";

const Profile = () => {
  return (
    <div class="card-container">
      <h4 className="page-title">Member profile</h4>
      <div>
        <div class="form_list">
          <label class="form_title">UserID</label>
          <p className="form_box">567890</p>
        </div>
        <div class="form_list">
          <label class="form_title">Name</label>
          <p className="form_box">David</p>
        </div>
        <div class="form_list">
          <label class="form_title">Mobile</label>
          <p className="form_box">7567890123</p>
        </div>
        <div class="form_list">
          <label class="form_title">Email Address</label>
          <p className="form_box">nobody@gmail.com</p>
        </div>
        <div class="form_list">
          <label class="form_title">City</label>
          <p className="form_box">Chennai</p>
        </div>
        <div class="form_list">
          <label class="form_title">Country</label>
          <p className="form_box">India</p>
        </div>
        <div class="form_list">
          <label class="form_title">Package</label>
          <p className="form_box">TRX 200</p>
        </div>
        <div class="form_list">
          <label class="form_title">Joined on</label>
          <p className="form_box">19/09/2021</p>
        </div>
      </div>
    </div>
  );
};
export default Profile;
