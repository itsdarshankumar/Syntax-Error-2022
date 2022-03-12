import "./loginpage.css"
import React from "react"
import  ReactDOM  from "react-dom"
const Leftlogin= require("./img/leftlogin.png")


function Img(){
    return(
  
        <img src = {Leftlogin}
        className="login--img"
         alt="img not loading"/>

    )
}

export default function LoginPage(){
    return(
    <div className="login">
    <div className="login--left">
    < Img />
    </div>
    <div className="login--right">
        <h3 className="login--title">Log In</h3>
        <input type="text" placeholder="Enter your username" />
        <input type="password" placeholder="Enter your password" />
        <button >Log In</button>
        <p>Don't have an account?<a href="https://www.google.com/">Create One</a> </p>
    </div>
    </div>
    )
}