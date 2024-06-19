import ProductCard from "../ProductCard/ProductCard";
import Effect from "../Effect/Effect";
import { useState, useEffect } from "react";
function Products({cart, increaseQuantity, decreaseQuantity}) {
  console.log("Products")
  // const products = [
  //       {
  //         id: 1,
  //         title: "Apple iPhone 14",
  //         price: "Rs. 1,00,000"
  //       },
  //       {
  //         id: 2,
  //         title: "Apple iPhone 13",
  //         price: "Rs. 70,000"
  //       },
  //       {
  //         id: 3,
  //         title: "Google Pixel 7",
  //         price: "Rs. 50,000"
  //       },
  //       {
  //         id: 4,
  //         title: "Nokia 1100",
  //         price: "Rs. 2,000"
  //       },
  //       {
  //         id: 5,
  //         title: "Samsung Galaxy S10",
  //         price: "Rs. 1,00,000"
  //       },
  //       {
  //         id: 6,
  //         title: "Sony Xperia S10",
  //         price: "Rs. 1,00,000"
  //       }
  //     ];

  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products").then(
      function (res) {
        return res.json();
      }
    ).then(function (res) {
      setProducts(res);
      console.log(products);
    })
  },[]);

  return (
    <div>
      <div><Effect /></div>
      {
        products.map(function (item,index) {
          return (<ProductCard  key={index}  product={item} cart={cart} increaseQuantity={increaseQuantity} decreaseQuantity={decreaseQuantity}/>)
        })
      }
    </div>
  )
}
export let a = 10;
export let b = 20;
export default Products;
// Javascript XML 

//ProductCard(title)
//named export 
//default export
// One default export
// multiple named exports


//product card with key i4 and title 4 has to be added from checking the dom and virtual dom