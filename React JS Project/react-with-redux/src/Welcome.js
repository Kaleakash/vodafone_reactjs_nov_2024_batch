import { useState } from "react";
import { useSelector } from "react-redux";

function Welcome() {

let fname = useSelector(gs=>gs.name);       // access store variable value in any component.
                                            // fname variable value is global state variable. 
let [city,setCity]=useState("Bangalore")    // city variable is local state variable. 

    return(
        <div>
            <h3>Welcome user {fname} belong to {city}</h3>
        </div>
    )
}

export default Welcome;