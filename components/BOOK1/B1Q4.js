import "../css/B1Q1.css";
import { useNavigate } from "react-router-dom";
const B1Q4 = () => {
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
            토끼가 낮잠을 자는 사이, 거북이는 도착선에 가까워지고 말았어요.{" "}
            <br />
            하지만 아직 토끼에게도 기회가 있답니다. <br />
            아래 그림을 보고 동작을 따라해 선택해보세요! <br />
            <br />
          </p>
          <div className="paint">
            <img className="img2" alt="book" src={require("../img/x.png")} />
            <div>포기한다.</div>
          </div>
          <div className="paint">
            <img className="img2" alt="book" src={require("../img/o.png")} />
            <div>반칙한다.</div>
          </div>
          <div className="cam2"></div>
        </div>
      </div>
    </div>
  );
};
export default B1Q4;
