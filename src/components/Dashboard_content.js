/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import Purse from './images/purse.png';
import Money from './images/money-bag.png';
import Interest from './images/interest.png';
import Dollar from './images/dollar.png';
import Next_pause1 from './images/play-button(1).png';
import Next_pause from './images/play-button.png';
import Next1 from './images/next(1).png';
import Next from './images/next.png';
import Like from './images/like.png';
import './dashboard_content.css'
import UpBar from "./UpBar";

const Dashboard_content = () =>{
    return(
        <>
        
        <UpBar/>

        <div className="container">

            <div className="first_contain">
            <div className="sub_first_contain">
                <div className="title_container">
                    <h3>Your Package</h3>
                    <p>TRX 200</p>
                </div>
                <div className="icon_container">
                    <img src={Money} alt="pic" className="png_size"/>
                </div>

            </div>
            <div className="sub_first_contain">
                <div className="title_container">
                    <h3>Activation Wallet</h3>
                    <p>TRX 0.00</p>
                </div>
                <div className="icon_container">
                    <img src={Purse} alt="pic" className="png_size"/>
                    
                </div>

            </div>
            <div className="sub_first_contain">
                <div className="title_container">
                    <h3>Cash Wallet</h3>
                    <p>TRX 56.00</p>
                </div>
                <div className="icon_container">
                    <img src={Purse} alt="pic" className="png_size"/>
                </div>

            </div>
            <div className="sub_first_contain">
                <div className="title_container">
                    <h3>Daily Bonus</h3>
                    <p>TRX 36.00</p>
                </div>
                <div className="icon_container">
                    <img src={Interest} alt="pic" className="png_size"/>
                </div>

            </div>
            <div className="sub_first_contain">
                <div className="title_container">
                    <h3>Total Referral</h3>
                    <p>TRX 20.0</p>
                </div>
                <div className="icon_container1">
                    <img src={Dollar} alt="pic" className="png_size1"/>
                </div>

            </div>
            <div className="sub_first_contain">
                <div className="title_container">
                    <h3>Total Pairing</h3>
                    <p>TRX 0.00</p>
                </div>
                <div className="icon_container">
                    <div className="icon"></div>
                </div>

            </div>
            </div>
            <div className="second_contain">
            <div className="sub_second_contain">
                <div className="icon_cont1">
                    <img src={Next_pause1} alt="icon" className="icon_modify"/></div>
                <div className="title_subcontainer">
                    <p>Left Value</p>
                    <h3>TRX 200</h3>

                </div>

            </div>
            <div className="sub_second_contain">
                <div className="icon_cont2">
                    <img src={Next_pause} alt="icon" className="icon_modify"/>
                    </div>
                <div className="title_subcontainer">
                    <p>Left Value</p>
                    <h3>TRX 200</h3>

                </div>

            </div>
            <div className="sub_second_contain">
                <div className="icon_cont1">
                    <img src={Next1} alt="icon" className="icon_modify"/>
                    </div>
                <div className="title_subcontainer">
                    <p>Left Value</p>
                    <h3>TRX 200</h3>

                </div>

            </div>
            <div className="sub_second_contain">
                <div className="icon_cont2">
                    <img src={Next} alt="icon" className="icon_modify"/>
                    </div>
                <div className="title_subcontainer">
                    <p>Left Value</p>
                    <h3>TRX 200</h3>

                </div>

            </div>
            <div className="sub_second_contain">
                <div className="icon_cont2">
                    <img src={Like} alt="icon" className="icon_modify"/>
                    </div>
                <div className="title_subcontainer">
                    <p>Left Value</p>
                    <h3>TRX 200</h3>

                </div>

            </div>
            <div className="sub_second_contain">
                <div className="icon_cont3">
                    <img src={Like} alt="icon" className="icon_modify"/></div>
                <div className="title_subcontainer">
                    <p>Left Value</p>
                    <h3>TRX 200</h3>

                </div>

            </div>
            <div className="sub_second_contain">
                <div className="icon_cont2">
                    <img src={Like} alt="icon" className="icon_modify"/></div>
                <div className="title_subcontainer">
                    <p>Left Value</p>
                    <h3>TRX 200</h3>

                </div>

            </div>
            <div className="sub_second_contain">
                <div className="icon_cont3">
                    <img src={Like} alt="icon" className="icon_modify"/></div>
                <div className="title_subcontainer">
                    <p>Left Value</p>
                    <h3>TRX 200</h3>

                </div>

            </div>
            </div>
            <div className="first_contain">
            <div className="sub_first_contain">
                <div className="title_container">
                    <h3>We buy TRX</h3>
                    <p>Rs 0.00</p>
                </div>
                <div className="icon_container">
                    <img src={Purse} alt="pic" className="png_size"/>
                </div>

            </div>
            <div className="sub_first_contain">
                <div className="title_container">
                    <h3>We Sell TRX</h3>
                    <p>Rs 0.00</p>
                </div>
                <div className="icon_container">
                    <img src={Money} alt="pic" className="png_size"/>
                </div>

            </div>
            <div className="sub_first_contain">
                <div className="title_container1">
                    <h3>Contact Mobile</h3>
                    <p></p>
                </div>
                <div className="icon_container">
                    <img src={Interest} alt="pic" className="png_size"/>
                </div>

            </div>
            
            </div>
            <div>

            </div>
        </div>
        
</>
    
    )};
export default Dashboard_content;