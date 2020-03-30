import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

// Components
import Navbar from './components/Navbar/Navbar';

// Pages 
import Home from './pages/Home';
import Marketing from './pages/Marketing';
import Desarrollo from './pages/Desarrollo';
import Sistemas from './pages/Sistemas';
import Domotica from './pages/Domotica';
import Login from './components/Auth/Login';
import NewAccount from './components/Auth/NewAccount';
import Proyectos from './components/Proyectos/Proyectos';
import Error from './pages/404';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/marketing">
            <Marketing />
          </Route>
          <Route path="/development">
            <Desarrollo />
          </Route>
          <Route path="/systems">
            <Sistemas />
          </Route>
          <Route path="/home-automation">
            <Domotica />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/new-account">
            <NewAccount />
          </Route>
          <Route path="/projects">
            <Proyectos />
          </Route>
          <Route path="*">
            <Error />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
