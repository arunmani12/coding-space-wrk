/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import './wallet_change.css'
import UpBar from "../Home/UpBar";


const WalletChange = () =>{
    return(
        <>
        
        <UpBar/>

        <div className="container3">
            <div className="first_contain3">
            <div className="sub_first_contain3">
                <div className="title_contain3">
                    <h3>Transfer Points to Activation Wallet (Cash Wallet Balance 56.00)</h3>
                    <br/>
                    <form>
                    <label  className="label1" for="amttotrans">Amount to Transfer</label>
                    <input type="number" id="amttotrans" name="AmttoTransfer" className="inputs1"/>
                    <br/><br/>
                    <label  className="label1" for="otpbtn">Get OTP</label>
                    <button id="otpbtn">Generate OTP</button>
                    <br/><br/>
                    <label  className="label1" for="otpref">OTP Reference No. </label>
                    <input type="text" id="otpref" name="OTPrefno" className="inputs1"/>
                    <br/><br/>
                    <label  className="label1" for="enterotp">Enter___________OTP    </label>
                    <input type="text" id="enterotp" name="EnterOTP" className="inputs1"/>
                    <br/><br/>
                        <button id="submitbtn">Submit</button>
                    </form>
                    <br/>
                    <p className="title_contain3">
                    Note: Once you press Generate OTP Button, You will receive your OTP in your registered email id. Check your Email and get the OTP and enter it here.
                    </p>
                </div>
               

            </div>
            

            </div>
        </div>
        
</>
    
    )};
export default WalletChange;