import "./components/css/App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUpPage  from "./Pages/signup.js";
import  LoginPage from "./Pages/loginpage.js";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
      </Routes>
    </Router>
  );
}

export default App;
