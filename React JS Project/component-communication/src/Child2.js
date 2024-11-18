import { useState } from "react";

function Child2(props) {
let [child2Name,setChild2Name]=useState("Raj");
    return(
        <div style={{"backgroundColor":"yellow"}}>
            <h3>Child2 Component</h3>
            <p>Parent name in child2 component is {props.pname}</p>
            <p>Child2 name in child2 component is {child2Name}</p>
            <p>{props.passValueToChild2(child2Name)}</p>
            <p>Child1 name in child2 component is {props.child1Data}</p>
        </div>
    )
}

export default Child2;