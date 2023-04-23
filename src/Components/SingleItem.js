import { useContext } from "react";
import Button from "react-bootstrap/esm/Button";
import CartContext from "../Store/cart-context";
import ProductContext from "../Store/Product-context";

const SingleItem = (props) => {
  const cartCtx = useContext(CartContext);
  const productCtx = useContext(ProductContext);
  

  let cartItem = {
    name: props.name,
    description: props.description,
    quantity: props.smallitem,
    id: props.id,
    price: props.price,
  };

  const passDataToCartHandler = (size) => {
    cartCtx.addItemToCart(cartItem, size);
    productCtx.decreaseSizeFromItem(props.id, size);
  };

  return (
    <tr>
      {/* <th scope="row">1</th> */}
      <th scope="row" key={props.id} id={props.id}>
        {props.name}
      </th>
      <td>{props.description}</td>
      <td>{props.price}</td>
      <td>
        <Button
          variant="outline-success"
          onClick={()=> {passDataToCartHandler('smQuantity')}}
        >
          {props.smallitem}
        </Button>{" "}
      </td>
      <td>
        <Button
          variant="outline-warning"
          onClick={()=> {passDataToCartHandler('mdQuantity')}}
        >
          {props.mediumitem}
        </Button>{" "}
      </td>
      <td>
        <Button
          variant="outline-danger"
          onClick={()=> {passDataToCartHandler('lgQuantity')}}
        >
          {props.largeitem}
        </Button>{" "}
      </td>
    </tr>
  );
};

export default SingleItem;

// const passDataToCartHandler = () => {

//     cartCtx.addItemToCart(cartItem = {
//         name: props.name,
//         description: props.description,
//         quantity: [props.smallitem, props.mediumitem, props.largeitem],
//         price: totalPrice,
//         id: props.id,
//         key: props.id,
//     }

//     )
// }
