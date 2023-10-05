import "./NavBarButton.css";

function NavBarButton({ buttonText }) {
  return (
    <div className="nav-bar-button-container">
      <button className="nav-bar-button">{buttonText}</button>
    </div>
  );
}

export default NavBarButton;
