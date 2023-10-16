import "./Profile.css";
import ProfileButton from "../../components/ProfileButton/ProfileButton";
import Avatar from "../../assets/avatar.jpg";

import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

function Profile() {
  const dailyPercentage = 50;
  const caloriePercentage = 23;
  const weightPercentage = 74;

  const progressRingStyles = {
    trailColor: "#00536F",
    pathColor: "#00A7E1",
    textColor: "#FFF",
  };

  return (
    <div className="profile-page-container">
      <div className="info-history-container">
        <div className="user-info-container">
          <h2 className="welcome-message">Welcome back, Jonathan 👋</h2>
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
                  value={dailyPercentage}
                  text={`${dailyPercentage}%`}
                  styles={buildStyles(progressRingStyles)}
                />
                <p>Daily Streak</p>
              </div>

              <div className="goals-progress-ring">
                <CircularProgressbar
                  value={caloriePercentage}
                  text={`${caloriePercentage}%`}
                  styles={buildStyles(progressRingStyles)}
                />
                <p>Calories Lost</p>
              </div>

              <div className="goals-progress-ring">
                <CircularProgressbar
                  value={weightPercentage}
                  text={`${weightPercentage}%`}
                  styles={buildStyles(progressRingStyles)}
                />
                <p>Weight</p>
              </div>
            </div>
          </div>
        </div>
        <div className="history-container">
          <h2>Your History ⌚:</h2>
          <div className="history-items">
            <div className="history-item">
              <div>
                <p>Weight Training</p>
                <p>0:30</p>
              </div>
              <div>13/10/2023</div>
            </div>
            <div className="history-item">
              <div>
                <p>Weight Training</p>
                <p>0:30</p>
              </div>
              <div>13/10/2023</div>
            </div>
            <div className="history-item">
              <div>
                <p>Weight Training</p>
                <p>0:30</p>
              </div>
              <div>13/10/2023</div>
            </div>
            <div className="history-item">
              <div>
                <p>Weight Training</p>
                <p>0:30</p>
              </div>
              <div>13/10/2023</div>
            </div>
            <div className="history-item">
              <div>
                <p>Weight Training</p>
                <p>0:30</p>
              </div>
              <div>13/10/2023</div>
            </div>
            <div className="history-item">
              <div>
                <p>Weight Training</p>
                <p>0:30</p>
              </div>
              <div>13/10/2023</div>
            </div>
            <div className="history-item">
              <div>
                <p>Weight Training</p>
                <p>0:30</p>
              </div>
              <div>13/10/2023</div>
            </div>
            <div className="history-item">
              <div>
                <p>Weight Training</p>
                <p>0:30</p>
              </div>
              <div>13/10/2023</div>
            </div>
          </div>
        </div>
      </div>
      <div className="plans-container">
        <div className="nutrition-container">
          <h2>Nutrition</h2>
          <div className="nutrition-plan">
            <p>Plan Length: 5 weeks</p>
            <p>Goal weight: 70kg</p>
            <h3>Daily Meals: </h3>
            <div className="meals">
              <div className="meal">
                <p className="meal-time">Breakfast</p>
                <p className="meal-title">Some meal</p>
              </div>
              <div className="meal">
                <p className="meal-time">Lunch</p>
                <p className="meal-title">Some other meal</p>
              </div>
              <div className="meal">
                <p className="meal-time">Dinner</p>
                <p className="meal-title">Some final meal</p>
              </div>
            </div>
          </div>
        </div>
        <div className="workouts-container">
          <h2>Workouts</h2>
          <div className="workout-plan">
            <p>Plan length: 5 weeks</p>
            <p>Plan difficulty: Easy</p>
            <h3>Routines:</h3>
            <div className="workouts">
              <div className="workout">
                <p className="workout-muscle-group">chest</p>
                <p className="workout-title">push ups</p>
                <p className="workout-reps">Reps: 10</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
