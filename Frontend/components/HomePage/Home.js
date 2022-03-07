import "./Home.css";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="Home">
      <div>
        <img className="img1" alt="img1" src={require("../img/1.jpg")}></img>
      </div>

      <img className="logo" alt="logo" src={require("../img/logo.png")}></img>

      <div className="button_div">
        <button
          className="Start"
          onClick={() => {
            navigate("/login");
          }}
        >
          로그인
        </button>
      </div>
    </div>
  );
};

export default Home;
