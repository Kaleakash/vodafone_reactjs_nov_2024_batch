import { useContext } from "react";
import { MyContext } from "./Context";

function Child10() {
    let data = useContext(MyContext);   // accessing value of n fro context with help of useContext hook 
    return(
        <div>
            <h3>Child10 Component</h3>
            <p>Value of n from parent component to child10 component is {data}</p>
        </div>
    )
}

export default Child10;