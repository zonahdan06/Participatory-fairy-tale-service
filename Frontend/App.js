import "./App.css";
import Home from "./components/HomePage/Home";
import Main from "./components/MainPage/Main";
import Login from "./components/LoginPage/Login";
import Book1 from "./components/BOOK1/Book1";
import B1Q1 from "./components/BOOK1/B1Q1";
import B1Q2 from "./components/BOOK1/B1Q2";
import B1Q3 from "./components/BOOK1/B1Q3";
import B1Q4 from "./components/BOOK1/B1Q4";
import B1Q5 from "./components/BOOK1/B1Q5";
import B1Q6 from "./components/BOOK1/B1Q6";
import B1Q7 from "./components/BOOK1/B1Q7";
import B1Q8 from "./components/BOOK1/B1Q8";
import B1Q9 from "./components/BOOK1/B1Q9";
import B1Q10 from "./components/BOOK1/B1Q10";
import B1Q11 from "./components/BOOK1/B1Q11";
import B1Q12 from "./components/BOOK1/B1Q12";
import Save from "./components/BOOK1/Save";
import End from "./components/BOOK1/End";
import SignUp from "./components/SignUpPage/SignUp";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/main" element={<Main />} />
          <Route path="/login" element={<Login />} />
          <Route path="/Book1" element={<Book1 />} />
          <Route path="/B1Q1" element={<B1Q1 />} />
          <Route path="/B1Q2" element={<B1Q2 />} />
          <Route path="/B1Q3" element={<B1Q3 />} />
          <Route path="/B1Q4" element={<B1Q4 />} />
          <Route path="/B1Q5" element={<B1Q5 />} />
          <Route path="/B1Q6" element={<B1Q6 />} />
          <Route path="/B1Q7" element={<B1Q7 />} />
          <Route path="/B1Q8" element={<B1Q8 />} />
          <Route path="/B1Q9" element={<B1Q9 />} />
          <Route path="/B1Q10" element={<B1Q10 />} />
          <Route path="/B1Q11" element={<B1Q11 />} />
          <Route path="/B1Q12" element={<B1Q12 />} />
          <Route path="/save" element={<Save />} />
          <Route path="/end" element={<End />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
