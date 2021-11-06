import React from "react";
import './Tron.css'
import UpBar from "./UpBar";

const Tron_address = () =>{
    return(
        <>
        
        <UpBar/>
        <div class="tron_container">
                <div class="tron_title">
                    <h4>Update Tron Address</h4>
                </div>
                <div class="tron_form">
                    <div class="tron_list">
                        <label class="title">Enter New Tron Address</label>
                        <input type="text" id="lname" name="lastname" class="tron_ipbox"/>
                    </div>
                    <div class="tron_list">
                        <label class="title1">Get OTP</label>
                        <a href="#" class="otp_btn">Generate OTP</a>
                    </div>
                    <div class="tron_list">
                        <label class="title">OTP Reference No.</label>
                        <input type="text" id="lname" name="lastname" class="tron_ipbox"/>
                    </div>
                    <div class="tron_list">
                        <label class="title">Enter OTP</label>
                        <input type="text" id="lname" name="lastname" class="tron_ipbox"/>
                    </div>
                </div>
                <a href="#" class="submit_btn">Submit</a>
                <p class="notes">Note: Once You Press the Generate OTP Button, You will receive your OTP in your registered email id. Check your Email and get the OTP and enter it here. You can edit
your tron address only if it is empty. Tron Address once entered can not be changed. So use your own Tron Address like (Trust Wallet, Tron Link Pro or Token Pocket. Do
not use an exchange tron address.)</p>
            </div>
        
        

        
        
</>
    
    )};
export default Tron_address;