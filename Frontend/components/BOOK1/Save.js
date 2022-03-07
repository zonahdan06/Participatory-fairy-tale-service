import "../css/B1Q1.css";
import { useNavigate } from "react-router-dom";
const Save = () => {
  const navigate = useNavigate();
  return (
    <div className="B1Q1">
      <div>
        <div className="quit" onClick={() => navigate(-1)}>
          <img
            className="quit_img"
            alt="quit"
            src={require("../img/quit.png")}
          />
        </div>
        <div className="exp">종료하시겠습니까?</div>
        <div className="Content">
          <div className="btn_div">
            <button
              className="btn1"
              onClick={() => {
                navigate("/main");
              }}
            >
              저장하고 종료하기
            </button>
          </div>
          <div className="btn_div">
            <button
              className="btn2"
              onClick={() => {
                navigate("/main");
              }}
            >
              그냥 종료하기
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Save;
