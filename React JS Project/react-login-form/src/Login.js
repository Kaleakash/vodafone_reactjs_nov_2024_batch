import { useState } from "react";

function Login() {
let [emailid,setEmailId]=useState("");
let [password,setPassword]=useState("");

let handleChange=function(event) {
    //console.log("event fired")
    //console.log(event)
    let name = event.target.name;
    let value = event.target.value;
    //console.log(name+" "+value)
    if(name=="emailid"){
        setEmailId(value)
    }else {
        setPassword(value)
    }
}
let handleSubmit=function(event) {
    event.preventDefault();
    //console.log("submit event fired")
    console.log(emailid+" "+password)
    if(emailid=="akash@gmail.com" && password=="123"){
            alert("successfully login")
    }else {
            alert("failure try once again")
    }
    setEmailId("");
    setPassword("");
}
    return(
        <div>
            <h3>Login Page</h3>
            <form onSubmit={handleSubmit}>
                <label>EmailId</label>
                <input type="email" name="emailid" onChange={handleChange}/><br/>
                <label>Password</label>
                <input type="password" name="password" onChange={handleChange}/><br/>
                <input type="submit" value="Submit"/>
                <input type="reset" value="reset"/>
            </form>
        </div>
    )
}

export default Login;