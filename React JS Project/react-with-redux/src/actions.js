export const ADD_TASK="ADD_TASK";
export const VIEW_TASK="VIEW_TASK";
export const UPDATE_TASK="UPDATE_TASK";
export const DELETE_TASK="DELETE_TASK";
// task object can hold id, taskname,taskstatus etc 

export let addTask = (task)=> ({
        type:ADD_TASK,
        payload:task
})

export let viewTask = (task)=> ({
    type:VIEW_TASK
})

