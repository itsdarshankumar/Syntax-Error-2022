import React from "react";
import { useState, useEffect } from "react";
import Axios from "axios";
import "../components/css/loginpage.css";
import { useNavigate, useParams } from "react-router-dom";

const Leftlogin = require("../components/img/leftlogin.png");

function Img() {
  return <img src={Leftlogin} className="login--img" alt="img not loading" />;
}

export default function LoginPage() {
  let navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");

  const trylogin = () => {
    Axios.post("http://localhost:4000/", {
      reqemail: email,
      reqpassword: pwd,
    }).then((res) => {
      if (res.data.status) {
        navigate("/dashboard");
      } else {
        navigate("/");
      }
    });
  };

  React.useEffect(() => {
    console.log("start");
  }, []);

  return (
    <div className="login">
      <div className="login--left">
        <Img />
      </div>
      <div className="login--right">
        <h3 className="login--title">Log In</h3>
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          onChange={(event) => setEmail(event.target.value)}
        />
        <input
          type="password"
          name="password"
          placeholder="Enter your password"
          onChange={(event) => setPwd(event.target.value)}
        />
        <button
          onClick={() => {
            trylogin();
          }}
        >
          Log In
        </button>
        <p>
          Don't have an account?
          <a
            onClick={() => {
              navigate("/signup");
            }}
          >
            Create One
          </a>
        </p>
      </div>
    </div>
  );
}
