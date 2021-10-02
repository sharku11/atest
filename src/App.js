import React from 'react';
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom';
import Navbar from './Components/Navbar/navbar';
import Sign from './Components/Signin/Sign in';


function App() {
  return (
    <Router>
      <Navbar/>
      <Switch>
        <Route path='/' component={Sign}/>
        <Route path='/about' component={Sign}/>
        <Route path='/Sign up' component={Sign}/>
        <Route path='/Sign In' component={Sign}/>
      </Switch>
    </Router>


  );
}

export default App;