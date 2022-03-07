import "../css/B1Q2.css";
import { useNavigate } from "react-router-dom";
const B1Q7 = () => {
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
        <div className="exp"> 동작을 따라해요!</div>
        <div className="Content">
          <p>
            포기하지 않은 토끼는 빨리 다리에 난 쥐를 해결하고 다시 달리기를
            시작하려고 해요. <br />
            그러려면 약간의 유연성이 필요한 다음의 스트레칭 동작을 해내야
            한답니다. <br />
            다음 자세를 5초간 유지해주세요!
          </p>
          <div className="cam"></div>
          <div className="ex"></div>

          <div className="count">성공</div>
        </div>
      </div>
    </div>
  );
};
export default B1Q7;
