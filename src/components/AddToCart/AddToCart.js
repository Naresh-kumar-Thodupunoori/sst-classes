function AddToCart({product, cart, increaseQuantity, decreaseQuantity}) {

    function increase() {
        increaseQuantity(product);
    }

    function decrease(){
        decreaseQuantity(product);
    }

    const quantity = cart[product.id] ? cart[product.id].quantity : 0;
    if(quantity === 0){
        return(
            <div>
                <button onClick={increase}>AddToCart</button>
            </div>
        )
    }
    else{
        return(
            <div>
                <button onClick={decrease}>-</button>
                <span>{quantity}</span>
                <button onClick={increase}>+</button>
            </div>
        )
    
    }
}

export default AddToCart;

// Cart - 1. Quantity increasing and decreasing functions((On decreasing the count to zero should remove the cart)
//        2. total price calculation
//        3. Count of unique items
//        4. Remove button for removing an item from cart
//        5. Clear cart button
//        6. Add to cart button
//
// Cart Structure - 1. A new object should be created
//                  2. Each item should have a unique id
//                  3. Each item should have a quantity
//                  4. Each item should have a price
//                  5. Each item should have a title
//                  6. Each item should have a total price
//                  7. Each item should have a remove button
//                  8. Each item should have a quantity increasing and decreasing buttons
//                  9. Each item should have a total price
//                  10. Cart items should be stored in an Array
//                  11. useState can be used to set the values
//                  12. callBack can be used to remove,update,calculate 
