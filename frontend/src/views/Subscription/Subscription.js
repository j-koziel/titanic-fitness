import Button from "../../components/Button/Button";
import "./Subscription.css";

function Subscription() {
  return (
    <div className="subscription-page-container">
      <div className="subscription-option">
        <h2>Free</h2>
        <ul>
          <li>Access to some hand-picked workout/eating plans</li>
          <li>Access to some videos and digital content</li>
          <li>Set goals and track your progess</li>
        </ul>
        <Button text="REGISTER NOW" />
      </div>
      <div className="subscription-option">
        <h2>Paid</h2>
        <ul>
          <li>Everything in free plus</li>
          <li>Access to thousands of exercises</li>
          <li>Access to all the digital content provided by Titanic Fitness</li>
          <li>Sync your Apple Watch data</li>
        </ul>
        <h3>Only £4.99/month</h3>
        <Button text="SUBSCRIBE" />
      </div>
    </div>
  );
}

export default Subscription;
