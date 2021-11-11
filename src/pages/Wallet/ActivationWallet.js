import React from "react";
import "./ActivationWallet.css";

const ActivationWallet = () => {
  return (
    <div className="activationWallet">
      <h3>Activation Wallet Report of 707123 (Balance - TRX 0.00) </h3>
      <table id="customers">
        <tr>
          <th>
            Serial <i class="fas fa-caret-down"></i>{" "}
            <i class="fas fa-caret-up"></i>
          </th>
          <th>
            TxnID <i class="fas fa-caret-down"></i>{" "}
            <i class="fas fa-caret-up"></i>
          </th>
          <th>
            Date/Time <i class="fas fa-caret-down"></i>{" "}
            <i class="fas fa-caret-up"></i>
          </th>
          <th>
            Amount <i class="fas fa-caret-down"></i>{" "}
            <i class="fas fa-caret-up"></i>
          </th>
          <th>
            Address <i class="fas fa-caret-down"></i>{" "}
            <i class="fas fa-caret-up"></i>
          </th>
          <th>
            Status <i class="fas fa-caret-down"></i>{" "}
            <i class="fas fa-caret-up"></i>
          </th>
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
