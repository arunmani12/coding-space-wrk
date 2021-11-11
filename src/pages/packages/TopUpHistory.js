import React from "react";

import "./TopUpHistory.css";

const TopUpHistory = () => {
  return (
    <div className="card-container">
      <h4 className="page-title">Topup Details of 707183</h4>
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
            <th>Date</th>
            <th>Amount</th>
            <th>Directs</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>23433</td>
            <td>23433</td>
            <td>23433</td>
            <td>23433</td>
            <td>23433</td>
          </tr>
        </tbody>
      </table>
      <div className="topUpHistory_footer">
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

export default TopUpHistory;
