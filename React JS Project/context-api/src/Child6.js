import { useContext } from "react";
import Child8 from "./Child8";
import { MyContext } from "./Context";

function Child6() {
    let data = useContext(MyContext);   // accessing value of n fro context with help of useContext hook 
    return(
        <div>
            <h3>Child6 Component</h3>
            <p>Value of n from parent to child6 component is {data}</p>
            <Child8></Child8>
        </div>
    )
}

export default Child6;