import React from "react";
import "../components/css/dashboard.css";
import Axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
const Eye = require("../components/img/eye.jpg");
const Friends = require("../components/img/friends.jpg");
const Layout = require("../components/img/layout.jpg");
const Logout = require("../components/img/logout.jpg");

function Img1() {
  return <img src={Friends} className="dash--img1" alt="img-not-loading" />;
}

function Img2() {
  return <img src={Eye} className="dash--img2" alt="img-not-loading" />;
}
function Img3() {
  return <img src={Layout} className="dash--img3" alt="img-not-loading" />;
}

function Img4() {
  return <img src={Logout} className="dash--img4" alt="img-not-loading" />;
}

export default function Dashboard() {
  let navigate = useNavigate();
  let { email_id } = useParams();

  const mystocks = () => {
    Axios.post("http://localhost:4000/dashboard", {
      email_id: email_id,
    }).then((res) => {});
  };
  mystocks();

  const watch = () => {
    Axios.post("http://localhost:4000/dashboard", {
      email_id: email_id,
    }).then((res) => {
      console.log(res);
    });
  };

  const logout = () => {
    Axios.post("http://localhost:4000/logout", {}).then((res) => {
      if (res.body.status) {
        navigate("/");
      } else {
        navigate(`/dashboard/${email_id}`);
      }
    });
  };

  return (
    <div className="dash">
      <div className="dash--navbar">
        <button>
          <Img1 />
        </button>
        <button
          onClick={() => {
            watch();
          }}
        >
          <Img2 />
        </button>
        <button
          onClick={() => {
            navigate(`/dashboard/${email_id}`);
          }}
        >
          <Img3 />
        </button>
        <button
          onClick={() => {
            logout();
          }}
        >
          <Img4 />
        </button>
      </div>
      <div className="dash--top">
        <h3>hello {email_id}</h3>
        <b>$50000</b>
      </div>
      <section className="dash--main">
        <div className="dash--stocks">
          <h4>Your Stocks</h4>
        </div>
      </section>
      <div className="dash--bottom">
        <h4>News: </h4>
      </div>
    </div>
  );
}
