import { useState } from "react";

function UpdateGoalForm({ updateFn, goalToUpdate }) {
  const [newGoalState, setNewGoalState] = useState(0);

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
          updateFn(goalToUpdate, newGoalState, 0);
        }}
      >
        <input
          type="number"
          id="new-goal"
          value={newGoalState}
          onChange={(e) => setNewGoalState(e.target.value)}
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
          updateFn(goalToUpdate, newGoalState, 1);
        }}
      >
        <input
          type="number"
          id="new-goal"
          value={newGoalState}
          onChange={(e) => setNewGoalState(e.target.value)}
        />
        <label htmlFor="new-goal">Your new goal</label>
      </form>
    </div>
  );
}

export default UpdateGoalForm;
