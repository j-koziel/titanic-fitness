import "./Settings.css";
import NavBarButton from "../../components/NavBarButton/NavBarButton";

function Settings() {
  return (
    <div className="settings-page-container">
      <div className="settings-container">
        <div className="settings-menu">
          <h2>Settings</h2>
          <div className="settings-buttons">
            <NavBarButton buttonText="Account" />
            <NavBarButton buttonText="Workout" />
            <NavBarButton buttonText="Nutrition" />
          </div>
        </div>
        <div className="settings-main">
          <h1>Your Account</h1>
          <form>
            <div className="settings-input">
              <label htmlFor="full-name-input">Full Name</label>
              <input type="text" placeholder="Full Name" id="full-name-input" />
            </div>
            <div className="settings-input">
              <label htmlFor="date-of-birth-input">Date of Birth</label>
              <input
                type="text"
                placeholder="Date Of Birth"
                id="date-of-birth-input"
              />
            </div>
            <div className="settings-input">
              <label htmlFor="email-input">Change Email</label>
              <input type="email" placeholder="Email" id="email-input" />
            </div>
            <div className="settings-input">
              <label htmlFor="password-input">Reset Password</label>
              <input
                type="password"
                placeholder="Password"
                id="password-input"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Settings;
