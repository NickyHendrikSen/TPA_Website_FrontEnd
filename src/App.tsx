import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from "./shared/Header/Header"
import Home from "./shared/Home/Home"
import Footer from "./shared/Footer/Footer"
import FooterButton from "./shared/Footer/FooterButton/FooterButton";
import Places from "./shared/Places/PlacesNavbar/PlacesNavbar"
import Experiences from "./shared/Experience/ExperienceHeader/ExperienceHeader"
import ExperienceDetail from "./shared/ExperienceDetail/ExperienceDetail"
import PlaceDetail from "./shared/PlaceDetail/PlaceDetail"
import BeHost_Room from "./shared/BeHost_Room/BeHost_Room"
import Tes from "./shared/GetDataTes/tes"
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"


const App: React.FC = () => {
  return (
    <div className="App">
        <Router>
          {/* <Header /> */}
          <Switch>
              <Route path="/tes" component={Tes} />
              <Route path="/become-a-host/room" component={BeHost_Room}/>
              <Route path="/PlaceDetail" component={PlaceDetail}/>
              <Route path="/Places" component={Places}/>
              <Route path="/Experiences" component={Experiences}/>
              <Route path="/ExperiencesDetail" component={ExperienceDetail}/>
              <Route path="/" component={Home}/>
          </Switch>
          {/* <Footer /> */}
          {/* <FooterButton /> */}
          {/* <Home /> */}
        </Router>
    </div>
  );
}

export default App;