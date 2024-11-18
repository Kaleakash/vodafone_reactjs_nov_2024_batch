import { useContext, useState } from "react";
import { CustomerContext } from "./Context";

function AddCustomer() {
let [customer,setCustomer]=useState({name:"",age:""});        // customer object 

let ref = useContext(CustomerContext);

let handleSubmit=function(event){
    event.preventDefault();
    console.log(customer);
    ref.dispatchCustomer("ADD",{newCustomer:customer});     // we are calling operation component functions. 
    setCustomer({name:"",age:""})
}
    return(
        <div>
            <h4>Add Customer</h4>
            <form onSubmit={handleSubmit}>
                <label>Name</label>
                <input type="text" name="name" onChange={(event)=> 
                setCustomer(customer=>{return {...customer,"name":event.target.value}})} value={customer.name}/><br/>
                <label>Age</label>
                <input type="number" name="age" onChange={(event)=> 
                setCustomer(customer=>{return {...customer,"age":event.target.value}})}  value={customer.age}/><br/>
                <input type="submit" value="Add Customer"/>
            </form>
        </div>
    )
}

export default AddCustomer;