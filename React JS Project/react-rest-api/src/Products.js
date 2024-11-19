import { useEffect, useState } from "react";

function Products() {
let [products,setProducts]=useState([]);

useEffect(()=> {
    loadLiveProductDetails();
},[])

let loadLiveProductDetails = function() {
fetch("https://fakestoreapi.com/products").then(response=>response.json()).then(result=>setProducts(result)).catch(error=>console.log(error));
}
    return(
        <div>
            <h3>All Product Details</h3>
            
            {
                products.map((p,index)=>
                <div key={index} style={{"display":"inline","width":"400px"}}>
                    <img src={p.image} width="200px" height="200px"/>
                    <span>Name : {p.title} Price : {p.price} Description : {p.description}</span>
                </div>
                )
            }
        </div>
    )
}

export default Products;