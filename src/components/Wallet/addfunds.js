/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
// import Money from 'http://localhost:3000//money-bag.png';
import './addfunds.css'
import UpBar from "../Home/UpBar";

const Addfunds = () =>{
    return(
        <>
        
        <UpBar/>

        <div className="container1">
            <div className="first_contain1">
            <div className="sub_first_contain1">
                <div className="title_contain1">
                    <h3>Add Funds to Your Activation Wallet</h3>
                    <br/>
                    <form>
                    <label id="lable1" for="addfund">Enter Amount in (TRX) </label>
                    <input type="number" id="addfund" name="AddFunds" />
                    <br/><br/>
                        <button id="submitbtn">Submit</button>
                    </form>
                    <br/>
                    <p className="title_contain1">
                    Note: Once you press Submit, The system will show you the Tron Address to Transfer and the Required Amount of Trons to Transfer. Once you transfer,
    your wallet will be loaded automatically after the required number of confirmations. It may take some time for confirmations.
    Please send the exact amount of Coins shown in the next page
                    </p>
                </div>
               

            </div>
            

            </div>
        </div>
        
</>
    
    )};
export default Addfunds;