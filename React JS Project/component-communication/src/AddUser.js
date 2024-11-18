import { useState } from "react"
import DisplayUserInOrder from "./DisplayUserInOrder";

function AddUser() {
let [user,setUser]=useState("");
let [users,setUsers]=useState([]);
 
let handleSubmit=function(event) {
    event.preventDefault();
    setUsers(previousUser=> {
        return [...previousUser,user];
    })
    setUser("");
    alert("User Added...")
}
    return(
        <div>
            <h3>Add User Details:</h3>
            <form onSubmit={handleSubmit}>
                <label>Name</label>
                <input type="text" name="name" onChange={(event)=>setUser(event.target.value)} value={user}/><br/>
                <input type="submit" value="Add User"/>
            </form>
            <hr/>
            <DisplayUserInOrder dataUser={users}></DisplayUserInOrder>
        </div>
    )
}

export default AddUser;