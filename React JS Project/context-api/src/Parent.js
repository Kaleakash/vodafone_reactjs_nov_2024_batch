import { useState } from "react";
import Child1 from "./Child1";
import Child2 from "./Child2";
import Child3 from "./Child3";

import { MyContext } from "./Context";

function Parent() {
let [n,setN]=useState(100);
    return(
        <MyContext.Provider value={n}>
        <div>
            <h3>Parent Component</h3>
            <p>The value of n in parent component is {n}</p>
            <Child1></Child1>
            <Child2></Child2>
            <Child3></Child3>
            
        </div>
        </MyContext.Provider>
    )
}

export default Parent;