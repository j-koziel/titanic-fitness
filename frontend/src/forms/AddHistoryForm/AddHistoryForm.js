import "./AddHistoryForm.css";
import { useState } from "react";

function AddHistoryForm({ updateFn }) {
  const [newHistoryItem, setNewHistoryItem] = useState({});

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        updateFn(newHistoryItem);
      }}
      className="add-history-form"
    >
      <label htmlFor="history-title">What did you do?</label>
      <input
        type="text"
        id="history-title"
        value={newHistoryItem["title"]}
        onChange={(e) => {
          setNewHistoryItem({ ...newHistoryItem, title: e.target.value });
        }}
        placeholder="Activity"
        autoFocus
      />
      <label htmlFor="history-duration">How long?</label>
      <input
        type="number"
        id="history-duration"
        value={newHistoryItem["duration"]}
        onChange={(e) => {
          setNewHistoryItem({ ...newHistoryItem, duration: e.target.value });
        }}
        placeholder="Duration"
      />
      <label htmlFor="history-date">When?</label>
      <input
        type="date"
        id="history-date"
        value={newHistoryItem["date"]}
        onChange={(e) => {
          setNewHistoryItem({ ...newHistoryItem, date: e.target.value });
        }}
      />
      <button type="submit">ADD</button>
    </form>
  );
}

export default AddHistoryForm;
