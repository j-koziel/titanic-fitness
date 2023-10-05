import "./NavBar.css";
import NavBarButton from "../NavBarButton/NavBarButton";
import logo from "../../assets/logo.png";

function NavBar() {
  return (
    <div className="nav-bar">
      <div className="title-container">
        <img src={logo} alt="Titanic Fitness Logo" />
        <h1>Titanic Fitness</h1>
      </div>
      <div className="nav-bar-buttons-container">
        <NavBarButton buttonText="About" />
        <NavBarButton buttonText="Locations" />
        <NavBarButton buttonText="Login" />
      </div>
    </div>
  );
}

export default NavBar;
