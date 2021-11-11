import { IoMdNotificationsOutline } from "react-icons/io";
import { AiOutlineCalendar, AiOutlineMenu } from "react-icons/ai";

import image from "../assets/avatar.png";
import "./TopBar.css";

export default function TopBar({ handleShrink }) {
  return (
    <>
      <div className="up-nav">
        <div className="left-main">
          <AiOutlineMenu className="setting pointer" onClick={handleShrink} />
        </div>
        <div className="right-main">
          <AiOutlineCalendar className="spacing" size="24px" />
          <IoMdNotificationsOutline className="spacing" size="24px" />
          <img className="pic spacing" src={image} alt="avatar" />
        </div>
      </div>
      <div className="nameContainer">
        <h3>Welcome, David</h3>
        <p>USER ID: 567890</p>
      </div>
    </>
  );
}
