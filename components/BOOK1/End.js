import "../css/B1Q1.css";
import { useNavigate } from "react-router-dom";
const End = () => {
  const navigate = useNavigate();
  return (
    <div className="B1Q1">
      <div>
        <div className="exp">동화가 끝났습니다.</div>
        <div className="Content">
          <div className="btn_div">
            <button
              className="btn1"
              onClick={() => {
                navigate("/Book1");
              }}
            >
              다시 하기
            </button>
          </div>
          <div className="btn_div">
            <button
              className="btn2"
              onClick={() => {
                navigate("/main");
              }}
            >
              종료하기
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default End;
