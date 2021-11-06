import React from "react";
import './Profile.css'
import UpBar from "./UpBar";

const Profile = () =>{
    return(
        <>
        
        <UpBar/>
        <div class="profile_container">
            <div class="profile_title">
                <h4>Member profile</h4>
            </div>
            <div class="profile_form">
                <div class="form_list">
                <label class="form_title">UserID</label> 
                <div class="form_box" type="input"><p class="text">707123</p></div>
                </div>
                <div class="form_list">
                <label class="form_title">Name</label> 
                <div class="form_box"><p class="text">Arunmani</p></div>
                </div>
                <div class="form_list">
                <label class="form_title">Mobile</label> 
                <div class="form_box"><p class="text">9788000345</p></div>
                </div>
                <div class="form_list">
                <label class="form_title">Email</label> 
                <div class="form_box"><p class="text">arunmani@gmail.com</p></div>
                </div>
                <div class="form_list">
                <label class="form_title">City</label> 
                <div class="form_box"><p class="text"></p></div>
                </div>
                <div class="form_list">
                <label class="form_title">Country</label> 
                <div class="form_box"><p class="text">India</p></div>
                </div>
                <div class="form_list">
                <label class="form_title">Package</label> 
                <div class="form_box"><p class="text">TRX 200</p></div>
                </div>
                <div class="form_list">
                <label class="form_title">Joined On</label> 
                <div class="form_box"><p class="text">19/09/2021</p></div>
                </div>

            </div>

        </div>

        
        
</>
    
    )};
export default Profile;