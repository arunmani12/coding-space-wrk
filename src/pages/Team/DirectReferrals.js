import React from "react";

import "./DirectReferrals.css";

const DirectReferrals = () => {
  return (
    <div className="card-container">
      <h4 className="page-title">Direct referals of 707183</h4>
      <div className="searchDiv">
        <div>
          Display <select></select> Records Per Page
        </div>
        <div>
          <span>
            Search : <input type="text" />
          </span>
        </div>
      </div>
      <table>
        <thead>
          <tr>
            <th>Serial</th>
            <th>User ID</th>
            <th>Name</th>
            <th>Joined On</th>
            <th>Mobile</th>
            <th>Email</th>
            <th>Placement</th>
            <th>Team</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>23433</td>
            <td>23433</td>
            <td>23433</td>
            <td>23433</td>
            <td>23433</td>
            <td>23433</td>
            <td>23433</td>
            <td>23433</td>
            <td>$400</td>
          </tr>
        </tbody>
      </table>
      <div className="directReferrals_footer">
        <p className="endName">Showing page 1 of 1</p>
        <div className="button-group">
          <button className="previous-btn">Previous</button>
          <button className="btn">1</button>
          <button className="next-btn">Next</button>
        </div>
      </div>
    </div>
  );
};

export default DirectReferrals;
