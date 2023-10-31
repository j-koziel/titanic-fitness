function WorkoutItem({ exercise }) {
  return (
    <div className="workout">
      <p className="workout-title">{exercise.name}</p>
      <p className="workout-muscle-group">{exercise.muscle}</p>
      <p className="workout-reps">{exercise.difficulty}</p>
    </div>
  );
}

export default WorkoutItem;
