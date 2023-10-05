import "./NavBar.css";
import NavBarButton from "../NavBarButton/NavBarButton";
import logo from "../../assets/logo.png";

function NavBar() {
  return (
    <div className="nav-bar">
      <div className="title-container">
        <img src={logo} alt="Titanic Fitness Logo" />
        <a href="/">
          <h1>Titanic Fitness</h1>
        </a>
      </div>
      <div className="nav-bar-buttons-container">
        <NavBarButton buttonText="About" path="about" />
        <NavBarButton buttonText="Locations" path="locations" />
        <NavBarButton buttonText="Login" path="login" />
      </div>
    </div>
  );
}

export default NavBar;
