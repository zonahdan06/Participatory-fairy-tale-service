import "../css/B1Q1.css";
import { useNavigate } from "react-router-dom";
const B1Q11 = () => {
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
        <div className="exp">동작을 따라해보세요!</div>
        <div className="Content">
          <p>
            준비운동을 하지 않은 탓인지 거북이는 넘어지고 말았어요.
            <br />
            이대로 경기를 포기할까요? <br />
            아래 그림을 보고 동작을 따라해 선택해보세요! <br />
            <br />
          </p>
          <div className="paint">
            <img className="img2" alt="book" src={require("../img/x.png")} />
            <div>포기한다.</div>
          </div>
          <div className="paint">
            <img className="img2" alt="book" src={require("../img/o.png")} />
            <div>포기하지않는다.</div>
          </div>
          <div className="cam2"></div>
        </div>
      </div>
    </div>
  );
};
export default B1Q11;
