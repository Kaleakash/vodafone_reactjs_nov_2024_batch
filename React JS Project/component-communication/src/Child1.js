import { useState } from "react";

function Child1(props) {
let [child1Name,setChild1Name]=useState("Steven");
    return(
        <div style={{"backgroundColor":"orange"}}>
            <h3>Child1 Component</h3>
            <p>Parent name in child1 component is {props.pname}</p>
            <p>Child1 name in child1 component is {child1Name}</p>
            <p>{props.handleCallback(child1Name)}</p>
            <p>Child2 name in child1 component is {props.child2Data}</p>
        </div>
    )
}

export default Child1;