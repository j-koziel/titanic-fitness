import "./Profile.css";
import ProfileButton from "../../components/ProfileButton/ProfileButton";
import Avatar from "../../assets/avatar.jpg";
import Modal from "react-modal";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { useState } from "react";
import axios from "axios";
import Error from "../../components/Error/Error";
import WorkoutInfo from "../../components/WorkoutInfo/WorkoutInfo";
import RingLoader from "react-spinners/RingLoader";

const modalStyles = {
  overlay: {
    backdropFilter: "blur(5px)",
    backgroundColor: "none",
  },
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "#00171f",
    color: "#fff",
    border: "none",
    borderRadius: "15px",
    height: "400px",
    width: "70%",
    boxShadow: "20px 20px 150px #000",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: "200px",
  },
};

function Profile() {
  const dailyPercentage = 50;
  const caloriePercentage = 23;
  const weightPercentage = 74;

  const progressRingStyles = {
    trailColor: "#00536F",
    pathColor: "#00A7E1",
    textColor: "#FFF",
  };

  const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "#00a7e1",
  };

  const [workoutModalIsOpen, setWorkoutModalIsOpen] = useState(false);
  const [addWorkoutModalIsOpen, setAddWorkoutModalIsOpen] = useState(false);
  const [addMealModalIsOpen, setAddMealModalIsOpen] = useState(false);
  // const [progressModalIsOpen, setProgressModalIsOpen] = useState(false);
  const [workoutsQuery, setWorkoutsQuery] = useState("");
  const [workoutsData, setWorkoutsData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  function openModal(setModalStateFn) {
    setModalStateFn(true);
  }
  function closeModal(setModalStateFn) {
    setModalStateFn(false);
  }

  return (
    <div className="profile-page-container">
      <div className="info-history-container">
        <div className="user-info-container">
          <h2 className="welcome-message">Welcome back, Jonathan 👋</h2>
          <div className="profile-nav">
            <img src={Avatar} alt="You" className="profile-photo" />
            <ProfileButton
              buttonText="SETTINGS"
              navigateTo="/profile/settings"
            />
            <ProfileButton buttonText="SUBSCRIPTION" />
            <ProfileButton buttonText="SHARE" />
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
                <p>Calories Burnt</p>
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
            <button
              className="add-meal-btn"
              onClick={() => openModal(setAddMealModalIsOpen)}
            >
              ADD A MEAL
            </button>
            <Modal
              isOpen={addMealModalIsOpen}
              onRequestClose={() => closeModal(setAddMealModalIsOpen)}
              contentLabel="Example Modal"
              style={modalStyles}
              closeTimeoutMS={700}
            >
              <div className="add-new-meal">
                <form
                  className="add-new-meal-form"
                  onSubmit={(e) => e.preventDefault()}
                >
                  <input
                    type="text"
                    placeholder="Search for a meal..."
                    required
                    autoFocus
                  />
                </form>
              </div>
            </Modal>
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
            <button
              className="add-workout-btn"
              onClick={() => openModal(setAddWorkoutModalIsOpen)}
            >
              ADD A WORKOUT
            </button>
            <Modal
              isOpen={addWorkoutModalIsOpen}
              onRequestClose={() => {
                closeModal(setAddWorkoutModalIsOpen);
              }}
              onAfterClose={() => {
                setWorkoutsData([]);
                setError(null);
              }}
              contentLabel="Workouts Search Modal"
              style={modalStyles}
              closeTimeoutMS={700}
            >
              <div className="add-new-workout">
                <form
                  className="add-new-workout-form"
                  onSubmit={(e) => {
                    e.preventDefault();
                    setIsLoading(true);
                    setWorkoutsData([]);
                    axios
                      .get(
                        "https://api.api-ninjas.com/v1/exercises?name=" +
                          workoutsQuery,
                        {
                          headers: {
                            "X-Api-Key": process.env.REACT_APP_API_NINJAS_KEY,
                          },
                        }
                      )
                      .then((res) => {
                        if (res.data.length) {
                          setWorkoutsData([...res.data]);
                        } else {
                          setError("No workouts found");
                        }
                      })
                      .catch((err) => setError(err))
                      .finally(() => {
                        setIsLoading(false);
                        setWorkoutsQuery("");
                      });
                  }}
                >
                  <input
                    type="text"
                    placeholder="Search for a workout..."
                    value={workoutsQuery}
                    onChange={(e) => setWorkoutsQuery(e.target.value)}
                    required
                    autoFocus
                  />
                </form>
                {isLoading ? (
                  <RingLoader
                    color="#00a7e1"
                    loading={isLoading}
                    cssOverride={override}
                    size={50}
                    aria-label="Loading Spinner"
                    data-testid="loader"
                  />
                ) : (
                  <div className="workouts-data">
                    {!isLoading && workoutsData.length ? (
                      workoutsData.map((exercise, i) => (
                        <WorkoutInfo
                          exercise={exercise}
                          i={i}
                          closeModal={closeModal}
                        />
                      ))
                    ) : error ? (
                      <Error message={error} />
                    ) : null}
                  </div>
                )}
              </div>
            </Modal>
            <h3>Routines:</h3>
            <div className="workouts">
              <div
                className="workout"
                onClick={() => openModal(setWorkoutModalIsOpen)}
              >
                <p className="workout-title">push ups</p>
                <p className="workout-muscle-group">chest</p>
                <p className="workout-reps">Reps: 10</p>
              </div>
              <Modal
                isOpen={workoutModalIsOpen}
                onRequestClose={() => closeModal(setWorkoutModalIsOpen)}
                contentLabel="Example Modal"
                style={modalStyles}
                closeTimeoutMS={700}
              >
                <div className="workout-info">
                  <h2>Chest</h2>
                  <h3>Push ups</h3>
                  <p>Reps: 10</p>
                  <p className="workout-instructions">
                    With your legs extended back, place the hands below the
                    shoulders, slightly wider than shoulder-width apart. Start
                    bending your elbows and lower your chest until it's just
                    above the floor. Push back to the starting position. A
                    1-second push, 1-second pause, 2-second down count is ideal.
                    Repeat.
                  </p>
                  <p>Difficulty: easy</p>
                </div>
                <div className="workout-vid">
                  <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/IODxDxX7oi4?si=DZd6z3-fAC_5aXsW"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen
                    style={{ borderRadius: "15px" }}
                  ></iframe>
                </div>
              </Modal>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

//   const [
//     workoutInfoModalIsOpen,
//     setWorkoutInfoModalIsOpen,
//   ] = useState(false);

//   return (
//     <div key={i}>
//       <WorkoutItem
//         exercise={exercise}
//         openInfoModal={setWorkoutInfoModalIsOpen}
//       />
//       <Modal
//         isOpen={workoutInfoModalIsOpen}
//         onRequestClose={() => {
//           closeModal(setWorkoutInfoModalIsOpen);
//         }}
//         contentLabel="Workouts Info Modal"
//         style={modalStyles}
//         closeTimeoutMS={700}
//       >
//         <div className="workout-info">
//           <h2>{exercise.name}</h2>
//           <h3>{exercise.muscle}</h3>
//           <p>Reps: 10</p>
//           <p className="workout-instructions">
//             {exercise.instructions}
//           </p>
//           <p>Difficulty: {exercise.difficulty}</p>
//           <button>ADD</button>
//         </div>
//         <div className="workout-vid">
//           <iframe
//             width="560"
//             height="315"
//             src="https://www.youtube.com/embed/IODxDxX7oi4?si=DZd6z3-fAC_5aXsW"
//             title="YouTube video player"
//             frameborder="0"
//             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
//             allowfullscreen
//             style={{ borderRadius: "15px" }}
//           ></iframe>
//         </div>
//       </Modal>
//     </div>
//   );
// })

export default Profile;
