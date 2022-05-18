import { useState } from "react"
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginfailure, loginLoading, loginSuccess } from "../Login Redux/Login/action";
import "../Components/CSS/login.css"

export const Login=()=>{
    const [username, setUsername]= useState("")
    const [password, setPassword ]= useState("");

    const dispatch= useDispatch();
    const navigate= useNavigate();

    const handleSubmit=()=>{
        const userDetail={
            username,
            password
        };

        dispatch(loginLoading());  //set loading status to true

        fetch("https://masai-api-mocker.herokuapp.com/auth/login", {
            method:"POST",
            body: JSON.stringify(userDetail),
            headers:{
                 "Content-Type": "application/json"
            }
        })
        .then((res)=>res.json())
        .then((res)=>{
            dispatch(loginSuccess(res.token));
            navigate("/Mcart");
        })
        .catch((err)=>dispatch(loginfailure(err)))
    }
    return (
        <div className="container1 bg-success p-2 text-dark bg-opacity-25">
           
        <div className="main">
        <h1>Login</h1>
         {/* <input type="text"
                
                placeholder="Enter username" 
                value={username}
                onChange={(e)=>{setUsername(e.target.value)}} 
                /> */}

<div class="input-group mb-3">
  <span class="input-group-text" id="basic-addon1">@</span>
  <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"   value={username}
                onChange={(e)=>{setUsername(e.target.value)}} />
</div>

           <br />
{/* 
         <input type="text"
                placeholder="password"
                value={password}
                onChange={(e)=>{setPassword(e.target.value)}}  />        */}
<div class="input-group mb-3">
  <span class="input-group-text" id="basic-addon1">@</span>
  <input type="text" class="form-control" placeholder="password" aria-label="Username" aria-describedby="basic-addon1"   value={password}
                onChange={(e)=>{setPassword(e.target.value)}} />
</div>

           <br />

        {/* <button>Login</button> */}
        <button className="btn btn-outline-dark"  onClick={handleSubmit}>Login</button>
        </div>
        </div>
    )
}