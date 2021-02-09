import React from 'react';
import { NavBar } from './components/NavBar';
import { MainPage } from './pages/MainPage';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { InformationPage } from './pages/InformationPage';

const App: React.FC = () => {
 
  return (
    <Router>
      <NavBar />
      <div className="container">
        <Switch>
          <Route path='/' exact component={MainPage}/>
          <Route path='/about' component={InformationPage}/>
        </Switch>
      </div>
    </Router>
  )
}
export default App;
