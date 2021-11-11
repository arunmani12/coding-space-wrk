import React from "react";

import "./WithdrawReport.css";

const WithdrawReport = () => {
  return (
    <div className="card-container">
      <h4 className="page-title">Withdraw Report of 707123</h4>
      <table>
        <tr>
          <th>Serial</th>
          <th>Date</th>
          <th>Amount</th>
          <th>Trans ID</th>
        </tr>
        <tr>
          <td>1</td>
          <td>19/09/2021</td>
          <td>TRX 200.00</td>
          <td>707123</td>
        </tr>
      </table>
    </div>
  );
};

export default WithdrawReport;
