import { ADD_TASK, VIEW_TASK } from "./actions";

let initialState = {
    name:"Akash Kale",
    tasks:[]    // add the task, view the task, update task, delete task etc.
}

let reducer = function(state=initialState,action){
    // base upon action we can do some changes on state variable. 
    if(action.type==ADD_TASK){
        // ...state return initial value of name and tasks.
        // property tasks.
        //...state.tasks it hold empty task object or any new task
        // action.payload which hold new task objects. 
        console.log("Add object called..")
        return {...state,tasks:[...state.tasks,action.payload]}
    }
    if(action.type==VIEW_TASK){
        return state;
    }
    return state;
}

export default reducer;