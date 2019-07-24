import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from "./shared/Header/Header"
import Home from "./shared/Home/Home"
import Footer from "./shared/Footer/Footer"
import FooterButton from "./shared/Footer/FooterButton/FooterButton";
import Places from "./shared/Places/Places"
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"


const App: React.FC = () => {
  return (
    <div className="App">
        <Router>
          <Header />
          <Switch>
              <Route path="/Home" component={Home}/>asd
              <Route path="/Places" component={Places}/>
          </Switch>
          <Home />
          <Footer />
          <FooterButton />
        </Router>
    </div>
  );
}

export default App;