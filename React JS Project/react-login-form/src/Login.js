import { useState } from "react";

function Login() {
let [emailid,setEmailId]=useState("");
let [password,setPassword]=useState("");

let [emailid1,setEmailId1]=useState("");
let [password1,setPassword1]=useState("");


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

let handleSubmit1=function(event) {
    event.preventDefault();
    //console.log("submit event fired")
    console.log(emailid1+" "+password1)
    if(emailid1=="akash@gmail.com" && password1=="123"){
            alert("successfully login")
    }else {
            alert("failure try once again")
    }
    setEmailId1("");
    setPassword1("");
}
    return(
        <div>
            <h3>Login Page with Global Generic Function to Set State variable</h3>
            <form onSubmit={handleSubmit}>
                <label>EmailId</label>
                <input type="email" name="emailid" value={emailid} onChange={handleChange}/><br/>
                <label>Password</label>
                <input type="password" name="password" value={password} onChange={handleChange}/><br/>
                <input type="submit" value="Submit"/>
                <input type="reset" value="reset"/>
            </form>
            <br/>
            <h3>Login Page with Inline Local function to set State variable</h3>
            <form onSubmit={handleSubmit1}>
                <label>EmailId</label>
                <input type="email" name="emailid1" value={emailid1} 
                onChange={(event)=>setEmailId1(event.target.value)}/><br/>
                <label>Password</label>
                <input type="password" name="password1" value={password1} 
                onChange={(event)=>setPassword1(event.target.value)}/><br/>
                <input type="submit" value="Submit"/>
                <input type="reset" value="reset"/>
            </form>
        </div>
    )
}

export default Login;