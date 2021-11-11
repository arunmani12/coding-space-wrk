import React from "react";
import "./ActivationWallet.css";

const ActivationWallet = () => {
  return (
    <div className="card-container">
      <h4 className="page-title">
        Activation Wallet Report of 707123 (Balance - TRX 0.00){" "}
      </h4>
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
          <td>1</td>
          <td>19/09/2021</td>
          <td>TRX 200.00</td>
          <td>Invest</td>
          <td>707123</td>
          <td>Debit</td>
        </tr>
      </table>
      <p className="notes">
        Note: Do not Send Coins after 3 hours of creating the QR Code.
      </p>
    </div>
  );
};
export default ActivationWallet;
