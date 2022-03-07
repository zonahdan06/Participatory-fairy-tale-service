import "./Main.css";
import { useNavigate } from "react-router-dom";
const Main = () => {
  const navigate = useNavigate();
  return (
    <div className="Main">
      <div className="leftBook">
        <div className="header">
          <h1>책을 골라보아요</h1>
        </div>
        <div className="bookSelect">
          <div
            className="book"
            onClick={() => {
              navigate("/Book1");
            }}
          >
            <img
              className="book_img"
              alt="book"
              src={require("../img/book1.png")}
            />
            <div className="bookTitle">
              <h2>토끼와 거북이</h2>
            </div>
          </div>
          <div className="book">
            <img
              className="book_img"
              alt="book1"
              src={require("../img/book2.png")}
            />
            <div className="bookTitle">
              <h2>아기돼지 삼형제</h2>
            </div>
          </div>
          <div className="book">
            <img
              className="book_img"
              alt="book"
              src={require("../img/book1.png")}
            />
            <div className="bookTitle">
              <h2>토끼와 거북이</h2>
            </div>
          </div>
          <div className="book">
            <img
              className="book_img"
              alt="book1"
              src={require("../img/book2.png")}
            />
            <div className="bookTitle">
              <h2>아기돼지 삼형제</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="line"></div>
      <div className="rightBook">
        <div className="header"></div>
        <div className="bookSelect">
          <div className="book">
            <img
              className="book_img"
              alt="book"
              src={require("../img/book1.png")}
            />
            <div className="bookTitle">
              <h2>토끼와 거북이</h2>
            </div>
          </div>
          <div className="book">
            <img
              className="book_img"
              alt="book1"
              src={require("../img/book2.png")}
            />
            <div className="bookTitle">
              <h2>아기돼지 삼형제</h2>
            </div>
          </div>
          <div className="book">
            <img
              className="book_img"
              alt="book"
              src={require("../img/book1.png")}
            />
            <div className="bookTitle">
              <h2>토끼와 거북이</h2>
            </div>
          </div>
          <div className="book">
            <img
              className="book_img"
              alt="book1"
              src={require("../img/book2.png")}
            />
            <div className="bookTitle">
              <h2>아기돼지 삼형제</h2>
            </div>
          </div>
        </div>
        <div className="next">
          <div className="pageCount">1 / 4</div>
          <div className="next_bt">
            <img alt="next_bt" src={require("../img/nextButton.png")} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Main;
