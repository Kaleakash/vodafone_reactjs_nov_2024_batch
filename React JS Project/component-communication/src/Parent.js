import { useState } from "react";
import Child1 from "./Child1";
import Child2 from "./Child2";

function Parent() {
let [parentName,setParentName]=useState("Admin");
let [child1ReceiveName,setChild1ReceiveName]=useState("");  // receive value from child1 component 
let [child2ReceiveName,setChild2ReceiveName]=useState("");  // receive value from child2 component 
let child1Data=function(data){
    console.log(data);
    setChild1ReceiveName(data);
}
let child2Data = function(data){
    console.log(data);
    setChild2ReceiveName(data)
}
    return(
        <div style={{"backgroundColor":"gray"}}>
            <h3>Parent Component</h3>
            <p>Parent name in parent component is 
                {parentName}</p>
            <Child1 pname={parentName} handleCallback={child1Data} child2Data={child2ReceiveName}></Child1>
            <Child2 pname={parentName} passValueToChild2={child2Data} child1Data={child1ReceiveName}></Child2>
            <p>Child1 name in parent component is {child1ReceiveName}</p>
            <p>Child2 name in parent component is {child2ReceiveName}</p>
        </div>
    )
}

export default Parent;