import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from "./shared/Header/Header"
import Home from "./shared/Home/Home"
import Footer from "./shared/Footer/Footer"
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"


const App: React.FC = () => {
  return (
    <div className="App">
        <Header />
        <Router>
          <Switch>
              <Route path="/" component={Home}/>
          </Switch>
        </Router>
    </div>
  );
}

export default App;