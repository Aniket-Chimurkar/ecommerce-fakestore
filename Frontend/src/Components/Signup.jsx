import { useState } from "react"
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signupFailure, signupLoading, signupSuccess } from "../Login Redux/SignUp/action";
import "./CSS/login.css"

export const SignUp=()=>{
    const [username, setUsername]= useState("")
    const [password, setPassword ]= useState("");
    const [name, setName ]= useState("");
    const [email, setEmail ]= useState("");
    const [description, setDescription ]= useState("");
    const [mobile, setMobile ]= useState("");

 

    const dispatch= useDispatch();
    const navigate= useNavigate();

    const handleSubmit=()=>{
        const userDetail={
            name,
            email,
            password,
            username,
            mobile,
            description
        };

        dispatch(signupLoading());  //set loading status to true

        fetch("https://masai-api-mocker.herokuapp.com/auth/register", {
            method:"POST",
            body: JSON.stringify(userDetail),
            headers:{
                 "Content-Type": "application/json"
            }
        })
        .then((res)=>res.json())
        .then((res)=>{
            dispatch(signupSuccess(res.token));
            console.log("succ")
            navigate("/login");
        })
        .catch((err)=>dispatch(signupFailure(err)))
    }
    return (
        <div>
            <div className="container1">
                <div className="main">
                    <h1>Sign-Up</h1>
            {/* <input type="text"
                placeholder="Enter name" 
                value={ name }
                onChange={(e)=>{setName(e.target.value)}} 
                /> */}
                <div class="input-group mb-3">
  <span class="input-group-text" id="basic-addon1">@</span>
  <input type="text" class="form-control" placeholder="Enter Name" aria-label="Username" aria-describedby="basic-addon1"   value={ name }
                onChange={(e)=>{setName(e.target.value)}} />
</div>

                {/* <br /> */}

                {/* <input type="text"
                placeholder="Enter Email" 
                value={email}
                onChange={(e)=>{setEmail(e.target.value)}} 
                /> */}
                <div class="input-group mb-3">
  <input type="text" class="form-control" placeholder="Enter Email" aria-label="Recipient's username" aria-describedby="basic-addon2"  value={email}
                onChange={(e)=>{setEmail(e.target.value)}} />
  <span class="input-group-text" id="basic-addon2">@example.com</span>
</div>

                {/* <br /> */}

                {/* <input type="text"
                placeholder="password"
                value={password}
                onChange={(e)=>{setPassword(e.target.value)}}
                  />        */}
                  <div class="input-group flex-nowrap">
  <span class="input-group-text" id="addon-wrapping">@</span>
  <input type="password" class="form-control" placeholder="Password" aria-label="Username" aria-describedby="addon-wrapping"    value={password}
                onChange={(e)=>{setPassword(e.target.value)}}/>
</div>

                {/* <br />

                <input type="text"
                placeholder="Enter username" 
                value={username}
                onChange={(e)=>{setUsername(e.target.value)}} 
                />

               <br /> */}
                <br /> 

               <div class="input-group mb-3">
  <span class="input-group-text" id="basic-addon1">@</span>
  <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"  value={username}
                onChange={(e)=>{setUsername(e.target.value)}} />
</div>

                {/* <input type="number"
                placeholder="Enter Mobile no" 
                value={ mobile }
                onChange={(e)=>{setMobile(e.target.value)}} 
                /> */}

<div class="input-group mb-3">
  <span class="input-group-text" id="basic-addon1">@</span>
  <input type="text" class="form-control" placeholder="Mobile" aria-label="Username" aria-describedby="basic-addon1"    value={ mobile }
                onChange={(e)=>{setMobile(e.target.value)}}  />
</div>

                <br />
{/* 
           <input type="text"
                placeholder="Enter description" 
                value={description}
                onChange={(e)=>{setDescription(e.target.value)}} 
                /> */}

<div class="input-group">
  <span class="input-group-text">Descreption</span>
  <textarea class="form-control" aria-label="With textarea"   value={description}
                onChange={(e)=>{setDescription(e.target.value)}} ></textarea>
</div>

           <br />

        

        {/* <button onClick={handleSubmit}>SignUp</button> */}
        <button className="btn btn-outline-dark"  onClick={handleSubmit}>Regester</button>
        </div>
        </div>
        </div>
    )
}