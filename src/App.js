import './App.css';
import Dashboard_content from './components/Home/Dashboard_content';
import Direct from './components/Home/Direct';
import Change_password from './components/Home/Password';
import Profile from './components/Home/Profile';
import Tron_address from './components/Home/Tron';
import NavBar from './components/NavBar';
import Addfunds from './components/Wallet/addfunds';
import Pendingdepo from './components/Wallet/pendingdepo';
import Transfer from './components/Wallet/transfer';
import WalletChange from './components/Wallet/wallet_change';
import ActivationWallet from './components/Wallet/activation_wallet'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";



function App() {
  return (
    <Router>
       <Switch>
          <Route path="/" exact>
                 <div className='main-div'>
                   <NavBar/>
                    <Dashboard_content/>
                  </div>
          </Route>

          <Route path="/Direct" exact>
               <div className='main-div'>
              <NavBar/>
               <Direct/>
               </div>
          </Route>

          <Route path="/change_password" exact>
               <div className='main-div'>
              <NavBar/>
               <Change_password/>
               </div>
          </Route>

          <Route path="/profile" exact>
               <div className='main-div'>
              <NavBar/>
             <Profile/>
               </div>
          </Route>

          <Route path="/tron_address" exact>
               <div className='main-div'>
              <NavBar/>
               <Tron_address/>
               </div>
          </Route>

          <Route path="/addfunds" exact>
               <div className='main-div'>
             <NavBar/>
               <Addfunds/>
               </div>
          </Route>

          <Route path="/pendingdepo" exact>
               <div className='main-div'>
             <NavBar/>
               <Pendingdepo/>
               </div>
          </Route>
          <Route path="/transfer" exact>
               <div className='main-div'>
             <NavBar/>
               <Transfer/>
               </div>
          </Route>
          <Route path="/wallet-change" exact>
               <div className='main-div'>
             <NavBar/>
               <WalletChange/>
               </div>
          </Route>
          <Route path="/activation-wallet" exact>
               <div className='main-div'>
             <NavBar/>
               <ActivationWallet/>
               </div>
          </Route>


    </Switch>
    </Router>
 
  
  );
}

export default App;
