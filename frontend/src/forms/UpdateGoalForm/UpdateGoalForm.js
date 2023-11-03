import { useState } from "react";

function UpdateGoalForm({ updateFn, goalToUpdate, setModalIsOpenState }) {
  const [newGoalProgress, setNewGoalProgress] = useState(0)
  const [newGoal, setNewGoal] = useState(0);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        margin: "20px",
      }}
    >
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
        }}
        onSubmit={(e) => {
          e.preventDefault();
          updateFn(goalToUpdate, newGoalProgress, 0);
          setModalIsOpenState(false)
        }}
      >
        <input
          type="number"
          id="new-goal"
          value={newGoalProgress}
          onChange={(e) => setNewGoalProgress(e.target.value)}
        />
        <label htmlFor="new-goal">Made any progress?</label>
      </form>
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
        }}
        onSubmit={(e) => {
          e.preventDefault();
          updateFn(goalToUpdate, newGoal, 1);
          setModalIsOpenState(false)
        }}
      >
        <input
          type="number"
          id="new-goal"
          value={newGoal}
          onChange={(e) => setNewGoal(e.target.value)}
        />
        <label htmlFor="new-goal">Your new goal</label>
      </form>
    </div>
  );
}

export default UpdateGoalForm;
