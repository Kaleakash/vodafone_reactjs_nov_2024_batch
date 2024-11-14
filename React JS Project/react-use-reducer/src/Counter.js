import { useReducer } from "react";

function reducer(state,action) {
    //console.log("event fired")
    console.log(action)
    console.log(state)
    if(action.type=="INCREMENT"){
        return {...state,counter:state.counter+1}
    }
    if(action.type=="DECREMENT"){
        return {...state,counter:state.counter-1}
    }
    if(action.type=="UPDATE"){
        return {...state,name:state.name+" Kale"}
    }
    return state;
}
let initialState = {counter:0,name:"Akash"}

function Counter() {    
let [state,dispatch]=useReducer(reducer,initialState)
    return(
        <div>
            <h3>Trainer name is {state.name}</h3>
           <p>counter value is {state.counter}</p>
           <input type="button" value="Increment" onClick={()=>dispatch({type:"INCREMENT"})}/>
           <input type="button" value="Decrement" onClick={()=>dispatch({type:"DECREMENT"})}/>
           <input type="button" value="Update Name" onClick={()=>dispatch({type:"UPDATE"})}/>
        </div>
    )
}


export default Counter;