import React, { useState } from "react";
import { FiChevronDown, FiChevronRight } from "react-icons/fi";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-router-dom";

import "./NavLink.css";

const NavLink = ({
  Icon,
  subLinks = false,
  title,
  isShrink,
  isShrinkCss,
  link,
}) => {
  const [isExpand, setIsExpand] = useState(false);

  const handleExpand = () => setIsExpand(!isExpand);

  return (
    <>
      <div
        className={`${isShrinkCss("item-container")}`}
        onClick={handleExpand}
      >
        {link ? (
          <Link to={link} className="item link">
            <Icon className="icon" />
            {!isShrink && <p>{title}</p>}
          </Link>
        ) : (
          <div className="item">
            <Icon className="icon" />
            {!isShrink && <p>{title}</p>}
          </div>
        )}
        {!isShrink ? (
          subLinks ? (
            isExpand ? (
              <FiChevronDown />
            ) : (
              <FiChevronRight />
            )
          ) : null
        ) : null}
      </div>
      {!isShrink
        ? subLinks
          ? isExpand && (
              <div>
                {subLinks.map(({ title, link, asp }) => (
                  <div>
                    {link && (
                      <Link to={link} className="subLink">
                        <HiOutlineArrowNarrowRight className="icon" />
                        <p>{title}</p>
                      </Link>
                    )}
                    {asp && (
                      <a href={asp} className="subLink">
                        <HiOutlineArrowNarrowRight className="icon" />
                        <p>{title}</p>
                      </a>
                    )}
                  </div>
                ))}
              </div>
            )
          : null
        : null}
    </>
  );
};

export default NavLink;
