import { FiPower, FiHome, FiPackage } from "react-icons/fi";
import {
  BsDownload,
  BsFillFileEarmarkBinaryFill,
  BsLink45Deg,
  BsPersonFill,
  BsWallet,
} from "react-icons/bs";
import { AiOutlineEdit, AiOutlineMail, AiOutlineTeam } from "react-icons/ai";

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
        link: "change-password",
      },
    ],
  },
  {
    title: "Team",
    Icon: AiOutlineTeam,
    subLinks: [
      {
        title: "Package View",
        asp: "certificate.asp",
      },
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
  },
  {
    title: "Referral Link",
    Icon: BsLink45Deg,
  },
  {
    title: "Wallet",
    Icon: BsWallet,
    subLinks: [
      { title: "Add Funds", link: "/add-funds" },
      { title: "Pending Deposits", link: "/pending-depo" },
      { title: "Transfer", link: "/transfer" },
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
      { title: "Top Up", asp: "editprofilemember.asp" },
      { title: "My Top ups", asp: "editprofilemember.asp" },
    ],
  },
  {
    title: "Mail Box",
    Icon: AiOutlineMail,
    subLinks: [
      {
        title: "Compose",
        asp: "editprofilemember.asp",
      },
      {
        title: "Send Items",
        asp: "editprofilemember.asp",
      },
      {
        title: "Inbox",
        asp: "editprofilemember.asp",
      },
    ],
  },
  {
    title: "Withdraw",
    Icon: AiOutlineEdit,
    subLinks: [
      {
        title: "Withdraw",
        asp: "editprofilemember.asp",
      },
      { title: "Withdraw Report", asp: "editprofilemember.asp" },
    ],
  },
  {
    title: "Registration",
    Icon: BsPersonFill,
  },
  {
    title: "Log Out",
    Icon: FiPower,
  },
];

export default links;
