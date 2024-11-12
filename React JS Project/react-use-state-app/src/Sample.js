import { useState } from "react";

function Sample() {
let [name,setName]=useState("Raj"); // state variable 
let age = 21;                       // local variable 
let handleClick = function() {
    console.log(name)
    console.log(age)
    setName("Raj Kumar");       // asynchronous 
    name="Raj Deep"
    age=24;
    console.log("After change")
    console.log(name)
    console.log(age)
}
    return(
        <div>
            <h4>Sample Component</h4>
            <p>Name is {name} Age is {age}</p>
            <input type="button" value="Change Name" onClick={handleClick}/>
        </div>
    )

}


export default Sample;