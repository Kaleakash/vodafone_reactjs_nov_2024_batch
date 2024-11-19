import { useEffect, useState } from "react";

function UseEffectExample() {
let [a,setA]=useState(0)
let [b,setB]=useState(0);
console.log("component loaded...");

useEffect(()=> {

    console.log("useEffect code executed...")
},[a])
    return(
        <div>
            <h2>useEffect hook example</h2>
            <p>a value is {a} and b value is {b}</p>
            <input type="button" value="Change a" onClick={()=>setA(a+1)}/>
            <input type="button" value="Change b" onClick={()=>setB(b+1)}/>
        </div>
    )
}

export default UseEffectExample;