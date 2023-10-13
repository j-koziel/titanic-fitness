import "./Profile.css";
import ProfileButton from "../../components/ProfileButton/ProfileButton";
import Avatar from "../../assets/avatar.jpg";

import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

function Profile() {
  const percentage = 50;

  const progressRingStyles = {
    trailColor: "#00536F",
    pathColor: "#00A7E1",
    textColor: "#FFF",
  };

  return (
    <div className="profile-page-container">
      <div className="info-history-container">
        <div className="user-info-container">
          <h1>Welcome back, Jonathan 👋</h1>
          <div className="profile-nav">
            <img src={Avatar} alt="You" className="profile-photo" />
            <ProfileButton buttonText={"SETTINGS"} />
            <ProfileButton buttonText={"SUBSCRIPTION"} />
            <ProfileButton buttonText={"SHARE"} />
          </div>
          <h2>Your Goals 📈:</h2>
          <div className="goals-progress-container">
            <div className="goals-progress-rings">
              <div className="goals-progress-ring">
                <CircularProgressbar
                  value={percentage}
                  text={`${percentage}%`}
                  styles={buildStyles(progressRingStyles)}
                />
              </div>

              <div className="goals-progress-ring">
                <CircularProgressbar
                  value={percentage}
                  text={`${percentage}%`}
                  styles={buildStyles(progressRingStyles)}
                />
              </div>

              <div className="goals-progress-ring">
                <CircularProgressbar
                  value={percentage}
                  text={`${percentage}%`}
                  styles={buildStyles(progressRingStyles)}
                />
              </div>
            </div>
            <div className="goals-progress-labels">
              <p>Goal</p>
              <p>Goal</p>
              <p>Goal</p>
            </div>
          </div>
        </div>
        <div className="history-container"></div>
      </div>
      <div className="plans-container"></div>
    </div>
  );
}

export default Profile;
