import "./MealInfo.css";
import Modal from "react-modal";
import Button from "../Button/Button";
import MealItem from "../MealItem/MealItem";
import { useState } from "react";

const modalStyles = {
  overlay: {
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
    textAlign: "center",
  },
};

function MealInfo({ meal, i, closeModal, updateFn }) {
  const [mealInfoModalIsOpen, setMealInfoModalIsOpen] = useState(false);

  return (
    <div key={i}>
      <MealItem meal={meal} openInfoModal={setMealInfoModalIsOpen} />
      <Modal
        isOpen={mealInfoModalIsOpen}
        onRequestClose={() => {
          closeModal(setMealInfoModalIsOpen);
        }}
        contentLabel="Workouts Info Modal"
        style={modalStyles}
        closeTimeoutMS={700}
      >
        <div className="meal-info">
          <h2>{meal.title}</h2>
          <h3>{meal.servings}</h3>
          <p className="meal-instructions">{meal.instructions}</p>
          <p>Ingredients: {meal.ingredients}</p>
          <Button
            text={"ADD"}
            onClickFn={() => {
              updateFn(meal);
            }}
          />
        </div>
        <div className="meal-vid">
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

export default MealInfo;
