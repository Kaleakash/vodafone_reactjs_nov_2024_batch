import { useContext } from "react";
import Child5 from "./Child5";
import { MyContext } from "./Context";

function Child1() {
let data = useContext(MyContext);   // accessing value of n fro context with help of useContext hook 
    return(
        <div>
            <h3>Child1 Component</h3>
            <p>Value of n from parent component to child1 component is {data}</p>
            <Child5></Child5>
        </div>
    )
}

export default Child1;