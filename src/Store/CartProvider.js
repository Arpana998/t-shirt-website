import { useEffect, useState } from "react";
import CartContext from "./cart-context";

let isInitialRender = false;
const CartProvider = (props) => {
  const [cartIsShown, setCartIsShown] = useState(false);
  const [cartItems, setCartItems] = useState({});
  const [totalAmount, setTotalAmount] = useState(0);
  const [totalQuantity, setTotalQuantity] = useState(0);

  const showCartHandler = () => {
    setCartIsShown((cartIsShown) => !cartIsShown);
  };

  const addItemToCartHandler = (newcartItem, size) => {
    console.log(cartItems, "this is my cart");
    const obj = {
      name: newcartItem.name,
      description: newcartItem.description,
      price: newcartItem.price,
      lgQuantity: 0,
      smQuantity: 0,
      mdQuantity: 0,
      id: newcartItem.id,
      [size]: 1,
    };

    if (cartItems[newcartItem.id]) {
      //getting the dynamic key{
      // cartCopy[newcartItem.id][size] += 1;strinctly prohibitated by react to change state without set(sunction)
      // setCartItems({ ...cartItems, cartItems[newcartItem.id][size]: cartItems[newcartItem.id][size]+1});
      const cartCopy = { ...cartItems }; //
      cartCopy[newcartItem.id][size] += 1;
      setCartItems(cartCopy);
    } else {
      setCartItems({ ...cartItems, [newcartItem.id]: obj });
    }
  };

  useEffect(() => {
    let totalQ = 0;
    let totalSum = 0;
    for (const key in cartItems) {
      totalQ +=
        cartItems[key].smQuantity +
        cartItems[key].lgQuantity +
        cartItems[key].mdQuantity;
      totalSum += totalQ * cartItems[key].price;
    }
    setTotalQuantity(totalQ);
    setTotalAmount(totalSum);
  }, [cartItems]);

  const emptyCartHandler = () => {
    setCartItems({});
    setCartIsShown(false);
  };

  useEffect(() => {
    async function saveDataOfCart() {
      console.log("put req of cart sending");
      try {
        const response = await fetch(
          "https://tshirtshop-93e67-default-rtdb.firebaseio.com/cartitems.json",
          {
            method: "PUT",
            body: JSON.stringify(cartItems),
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        // const res = await response.json();
        // setCartItems(res)
        // console.log(res);
        console.log("sending put request");
      } catch (err) {
        alert(err.message);
      }
    }

    if (isInitialRender) {
      saveDataOfCart();
    }
  }, [cartItems]);

  useEffect(() => {
    async function GetDataOfCart() {
      console.log("get request of cart sending");
      try {
        const response = await fetch(
          "https://tshirtshop-93e67-default-rtdb.firebaseio.com/cartitems.json",
          {
            method: "GET",
          }
        )
        if(!response.ok){
          throw new Error('Something went wrong')
        }
        console.log(response)
        const res = await response.json();
         setCartItems(res);
       
        
        // console.log('getcartItem')
        console.log("Sending get req");
      } catch (err) {
        alert(err.message);
      }
    }

    if (!isInitialRender) {
      GetDataOfCart();
      isInitialRender = true;
    }
  }, []);

  const cartContext = {
    cartItems,
    totalAmount,
    totalQuantity,
    cartIsShown, //cartIsShown: cartIsShown,
    addItemToCart: addItemToCartHandler,
    OnShowCart: showCartHandler,
    emptyCart: emptyCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};
export default CartProvider;
