import "./NavBarButton.css";
import { useNavigate } from "react-router-dom";

function NavBarButton({ buttonText, path }) {
  const navigateTo = useNavigate();

  return (
    <div className="nav-bar-button-container">
      <button
        className="nav-bar-button"
        onClick={() => {
          navigateTo(`/${path}`);
        }}
      >
        {buttonText}
      </button>
    </div>
  );
}

export default NavBarButton;
