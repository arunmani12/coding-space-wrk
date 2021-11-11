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
import Transfer from "./pages/Wallet/Transfer";
import WalletChange from "./pages/Wallet/WalletChange";
import ActivationWallet from "./pages/Wallet/ActivationWallet";
import Login from "./pages/Login/Login";
import NavBar from "./components/NavBar";
import TopBar from "./components/TopBar";

function App() {
  const [user, setUser] = useState("");
  const [isShrink, setIsShrink] = useState(false);

  const handleShrink = () => setIsShrink(!isShrink);

  if (user) return <Route path="/login" exact component={Login} />;

  return (
    <Router>
      <div className="main-container">
        <NavBar isShrink={isShrink} />
        <div className={`${isShrink ? "right--shrink" : "right"}`}>
          <TopBar handleShrink={handleShrink} />
          <Route path="/" exact component={DashboardContent} />
          <Route path="/direct-referrals" exact component={DirectReferrals} />
          <Route path="/change-password" exact component={ChangePassword} />
          <Route path="/profile" exact component={Profile} />
          <Route path="/bank-address" exact component={BankAddress} />
          <Route path="/add-funds" exact component={AddFunds} />
          <Route path="/pending=depo" exact component={PendingDepo} />
          <Route path="/transfer" exact component={Transfer} />
          <Route path="/wallet-change" exact component={WalletChange} />
          <Route path="/activation-wallet" exact component={ActivationWallet} />
        </div>
      </div>
    </Router>
  );
}

export default App;
