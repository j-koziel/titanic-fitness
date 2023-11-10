import { Routes, Route, Navigate } from "react-router-dom";
import {useContext} from "react"

import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import Home from "./views/Home/Home";
import Login from "./views/Login/Login";
import Profile from "./views/Profile/Profile";
import Settings from "./views/Settings/Settings";
import TermsAndConditions from "./views/TermsAndConditions/TermsAndConditions";
import About from "./views/About/About";
import GymLocations from "./views/GymLocations/GymLocations";
import Subscription from "./views/Subscription/Subscription";
import {AuthContext} from "./components/AuthContext"

function App() {
  const {user} = useContext(AuthContext)

  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
        <Route path="/locations" element={<GymLocations />} />
        <Route path="/subscription" element={<Subscription />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={ user ? <Profile /> : <Navigate to="/login"/>} />
        <Route path="/profile/settings" element={<Settings />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
