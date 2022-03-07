import "../css/B1Q2.css";
import { useNavigate } from "react-router-dom";
const B1Q5 = () => {
  const navigate = useNavigate();
  return (
    <div className="B1Q2">
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
        <div className="exp"> 표정을 지어보아요!</div>
        <div className="Content">
          <p>
            경주에서 진 토끼가 거북이에게 해주고 싶은 말이 있다고 해요.
            <br />
            말에 맞는 표정을 짓는 것은 매우 중요하답니다. <br />
            여러분은 토끼가 어떤 기분일 것 같나요? <br />
            토끼의 기분을 표정으로 표현해주세요! <br />
            여러분이 짓는 표정에 따라 토끼가 거북이에게 건네는 말이
            달라질거예요! <br />
          </p>
          <div className="cam3"></div>

          <div className="count">기쁨</div>
        </div>
      </div>
    </div>
  );
};
export default B1Q5;
