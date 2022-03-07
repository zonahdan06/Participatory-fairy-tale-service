import "../css/B1Q2.css";
import { useNavigate } from "react-router-dom";
const B1Q8 = () => {
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
        <div className="exp"> 준비운동을 해요!</div>
        <div className="Content">
          <p>
            경주 전 몸을 풀기 위해 준비 운동을 하려고 해요. <br />
            성공하지 못한다면 거북이가 나중에 힘들지도 몰라요. <br />
            거북이가 되어 열심히 준비운동으로 ----을 해볼까요?
          </p>
          <div className="cam"></div>
          <div className="ex"></div>

          <div className="count">7회</div>
        </div>
      </div>
    </div>
  );
};
export default B1Q8;
