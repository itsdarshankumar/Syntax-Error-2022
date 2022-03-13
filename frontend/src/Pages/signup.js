import "../components/css/signup.css";
import React from "react";
import { useEffect, useState } from "react";
import Axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
const Leftlogin = require("../components/img/leftlogin.png");

function Img() {
  return <img src={Leftlogin} className="login--img" alt="img not loading" />;
}

export default function SignUpPage() {
  let navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const [cnfpwd, setConfirmpassword] = useState("");

  const trysignup = () => {
    Axios.post("http://localhost:4000/signup", {
      username: username,
      password: pwd,
      password_repeat: cnfpwd,
      email_id: email,
    }).then((res) => {
      if (res.data.status) {
        navigate("/");
      } else {
        navigate("/signup");
      }
    });
  };

  return (
    <div className="login">
      <div className="login--left">
        <Img />
      </div>
      <div className="login--right">
        <h3>Sign Up</h3>
        <input
          type="text"
          placeholder="Enter your username"
          onChange={(event) => setUsername(event.target.value)}
        />
        <input
          type="text"
          placeholder="Enter your e-mail"
          onChange={(event) => setEmail(event.target.value)}
        />
        <input
          type="password"
          placeholder="Enter your password"
          onChange={(event) => setPwd(event.target.value)}
        />
        <input
          type="password"
          placeholder="Confirm your password"
          onChange={(event) => setConfirmpassword(event.target.value)}
        />
        <button
          onClick={() => {
            trysignup();
          }}
        >
          Create
        </button>
      </div>
    </div>
  );
}
