import "./Home.css";
import homePageImg from "../../assets/home-page-img.jpg";

function Home() {
  return (
    <div>
      <img
        className="home-page-img"
        src={homePageImg}
        alt="Man lifting barbell"
      />
    </div>
  );
}

export default Home;
