import React from "react";
import './Password.css'
import UpBar from "./UpBar";

const Change_password = () =>{
    return(
        <>
        
        <UpBar/>
        <div class="pass_container">
                <div class="pass_title">
                    <h4>Change Password</h4>
                </div>
                <div class="pass_form">
                    <div class="pass_list">
                        <label class="title">Old Password</label>
                        <input type="text" id="lname" name="lastname" class="pass_ipbox"/>
                    </div>
                    
                    <div class="pass_list">
                        <label class="title">New password</label>
                        <input type="text" id="lname" name="lastname" class="pass_ipbox"/>
                    </div>
                    <div class="pass_list">
                        <label class="title">Conform New Password</label>
                        <input type="text" id="lname" name="lastname" class="pass_ipbox"/>
                    </div>
                </div>
                <a href="#" class="submit_btn">Submit</a>
            </div>
     
     
     
     
     </>
    
    )};
export default Change_password;