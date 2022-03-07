import "../css/B1Q1.css";
import { useNavigate } from "react-router-dom";
const B1Q3 = () => {
  const navigate = useNavigate();
  return (
    <div className="B1Q1">
      <div>
        <div
          className="quit"
          onClick={() => {
            navigate("/Save");
          }}
        >
          <img
            className="quit_img"
            alt="quit"
            src={require("../img/quit.png")}
          />
        </div>
        <div className="exp">빵빵 or 콩콩 중에 하나를 말해봐요!</div>
        <div className="Content">
          <p>
            토끼는 잠시 쉬어가고 싶다는 생각이 들었어요. <br />
            나무 밑에서 잠시 쉬어갈까요? <br />
            <br />
            아래와 같이 말해보세요!
          </p>
          <div className="paint1">
            <img
              className="img"
              alt="book"
              src={require("../img/rabbit.png")}
            />
            <div className="text_r">쉬었다가면 "빵빵"</div>
          </div>
          <div className="paint2">
            <img
              className="img"
              alt="book"
              src={require("../img/turtle.png")}
            />
            <div className="text_t">쉬지않는다면 "콩콩"</div>
          </div>
          <div>
            <img
              className="micro"
              alt="micro"
              src={require("../img/micro.png")}
            />
          </div>
          <div className="answer">콩콩</div>
        </div>
      </div>
    </div>
  );
};
export default B1Q3;
