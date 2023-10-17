import "./Home.css";
import homePageImg from "../../assets/home-page-img.jpg";
import Button from "../../components/Button/Button";

function Home() {
  return (
    <div className="home-page-container">
      <img
        className="home-page-img"
        src={homePageImg}
        alt="Man lifting barbell"
      />

      <div className="information-boxes-container">
        <div className="information-box">
          <h2>Our Facilities</h2>
          <p>
            We have 4 great facilities located across West London. Come visit us
            today!
          </p>
          <Button text="Find A Gym" />
        </div>
        <div className="information-box">
          <h2>Our Plans</h2>
          <p>
            Our subscription service will provide you with <em>all</em> that you
            need to <strong>attain</strong> your fitness goals.
          </p>
          <Button text="Register" />
        </div>
        <div className="information-box">
          <h2>Log In</h2>
          <p>
            Log in to your account to get back on track to reaching your goals
          </p>
          <Button text="Log In" path="/login" />
        </div>
      </div>
    </div>
  );
}

export default Home;
