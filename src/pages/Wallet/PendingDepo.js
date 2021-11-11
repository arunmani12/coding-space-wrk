import React from "react";

import "./PendingDepo.css";

const PendingDepo = () => {
  return (
    <div className="card-container">
      <h4 className="page-title">Pending Crypto Deposites of 707123</h4>
      <table>
        <tr>
          <th>Serial</th>
          <th>TxnID</th>
          <th>Date/Time</th>
          <th>Amount</th>
          <th>Address</th>
          <th>Status</th>
        </tr>
        <tr>
          <td>No Records Found</td>
        </tr>
      </table>

      <p className="notes">
        Note:Do not Send Coins after 3 hours of creating the QR Code.
      </p>
    </div>
  );
};
export default PendingDepo;
