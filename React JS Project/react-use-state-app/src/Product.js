const { useState } = require("react")
function Product() {
let [product,setProduct]=useState({pid:100,pname:"TV",price:54000});
let changeProduct= function() {
    //setProduct({pid:101,pname:"Sony Tv",price:56000});// all property change
    setProduct(previousProduct=>{
        return {...previousProduct,pid:101}             // ... spread operator part of ES6
    });
}
return(
        <div>
            <h2>Product Details</h2>
            <p>
                Pid is {product.pid} 
                PName {product.pname}
                Price is {product.price}
            </p>
    <input type="button" value="Change Product Info" onClick={changeProduct}/>
        </div>
    )
}
export default Product;