import { useState } from "react";
function Counter() {
let [counter,setCounter]=useState(0);
let incrementCounter = function() {
    setCounter(counter+1);
}
let decrementCounter = function() {
    setCounter(counter-1);
}
let resetCounter = function() {
    setCounter(0);
}
let dynamicIncrement = function(value){
    setCounter(counter+value);
}
let dynamicDecrement = function(value){
    setCounter(counter-value);
}
    return(
        <div>
            <h3>Counter Component</h3>
            <p>Counter Value is {counter}</p>
    <input type="button" value="+" onClick={incrementCounter}/>
    <input type="button" value="-" onClick={decrementCounter}/>
    <input type="button" value="reset" onClick={resetCounter}/>
    <br/>
    <input type="button" value="Inline Increment Counter" onClick={()=>setCounter(counter+1)}/>
    <input type="button" value="Inline Decrement Counter" onClick={()=>setCounter(counter-1)}/>
    <input type="button" value="Inline reset Counter" onClick={()=>setCounter(0)}/>
    <br/>
    <input type="button" value="Dynamic increment" onClick={()=>dynamicIncrement(10)}/>
    <input type="button" value="Dynamic decrement" onClick={()=>dynamicDecrement(5)}/>
    <input type="button" value="reset" onClick={resetCounter}/>
        </div>
    )
}


export default Counter;