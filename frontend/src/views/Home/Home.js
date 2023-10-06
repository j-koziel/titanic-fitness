import "./Home.css";
import homePageImg from "../../assets/home-page-img.jpg";

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
          <h2>Heading</h2>
          <p>Text</p>
          <button>Click me</button>
        </div>
        <div className="information-box">
          <h2>Heading</h2>
          <p>Text</p>
          <button>Click me</button>
        </div>
        <div className="information-box">
          <h2>Heading</h2>
          <p>Text</p>
          <button>Click me</button>
        </div>
      </div>
    </div>
  );
}

export default Home;
