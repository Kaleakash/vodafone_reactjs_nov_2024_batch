import { useState } from "react";

function EmployeeFunctionStyle() {
let id =useState(101);
let name = useState("John")
let age = useState(25);

    return(
        <div>
            <h3>Function style component</h3>
            <p>Employee details in function style</p>
            <p>Id is {id} Name is {name} Age is {age}</p>
        </div>
    )
}

export default EmployeeFunctionStyle;