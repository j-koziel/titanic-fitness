import "./ProfileButton.css";
import { useNavigate } from "react-router-dom";

function ProfileButton({ buttonText, navigateTo = "" }) {
  const navigate = useNavigate();

  if (!navigateTo) {
    return <button className="profile-button">{buttonText}</button>;
  }

  return (
    <button className="profile-button" onClick={() => navigate(navigateTo)}>
      {buttonText}
    </button>
  );
}

export default ProfileButton;
