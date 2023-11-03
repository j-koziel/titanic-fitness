import "./Footer.css";
import { useNavigate } from "react-router-dom";

function Footer() {
  const navigate = useNavigate();

  return (
    <div className="footer-container">
      <footer className="footer">
        <div onClick={() => navigate("/home")}>Home</div>
        <div onClick={() => navigate("/about")}>About</div>
        <div onClick={() => navigate("/locations")}>Locations</div>
        <div onClick={() => navigate("/login?formState=login")}>Login</div>
        <div onClick={() => navigate("/login?formState=register")}>Signup</div>
        <div onClick={() => navigate("/terms-and-conditions")}>
          Terms & Conditions
        </div>
      </footer>
    </div>
  );
}

export default Footer;
