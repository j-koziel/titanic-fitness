import "./WorkoutItem.css";

function WorkoutItem({ exercise, openInfoModal }) {
  return (
    <div className="workout" onClick={() => openInfoModal(true)}>
      <p className="workout-title">{exercise.name}</p>
      <p className="workout-reps">{exercise.difficulty}</p>
    </div>
  );
}

export default WorkoutItem;
