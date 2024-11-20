import axios from "axios";
import { useEffect, useState } from "react";

function ProductOperations() {
let [products,setProducts]=useState([]);            // array of product 

let [product,setProduct]=useState({})               // only one product 

let [info,setInfo]=useState({});

let [buttonValue,setButtonValue]=useState("Store Product");

const URL="http://localhost:3000/products";

useEffect(()=> {
    loadProducts();
},[info])               // if info value change once again useEffect get called...

let loadProducts=function() {
    //axios.get(URL).then(result=>console.log(result.data)).catch(error=>console.log(error))
    axios.get(URL).then(result=>setProducts(result.data)).catch(error=>console.log(error))
}

let storeProduct = function(event) {
    event.preventDefault();
    //console.log(product);
    if(buttonValue=="Store Product"){
    axios.post(URL,product).then(result=>setInfo(result)).catch(error=>console.log(error))
    }else {
    axios.put(URL+"/"+product.id,product).then(result=>setInfo(result)).catch(error=>console.log(error))
    setButtonValue("Store Product")    
    }   
    setProduct({pid:"",pname:"","price":""}); 
}
let handleDelete=function(pid){
    //console.log(pid);
    // http://localhost:3000/products/100
    axios.delete(URL+"/"+pid).then(result=>setInfo(result)).catch(error=>console.log(error))
}
let setToUpdate=function(product){
    console.log(product)
    setButtonValue("Update Product");
    setProduct({"id":product.id,"pname":product.pname,"price":product.price})
}
    return(
        <div>
            <h3>Product CRUD Operation Using Axios</h3>
            <form onSubmit={storeProduct}>
                
                <input type="text" name="pname" onChange={(event)=>setProduct(product=>{
                    return {...product,"pname":event.target.value}
                })} placeholder="Enter Product Name" value={product.pname}/>
                
                <input type="text" name="price" onChange={(event)=>setProduct(product=>{
                    return {...product,"price":event.target.value}
                })} placeholder="Enter Product Price" value={product.price}/>
                <input type="submit" value={buttonValue}/>
            </form>
            <hr/>
            <table border="1">
                <thead>
                    <tr>
                        <th>PID</th>
                        <th>PName</th>
                        <th>Price</th>
                        <th>Delete</th>
                        <th>Update</th>
                    </tr>
                </thead>    
                <tbody>
                        {
                            products.map((p,index)=>
                                <tr key={index}>
                                    <td>{p.id}</td>
                                    <td>{p.pname}</td>
                                    <td>{p.price}</td>
                                <td><input type="button" value="delete" onClick={()=>handleDelete(p.id)}/></td>
                                <td><input type="button" value="update" onClick={()=>setToUpdate(p)}/></td>
                                </tr>
                            )
                        }
                </tbody>
            </table>
        </div>
    )
}

export default ProductOperations;