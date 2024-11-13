import { useState } from "react";

function ArrayStateVariables() {
let [technologies,setTechnologies]=useState(["Java","Python","React","Angular","Java"])
let [employees,setEmployees]=useState([
        {id:100,name:"Steven",age:21},
        {id:101,name:"John",age:22},
        {id:102,name:"Ajay",age:23}
])
    return(
        <div>
            <h2>Array State Variable</h2>
            <h3>Technologies</h3>
            {technologies}
            <br/>
            <ul>
                {technologies.map((t,index)=><li key={index}>Technology is {t}</li>)}
            </ul>
            <h3>Employee details</h3>
            <table border="1">
                <thead>
                    <tr>
                        <th>EId</th>
                        <th>EName</th>
                        <th>Age</th>
                    </tr>
                </thead>
                <tbody>
                    {employees.map(e=>
                    <tr key={e.id}>
                        <td>{e.id}</td>
                        <td>{e.name}</td>
                        <td>{e.age}</td>
                    </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}

export default ArrayStateVariables;