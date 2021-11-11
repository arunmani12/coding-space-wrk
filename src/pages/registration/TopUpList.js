import React from "react";
const [data, setData] = useState([])


const TopUpList = () => {
  return (
    <div className="card-container">
      <h4 className="page-title">Topup Details and Registrations</h4>
      <table>
        <tr>
          <th>TopUp User Name</th>
          <th>TopUp Date</th>
          <th>Amount</th>
          <th>Status</th>
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

export default TopUpList;
