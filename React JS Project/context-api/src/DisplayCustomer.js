import { useContext } from "react";
import { CustomerContext } from "./Context";

function DisplayCustomer() {
let ref = useContext(CustomerContext);

    return(
        <div>
            <h4>Display Customer</h4>
            {
                ref.customers.map((c,index)=> 
                    <p key={index}>Name is {c.name} Age is {c.age}</p>
                )
            }
        </div>
    )
}

export default DisplayCustomer;