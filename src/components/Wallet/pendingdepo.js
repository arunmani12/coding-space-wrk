/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import './pendingdepo.css'
import UpBar from "../Home/UpBar";


const Pendingdepo = () =>{
    return(
        <>
        
        <UpBar/>

        <div className="container2">
            <div className="first_contain2">
            <div className="sub_first_contain2">
                <div className="title_contain2">
                    <h3>Pending Crypto Deposites of 707123</h3>
                    <br/>
                    <table id="customers" >
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
                    
                    <p className="title_contain2">Note:Do not Send Coins after 3 hours of creating the QR Code.
                    </p>
                </div>
            </div>
            </div>

            </div>
     
        
</>
    
    )};
export default Pendingdepo;