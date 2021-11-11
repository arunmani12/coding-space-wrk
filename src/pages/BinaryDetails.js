import React from "react";

import "./BinaryDetails.css";

const BinaryDetails = () => {
  return (
    <div className="card-container">
      <h4 className="page-title">Binary Details of 707183</h4>
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
            <th>Left Value</th>
            <th>Right Value</th>
            <th>Matched</th>
            <th>Ceiling</th>
            <th>Paring Income</th>
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
          </tr>
        </tbody>
      </table>
      <div className="binaryDetails_footer">
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

export default BinaryDetails;
