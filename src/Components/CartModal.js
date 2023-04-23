import React, { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

import CartContext from "../Store/cart-context";
import SingleCartItem from "./SingleCartItem";

const CartModal = () => {

  const cartCtx = useContext(CartContext);
  
  let cartData = [];
  for (const key in cartCtx.cartItems) {
    cartData.push(cartCtx.cartItems[key]);
  }

  const saveChangesHandler = () => {
    if(cartCtx.totalAmount === 0){
      alert("There is nothing to purchase")
    }else{
      alert("Thanks For Shopping")
      cartCtx.emptyCart();
    }
    
  }
  
  return (
    <>
      <Modal show={cartCtx.cartIsShown} onHide={cartCtx.OnShowCart}>  
        <Modal.Header closeButton>
          <Modal.Title>Cart</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {cartData.map((item) => (
            <SingleCartItem
              key={item.id}
              name={item.name}
              description={item.description}
              price={item.price}
              smQuantity={item.smQuantity}
              mdQuantity={item.mdQuantity}
              lgQuantity={item.lgQuantity}
              id={item.id}
            />
          ))}
          <div className="text-right">
            <h3>Total Amount: ₹{cartCtx.totalAmount}</h3>
            {/* //windows + (.) */}
            </div>
        </Modal.Body>
        <Modal.Footer>
            
          <div>
          <Button variant="secondary" onClick={cartCtx.OnShowCart}>
          {/* onClick={handleClose} */}
            Close
          </Button>
          <Button variant="primary" onClick={saveChangesHandler}>
          {/* onClick={handleClose} */}
            Purchase
          </Button>
          </div>
        </Modal.Footer>
      </Modal>
    </>
  );
};
export default CartModal;
