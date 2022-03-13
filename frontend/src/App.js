import "./components/css/App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUpPage  from "./Pages/signup.js";
import  LoginPage from "./Pages/loginpage.js";
import Dashboard from "./Pages/dashboard.js";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/dashboard/:email_id" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
