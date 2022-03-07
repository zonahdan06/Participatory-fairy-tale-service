import "./Login.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginUser } from "../../_actions/user_action";
const Login = props => {
  const dispatch = useDispatch();
  const [Id, setId] = useState("");
  const [Password, setPassword] = useState("");

  const onIdHandler = event => {
    setId(event.currentTarget.value);
  };
  const onPwHandler = event => {
    setPassword(event.currentTarget.value);
  };

  const onSubmitHandler = event => {
    event.preventDefault();

    let body = {
      id: Id,
      password: Password
    };
    dispatch(loginUser(body)).then(response => {
      if (response.payload.loginSuccess) {
        navigate("/main");
      } else {
        alert("알 수 없는 사용자이거나 암호가 틀립니다.");
      }
    });
  };

  const navigate = useNavigate();
  return (
    <div className="Login">
      <div className="LoginForm">
        <form onSubmit={onSubmitHandler}>
          <div className="idDiv">
            <img className="id_img" alt="id" src={require("../img/id.png")} />
            <input
              type="id"
              value={Id}
              onChange={onIdHandler}
              className="id"
              name="id"
              size="20"
              placeholder="아이디"
            ></input>
          </div>
          <div className="pwDiv">
            <img className="pw_img" alt="pw" src={require("../img/pw.png")} />
            <input
              type="password"
              value={Password}
              onChange={onPwHandler}
              className="pw"
              name="pw"
              size="20"
              placeholder="비밀번호"
            ></input>
          </div>
          <div>
            <button className="bt_login">로그인</button>
          </div>
          <div className="text">
            <div className="text_bt">ID / PW 찾기</div>
            <div
              className="text_bt"
              onClick={() => {
                navigate("/signup");
              }}
            >
              회원가입
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Login;
