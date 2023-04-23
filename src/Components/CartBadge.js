import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";
import CartContext from "../Store/cart-context";
import { useContext } from "react";
const CartBadge = () => {
  const cartCtx = useContext(CartContext);
  return (
    <>
      <Button variant="secondary" onClick={cartCtx.OnShowCart}>
        Cart <Badge bg="secondary">{cartCtx.totalQuantity}</Badge>
        <span className="visually-hidden">unread messages</span>
      </Button>
    </>
  );
};
export default CartBadge;
