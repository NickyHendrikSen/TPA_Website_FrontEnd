import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Home from "./shared/Home/Home"
import Places from "./shared/Places/PlacesNavbar/PlacesNavbar"
import Experiences from "./shared/Experience/ExperienceHeader/ExperienceHeader"
import ExperienceDetail from "./shared/ExperienceDetail/ExperienceDetail"
import PlaceDetail from "./shared/PlaceDetail/PlaceDetail"
import BeHost_Room from "./shared/BeHost_Room/BeHost_Room"
import BeHost_Bedroom from "./shared/BeHost_Room/BeHost_Bedroom"
import BeHost_Bathroom from "./shared/BeHost_Room/BeHost_Bathroom";
import PlanList from "./shared/PlanList/PlanList"
import Profile from "./shared/Profile/Profile"
import ChatDetail from "./shared/ChatDetail/ChatDetail"
import Chat from "./shared/Chat/Chat"
import PlanDetail from "./shared/PlanDetail/PlanDetail"
import UserProfile from "./shared/UserProfile/UserProfile"
import BookingPlace from "./shared/BookingPlace/BookingPlaceLoader"
import BookingExperience from "./shared/BookingExperience/BookingExperience"
import BookingHistory from "./shared/BookingHistory/BookingHistory"
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import HostExperience from './shared/BecomeAHostExperience/HostExperience';
import BecomeAHostPlace from './shared/BecomeAHostPlace/BecomeAHostPlace';


const App: React.FC = () => {
  return (
    <div className="App">
        <Router>
          <Switch>
              <Route path="/BookingHistory" component={BookingHistory} />
              <Route path="/BookingPlace" component={BookingPlace}/>
              <Route path="/BookingExperience" component={BookingExperience}/>
              <Route path="/UserProfile" component={UserProfile}/>
              <Route path="/Chat" component={Chat}/>
              <Route path="/plan-detail/:id" component={PlanDetail}/>
              {/* <Route path="/tes" component={Tes} /> */}
              <Route path="/ChatDetail" component={ChatDetail} />
              <Route path="/Profile" component={Profile} />
              <Route path="/PlanList" component={PlanList} />
              <Route path="/plan-detail" component={PlanDetail}/>
              <Route path="/become-a-host/bathroom" component={BeHost_Bathroom}/>
              <Route path="/become-a-host/bedroom" component={BeHost_Bedroom}/>
              <Route path="/become-a-host/room" component={BeHost_Room}/>
              <Route path="/become-a-host-experience" component={HostExperience}/>
              <Route path="/become-a-host-place" component={BecomeAHostPlace}/>
              <Route path="/PlaceDetail/:id" component={PlaceDetail}/>
              <Route path="/Places/:country" component={Places}/>
              <Route path="/Experiences" component={Experiences}/>
              <Route path="/ExperiencesDetail/:id" component={ExperienceDetail}/>
              <Route path="/" component={Home}/>
          </Switch>
        </Router>
    </div>
  );
}

export default App;