import "../css/B1Q1.css";
import { useNavigate } from "react-router-dom";
const B1Q1 = () => {
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
        <div className="exp">주인공을 골라보세요!</div>
        <div className="Content">
          <p>
            토끼와 거북이가 달리기 경주를 하기로 했어요. <br />
            여러분은 토끼와 거북이 중 한 친구의 몸에 들어가 경주를 이끌 수
            있답니다! <br />
            누구의 몸으로 들어갈까요?
            <br />
            <br />
            아래와 같이 말해보세요!
          </p>
          <div className="paint1">
            <img
              className="img"
              alt="book"
              src={require("../img/rabbit.png")}
            />
            <div className="text_r">토끼는 "빵빵"</div>
          </div>
          <div className="paint2">
            <img
              className="img"
              alt="book"
              src={require("../img/turtle.png")}
            />
            <div className="text_t">거북이는 "콩콩"</div>
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
export default B1Q1;
