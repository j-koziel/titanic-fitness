import "./Home.css";
import homePageImg from "../../assets/home-page-img.jpg";
import YoutubeLogo from "../../assets/youtube_social_icon_red.png";
import InstagramLogo from "../../assets/Instagram_Glyph_Gradient.png";
import FacebookLogo from "../../assets/Facebook_Logo_Primary.png";
import SnapchatLogo from "../../assets/Snapchat App Icon.png";
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
          <Button text="Register" path="/login?formState=register" />
        </div>
        <div className="information-box">
          <h2>Log In</h2>
          <p>
            Log in to your account to get back on track to reaching your goals
          </p>
          <Button text="Log In" path="/login?formState=login" />
        </div>
      </div>
      <div className="social-media-container">
        <h1 className="socials-header">Our Socials</h1>
        <div className="logos-container">
          <img className="youtube" src={YoutubeLogo} alt="Youtube Logo" />

          <img
            className="instagram"
            src={InstagramLogo}
            alt="Instagram Logo"
            height="100px"
            width="100px"
          />

          <img
            className="facebook"
            src={FacebookLogo}
            alt="Facebook logo"
            height="100px"
            width="100px"
          />
          <img
            className="snapchat"
            src={SnapchatLogo}
            alt="Snapchat logo"
            height="100px"
            width="100px"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
