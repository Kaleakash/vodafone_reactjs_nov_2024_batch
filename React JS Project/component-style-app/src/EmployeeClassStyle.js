import React from "react";

class EmployeeClassStyle extends React.Component{
    constructor() {
        super();        // call super class constructor ie Component class constructor 
        this.state = {id:100,name:"Steven",age:21}
    }

    render(){

        return(
            <div>
                <h3>Class style component creation</h3>
                <p>Employee details</p>
                <p>Id is {this.state.id} Name is {this.state.name} Age is {this.state.age}</p>
            </div>
        )
    }
}

export default EmployeeClassStyle;