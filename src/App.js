import './App.css';
import Dasbord from './components/Dasboard';
import Dashboard_content from './components/Dashboard_content';
import Direct from './components/Direct';
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
                   <Dasbord/>
                    <Dashboard_content/>
                  </div>
          </Route>

          <Route path="/Direct" exact>
               <div className='main-div'>
              <Dasbord/>
               <Direct/>
               </div>
          </Route>
    </Switch>
    </Router>
 
  
  );
}

export default App;
