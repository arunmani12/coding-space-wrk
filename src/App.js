import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "./App.css";
import DashboardContent from "./pages/Home/DashboardContent";
import DirectReferrals from "./pages/Team/DirectReferrals";
import ChangePassword from "./pages/Home/ChangePassword";
import Profile from "./pages/Home/Profile";
import BankAddress from "./pages/Home/BankAddress";
import AddFunds from "./pages/Wallet/AddFunds";
import PendingDepo from "./pages/Wallet/PendingDepo";
import TransferPoints from "./pages/Wallet/TransferPoints";
import WalletChange from "./pages/Wallet/WalletChange";
import ActivationWallet from "./pages/Wallet/ActivationWallet";
import Login from "./pages/Login/Login";
import NavBar from "./components/NavBar";
import TopBar from "./components/TopBar";
import BinaryDetails from "./pages/BinaryDetails";
import TopUp from "./pages/packages/TopUp";
import TopUpHistory from "./pages/packages/TopUpHistory";
import WithdrawReport from "./pages/withdraw/WithdrawReport";
import ReferralLink from "./pages/ReferralLink";
import TopUpRegistration from "./pages/registration/TopUpRegistration";
import TopUpList from "./pages/registration/TopUpList";
import NoticeBoard from "./pages/Home/NoticeBoard";
import CashWallet from "./pages/Wallet/CashWallet";

function App() {
  const [isShrink, setIsShrink] = useState(false);
  const [user, setUser] = useState(false);

  const handleShrink = () => setIsShrink(!isShrink);

  if (user)
    return (
      <Router>
        <Route path="/login" component={Login} />
      </Router>
    );

  return (
    <Router>
      <div className="main-container">
        <NavBar isShrink={isShrink} />
        <div className={`${isShrink ? "right--shrink" : "right"}`}>
          <TopBar handleShrink={handleShrink} />

          <Route path="/" exact component={DashboardContent} />
          <Route path="/profile" exact component={Profile} />
          <Route path="/bank-address" exact component={BankAddress} />
          <Route path="/change-password" exact component={ChangePassword} />
          <Route path="/notice-board" component={NoticeBoard} />

          <Route path="/direct-referrals" exact component={DirectReferrals} />

          <Route path="/binary-details" exact component={BinaryDetails} />

          <Route path="/referral-link" component={ReferralLink} exact />

          <Route path="/add-funds" exact component={AddFunds} />
          <Route path="/pending-depo" exact component={PendingDepo} />
          <Route path="/transfer-points" exact component={TransferPoints} />
          <Route path="/wallet-change" exact component={WalletChange} />
          <Route path="/activation-wallet" exact component={ActivationWallet} />
          <Route path="/cash-wallet" exact component={CashWallet} />

          <Route path="/topUp" component={TopUp} exact />
          <Route path="/topUp-history" component={TopUpHistory} />

          <Route path="/withdraw-report" component={WithdrawReport} />

          <Route path="/topUp-registration" component={TopUpRegistration} />
          <Route path="/topUp-list" component={TopUpList} />
        </div>
      </div>
    </Router>
  );
}

export default App;
