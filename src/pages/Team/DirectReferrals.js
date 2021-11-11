import React from "react";

import "./DirectReferrals.css";

const DirectReferrals = () => {
  return (
    <div className="directReferrals">
      <h4>Direct referals of 707183</h4>
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
            <th>Serial</th>
            <th>Serial</th>
            <th>Serial</th>
            <th>Serial</th>
            <th>Serial</th>
            <th>Serial</th>
            <th>Serial</th>
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
