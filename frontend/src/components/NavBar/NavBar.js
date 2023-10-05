import "./NavBar.css";
import NavBarButton from "../NavBarButton/NavBarButton";

function NavBar() {
  return (
    <div>
      <div className="nav-bar-buttons-container">
        <NavBarButton buttonText="About" />
        <NavBarButton buttonText="Locations" />
        <NavBarButton buttonText="Login" />
      </div>
    </div>
  );
}

export default NavBar;
