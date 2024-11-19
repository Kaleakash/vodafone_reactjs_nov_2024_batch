import axios from "axios";
import { useEffect, useState } from "react";
function ProductOperations() {
let [products,setProducts]=useState([]);
const URL="http://localhost:3000/products";
useEffect(()=> {
    loadProducts();
},[])
let loadProducts=function() {
    //axios.get(URL).then(result=>console.log(result.data)).catch(error=>console.log(error))
    axios.get(URL).then(result=>setProducts(result.data)).catch(error=>console.log(error))
}
    return(
        <div>
            <h3>Product CRUD Operation Using Axios</h3>
            <table border="1">
                <thead>
                    <tr>
                        <th>PID</th>
                        <th>PName</th>
                        <th>Price</th>
                    </tr>
                </thead>    
                <tbody>
                        {
                            products.map((p,index)=>
                                <tr key={index}>
                                    <td>{p.id}</td>
                                    <td>{p.pname}</td>
                                    <td>{p.price}</td>
                                </tr>
                            )
                        }
                </tbody>
            </table>
        </div>
    )
}

export default ProductOperations;