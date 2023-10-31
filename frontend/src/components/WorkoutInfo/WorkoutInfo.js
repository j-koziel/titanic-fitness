import Modal from "react-modal";
import WorkoutItem from "../WorkoutItem/WorkoutItem";
import Button from "../Button/Button";
import { useState } from "react";

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
    height: "fit-content",
    width: "70%",
    boxShadow: "20px 20px 150px #000",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: "200px",
  },
};

function WorkoutInfo({ exercise, i, closeModal }) {
  const [workoutInfoModalIsOpen, setWorkoutInfoModalIsOpen] = useState(false);

  return (
    <div key={i}>
      <WorkoutItem
        exercise={exercise}
        openInfoModal={setWorkoutInfoModalIsOpen}
      />
      <Modal
        isOpen={workoutInfoModalIsOpen}
        onRequestClose={() => {
          closeModal(setWorkoutInfoModalIsOpen);
        }}
        contentLabel="Workouts Info Modal"
        style={modalStyles}
        closeTimeoutMS={700}
      >
        <div className="workout-info">
          <h2>{exercise.name}</h2>
          <h3>{exercise.muscle}</h3>
          <p>Reps: 10</p>
          <p className="workout-instructions">{exercise.instructions}</p>
          <p>Difficulty: {exercise.difficulty}</p>
          <Button text={"ADD"} />
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
  );
}

export default WorkoutInfo;
