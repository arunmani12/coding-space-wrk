import React from "react";
import { FiPower, FiTwitter } from "react-icons/fi";
import { BsGear } from "react-icons/bs";

import "./NavBar.css";
import image from "../assets/avatar.png";
import NavLink from "../components/NavLink";
import links from "../data/routes";

const NavBar = ({ isShrink }) => {
  const isShrinkCss = (val) => (isShrink ? `${val}--shrink` : val);

  return (
    <nav className={`${isShrinkCss("left")} `}>
      <div className="top">
        <h3 className={`${isShrinkCss("logo")}`}>Free Coin</h3>
        <div className="user-details">
          <div className={`${isShrinkCss("avatar-container")}`}>
            <img src={image} alt="avatar" className="avatar" />
          </div>
          <h3 className={`${isShrinkCss("user-name")}`}>Name</h3>
          <div className={`${isShrinkCss("user-actions")}`}>
            <BsGear size="14px" className={`${isShrinkCss("setting")}`} />
            <FiTwitter size="14px" className={`${isShrinkCss("twitter")}`} />
            <FiPower size="14px" className={`${isShrinkCss("poweroff")}`} />
          </div>
        </div>
      </div>
      <div className="bottom">
        {links.map(({ Icon, title, subLinks }) => (
          <NavLink
            Icon={Icon}
            title={title}
            subLinks={subLinks}
            isShrink={isShrink}
            isShrinkCss={isShrinkCss}
          />
        ))}
      </div>
    </nav>
  );
};

export default NavBar;
