import React from "react";
import { BiNews } from "react-icons/bi";
import { MdOutlineEmojiEvents } from "react-icons/md";
import { SiEventstore } from "react-icons/si";

import "./NoticeBoard.css";

const icons = [
  { Icon: BiNews, title: "News" },
  { title: "Events", Icon: SiEventstore },
  { title: "Achievers", Icon: MdOutlineEmojiEvents },
];

const NoticeBoard = () => {
  return (
    <div className="card-container">
      <h4 className="page-title">Notice Board</h4>
      <div className="noticeBoard-items">
        {icons.map(({ title, Icon }) => (
          <div className="noticeBoard-item">
            <Icon size="72px" className="noticeBoard-icon" />
            <p className="noticeBoard-title">{title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NoticeBoard;
