import React from "react";
import "./ChangePassword.css";

const Change_password = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div class="pass_container">
      <div class="pass_title">
        <h4>Change Password</h4>
      </div>
      <form onSubmit={handleSubmit} class="pass_form">
        <div class="pass_list">
          <label class="title">Old Password</label>
          <input type="text" id="lname" name="lastname" class="pass_ipbox" />
        </div>

        <div class="pass_list">
          <label class="title">New password</label>
          <input type="text" id="lname" name="lastname" class="pass_ipbox" />
        </div>
        <div class="pass_list">
          <label class="title">Confirm New Password</label>
          <input type="text" id="lname" name="lastname" class="pass_ipbox" />
        </div>
      </form>
      <div className="btn_container">
        <button type="submit" class="submit_btn">
          Submit
        </button>
      </div>
    </div>
  );
};
export default Change_password;
