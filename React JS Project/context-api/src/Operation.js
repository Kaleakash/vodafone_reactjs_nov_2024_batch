import { useState } from "react";
import AddCustomer from "./AddCustomer";
import DisplayCustomer from "./DisplayCustomer";
import { CustomerContext } from "./Context";

function Operation() {

let [customers,setCustomers]=useState([]);  // array state variable. 

let dispatchCustomer=function(type,payload){
    console.log(type)
    console.log(payload)
    if(type=="ADD"){
        setCustomers(previousCustomer=>{return [...previousCustomer,payload.newCustomer]});
    }
}
    return(
        <CustomerContext.Provider value={{customers,dispatchCustomer}}>
        <div>
            <h2>Customer Operation</h2>
            <AddCustomer></AddCustomer>
            <DisplayCustomer></DisplayCustomer>
        </div>
        </CustomerContext.Provider>
    )

}

export default Operation;