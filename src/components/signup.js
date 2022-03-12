import "./signup.css"
import React from "react"
import  ReactDOM  from "react-dom"
import React, {useEffect, useState} from "react";
const Leftlogin= require("./img/leftlogin.png")


function Img(){
    return(
  
        <img src = {Leftlogin}
        className="login--img"
         alt="img not loading"/>

    )
}

export default function SignUpPage(){
    const [username,setUsername] = useState("");
    const [pwd,setPwd] = useState("");
    return(
    <div className="login">
    <div className="login--left">
    < Img />
    </div>
    <div className="login--right">
    <h3>Sign Up</h3>
    <form method="post" action="/signup">
    <input type="text" name="username" placeholder="Enter your username" 
    onChange = {(event) => setUsername(event.target.value);} />
            <input type="text" placeholder="Enter your e-mail" />
        <input type="password" placeholder="Enter your password"
        onChange = {(event) => setPwd(event.target.value); />
        <input type="password" placeholder="Confirm your password" />
        <button >Create</button>
    </form>
       
    </div>
    )
}
