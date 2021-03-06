import React from 'react';
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom';
import Navbar from './Components/Navbar/navbar';
import Sign from './Components/Signin/Sign in';
import About from './pages/About';
import Signup from './pages/Signup';


function App() {
  return (
    <Router>
      <Navbar/>
      <Switch>
        <Route path='/' component={App}/>
        <Route path='/about' component={About}/>
        <Route path='/Sign up' component={Signup}/>
        <Route path='/Sign In' component={Sign}/>
      </Switch>
    </Router>


  );
}

export default App;
