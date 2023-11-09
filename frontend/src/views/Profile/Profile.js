import "./Profile.css";
import ProfileButton from "../../components/ProfileButton/ProfileButton";
import Avatar from "../../assets/avatar.jpg";
import Modal from "react-modal";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { useState, useContext } from "react";
import axios from "axios";
import Error from "../../components/Error/Error";
import WorkoutInfo from "../../components/WorkoutInfo/WorkoutInfo";
import RingLoader from "react-spinners/RingLoader";
import { AuthContext } from "../../components/AuthContext";
import UpdateGoalForm from "../../forms/UpdateGoalForm/UpdateGoalForm";
import AddHistoryForm from "../../forms/AddHistoryForm/AddHistoryForm";
import MealInfo from "../../components/MealInfo/MealInfo";

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

  const { user, setUser } = useContext(AuthContext);
  const dailyStreakGoal = [
    user["dailyStreakGoal"][0],
    user["dailyStreakGoal"][1],
  ];
  const caloriesGoal = [user["calorieGoal"][0], user["calorieGoal"][1]];
  const weightGoal = [user["weightGoal"][0], user["weightGoal"][1]];

  const [workoutModalIsOpen, setWorkoutModalIsOpen] = useState(false);
  const [addWorkoutModalIsOpen, setAddWorkoutModalIsOpen] = useState(false);
  const [addMealModalIsOpen, setAddMealModalIsOpen] = useState(false);
  const [dailyStreakGoalModalIsOpen, setDailyStreakGoalModalIsOpen] =
    useState(false);
  const [calorieGoalModalIsOpen, setCalorieGoalModalIsOpen] = useState(false);
  const [weightGoalModalIsOpen, setWeightGoalModalIsOpen] = useState(false);
  const [addHistoryModalIsOpen, setAddHistoryModalIsOpen] = useState(false);

  const [workoutsQuery, setWorkoutsQuery] = useState("");
  const [workoutsData, setWorkoutsData] = useState([]);
  const [recipeQuery, setRecipeQuery] = useState("");
  const [recipeData, setRecipeData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  function openModal(setModalStateFn) {
    setModalStateFn(true);
  }
  function closeModal(setModalStateFn) {
    setModalStateFn(false);
  }

  function updateUser(fieldToUpdate, valueToUpdateWith, index = 0) {
    user[fieldToUpdate][index] = valueToUpdateWith;
    setUser({ ...user });
  }

  function addWorkout(workoutToAdd) {
    user["workouts"].push(workoutToAdd);
    setUser({ ...user });
  }

  function addMeal(mealToAdd) {
    user["meals"].push(mealToAdd);
    setUser({ ...user });
  }

  function addHistory(newHistoryItem) {
    user["history"].push(newHistoryItem);
    setUser({ ...user });
  }

  return (
    <div className="profile-page-container">
      <div className="info-history-container">
        <div className="user-info-container">
          <h2 className="welcome-message">
            Welcome back, {user["firstName"]} 👋
          </h2>
          <div className="profile-nav">
            <img src={Avatar} alt="You" className="profile-photo" />
            <ProfileButton
              buttonText="SETTINGS"
              navigateTo="/profile/settings"
            />
            <ProfileButton
              buttonText="SUBSCRIPTION"
              navigateTo="/subscription"
            />
            <ProfileButton buttonText="SHARE" />
          </div>
          <h2>Your Goals 📈:</h2>
          <div className="goals-progress-container">
            <div className="goals-progress-rings">
              <button
                onClick={(e) => {
                  openModal(setDailyStreakGoalModalIsOpen);
                }}
                style={{
                  all: "unset",
                  cursor: "pointer",
                }}
              >
                <div className="goals-progress-ring">
                  <CircularProgressbar
                    value={(dailyStreakGoal[0] / dailyStreakGoal[1]) * 100}
                    text={`${dailyStreakGoal[0]}/${dailyStreakGoal[1]}`}
                    styles={buildStyles(progressRingStyles)}
                  />
                  <p>Daily Streak</p>
                </div>
              </button>
              <Modal
                isOpen={dailyStreakGoalModalIsOpen}
                onRequestClose={() => closeModal(setDailyStreakGoalModalIsOpen)}
                contentLabel="Daily Streak Goal Modal"
                style={modalStyles}
                closeTimeoutMS={700}
              >
                <UpdateGoalForm
                  updateFn={updateUser}
                  goalToUpdate="dailyStreakGoal"
                  setModalIsOpenState={setDailyStreakGoalModalIsOpen}
                />
              </Modal>

              <button
                onClick={(e) => {
                  openModal(setCalorieGoalModalIsOpen);
                }}
                style={{
                  all: "unset",
                  cursor: "pointer",
                }}
              >
                <div className="goals-progress-ring">
                  <CircularProgressbar
                    value={(caloriesGoal[0] / caloriesGoal[1]) * 100}
                    text={`${caloriesGoal[0]}/${caloriesGoal[1]}`}
                    styles={buildStyles(progressRingStyles)}
                  />

                  <p>Calories Burnt</p>
                </div>
              </button>
              <Modal
                isOpen={calorieGoalModalIsOpen}
                onRequestClose={() => closeModal(setCalorieGoalModalIsOpen)}
                contentLabel="Calories Goal Modal"
                style={modalStyles}
                closeTimeoutMS={700}
              >
                <UpdateGoalForm
                  updateFn={updateUser}
                  goalToUpdate="calorieGoal"
                  setModalIsOpenState={setCalorieGoalModalIsOpen}
                />
              </Modal>

              <button
                onClick={(e) => {
                  openModal(setWeightGoalModalIsOpen);
                }}
                style={{
                  all: "unset",
                  cursor: "pointer",
                }}
              >
                <div className="goals-progress-ring">
                  <CircularProgressbar
                    value={(weightGoal[0] / weightGoal[1]) * 100}
                    text={`${weightGoal[0]}/${weightGoal[1]}`}
                    styles={buildStyles(progressRingStyles)}
                  />
                  <p>Weight</p>
                </div>
              </button>
              <Modal
                isOpen={weightGoalModalIsOpen}
                onRequestClose={() => closeModal(setWeightGoalModalIsOpen)}
                contentLabel="Weight Goal Modal"
                style={modalStyles}
                closeTimeoutMS={700}
              >
                <UpdateGoalForm
                  updateFn={updateUser}
                  goalToUpdate="weightGoal"
                  setModalIsOpenState={setWeightGoalModalIsOpen}
                />
              </Modal>
            </div>
          </div>
        </div>
        <div className="history-container">
          <div className="history-container-header">
            <button onClick={() => openModal(setAddHistoryModalIsOpen)}>
              ADD
            </button>
            <h2>Your History ⌚:</h2>
          </div>
          {!user["history"].length ? null : (
            <div className="history-items">
              {user["history"].map((historyItem) => {
                return (
                  <div className="history-item">
                    <div>
                      <p>{historyItem["title"]}</p>
                      <p>{historyItem["duration"]} minutes</p>
                    </div>
                    <div>{historyItem["date"]}</div>
                  </div>
                );
              })}
            </div>
          )}
          <Modal
            isOpen={addHistoryModalIsOpen}
            onRequestClose={() => closeModal(setAddHistoryModalIsOpen)}
            contentLabel="Add History Modal"
            style={modalStyles}
            closeTimeoutMS={700}
          >
            <AddHistoryForm
              updateFn={addHistory}
              setHistoryModalIsOpen={setAddHistoryModalIsOpen}
            />
          </Modal>
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
              onAfterClose={() => {
                setRecipeData([]);
                setRecipeQuery("");
                setError(null);
              }}
              contentLabel="Example Modal"
              style={modalStyles}
              closeTimeoutMS={700}
            >
              <div className="add-new-meal">
                <form
                  className="add-new-meal-form"
                  onSubmit={(e) => {
                    e.preventDefault();
                    setIsLoading(true);
                    setRecipeData([]);
                    axios
                      .get(
                        `https://api.api-ninjas.com/v1/recipe?query=${recipeQuery}`,
                        {
                          headers: {
                            "X-Api-Key": process.env.REACT_APP_API_NINJAS_KEY,
                          },
                        }
                      )
                      .then((res) => {
                        setRecipeData([...res.data]);
                      })
                      .catch((err) => {
                        setError(err.message);
                      })
                      .finally(() => {
                        setIsLoading(false);
                      });
                  }}
                >
                  <input
                    type="text"
                    placeholder="Search for a meal..."
                    required
                    autoFocus
                    onChange={(e) => {
                      setRecipeQuery(e.target.value);
                    }}
                    value={recipeQuery}
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
                  <div className="recipe-data">
                    {!isLoading && recipeData.length ? (
                      recipeData.map((meal, i) => (
                        <MealInfo
                          meal={meal}
                          i={i}
                          closeModal={closeModal}
                          updateFn={addMeal}
                        />
                      ))
                    ) : error ? (
                      <Error message={error.message} />
                    ) : null}
                  </div>
                )}
              </div>
            </Modal>
            <h3>Daily Meals: </h3>
            <div className="user-meals">
              {user["meals"].map((meal) => (
                <div className="user-meal">
                  <p className="user-meal-servings">{meal.servings}</p>
                  <p className="meal-title">{meal.title}</p>
                </div>
              ))}
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
                          setError({ message: "No workouts found" });
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
                          updateFn={addWorkout}
                        />
                      ))
                    ) : error ? (
                      <Error message={error.message} />
                    ) : null}
                  </div>
                )}
              </div>
            </Modal>
            <h3>Routines:</h3>
            <div className="workouts">
              {user["workouts"].map((workout) => {
                return (
                  <div>
                    <div
                      className="user-workout"
                      onClick={() => openModal(setWorkoutModalIsOpen)}
                    >
                      <p className="user-workout-title">{workout.name}</p>
                      <p className="user-workout-reps">Reps: 10</p>
                    </div>
                    <Modal
                      isOpen={workoutModalIsOpen}
                      onRequestClose={() => closeModal(setWorkoutModalIsOpen)}
                      contentLabel="Example Modal"
                      style={modalStyles}
                      closeTimeoutMS={700}
                    >
                      <div className="user-workout-info">
                        <h2>{workout.muscle}</h2>
                        <h3>{workout.name}</h3>
                        <p>Reps: 10</p>
                        <p className="user-workout-instructions">
                          {workout.instructions}
                        </p>
                        <p>Difficulty: {workout.difficulty}</p>
                      </div>
                      <div className="user-workout-vid">
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
                );
              })}
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
