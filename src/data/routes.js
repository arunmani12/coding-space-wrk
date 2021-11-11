import { FiPower, FiHome, FiPackage } from "react-icons/fi";
import {
  BsDownload,
  BsFillFileEarmarkBinaryFill,
  BsLink45Deg,
  BsPersonFill,
  BsWallet,
} from "react-icons/bs";
import { AiOutlineEdit, AiOutlineTeam } from "react-icons/ai";

const links = [
  {
    title: "Home",
    Icon: FiHome,
    subLinks: [
      {
        title: "Dashboard",
        link: "/",
      },
      {
        title: "Profile",
        link: "/profile",
      },
      {
        title: "Update Bank Address",
        link: "/bank-address",
      },
      {
        title: "Change Password",
        link: "/change-password",
      },
      {
        title: "Notice Board",
        link: "/notice-board",
      },
    ],
  },
  {
    title: "Team",
    Icon: AiOutlineTeam,
    subLinks: [
      {
        title: "Direct Referrals",
        link: "/direct-referrals",
      },
    ],
  },
  { title: "Download PDF", Icon: BsDownload },
  {
    title: "Binary Details",
    Icon: BsFillFileEarmarkBinaryFill,
    link: "/binary-details",
  },
  {
    title: "Referral Link",
    Icon: BsLink45Deg,
    link: "/referral-link",
  },
  {
    title: "Wallet",
    Icon: BsWallet,
    subLinks: [
      { title: "Add Funds", link: "/add-funds" },
      { title: "Pending Deposits", link: "/pending-depo" },
      { title: "Transfer Points", link: "/transfer-points" },
      {
        title: "Wallet Change",
        link: "/wallet-change",
      },
      { title: "Activation Wallet", link: "/activation-wallet" },
      { title: "Cash Wallet", link: "/cash-wallet" },
    ],
  },
  {
    title: "Packages",
    Icon: FiPackage,
    subLinks: [
      { title: "Top Up", link: "/topUp" },
      { title: "TopUp History", link: "/topUp-history" },
    ],
  },
  {
    title: "Withdraw",
    Icon: AiOutlineEdit,
    subLinks: [{ title: "Withdraw Report", link: "/withdraw-report" }],
  },
  {
    title: "Registration",
    Icon: BsPersonFill,
    subLinks: [
      { title: "Top-up Registration", link: "/topUp-registration" },
      { title: "Top-up List", link: "/topUp-list" },
    ],
  },
  {
    title: "Log Out",
    Icon: FiPower,
  },
];

export default links;
