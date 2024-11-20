import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
let [emailid,setEmailId]=useState("");
let [password,setPassword]=useState("");

let navigate  = useNavigate();

let handleSubmit= function(event){
    event.preventDefault();
    // we can pass emailid and password to backend technologies using axios with post method. 
    if(emailid=="akash@gmail.com" && password=="123"){
            alert("successfully login")
            navigate("/home");
    }else {
            alert("failure try once again")
    }
}
    return(
        <div>
            <h3>Login Page </h3>
            <form onSubmit={handleSubmit}>
            <label>EmailId</label>
            <input type="email" name="emailid" onChange={(event)=>setEmailId(event.target.value)}/><br/>
            <label>Password</label>
            <input type="password" name="password" onChange={(event)=>setPassword(event.target.value)}/><br/>
            <input type="submit" value="SignIn"/>
            <input type="reset" value="reset"/>
            </form>            
        </div>
    )
}

export default Login;