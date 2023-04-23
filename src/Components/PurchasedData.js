import Card from "./Card";
import CartContext from "../Store/cart-context";
import { useContext } from "react";
import PurchasedContext from "../Store/Product-context";
import SingleItem from "./SingleItem";
import ProductContext from "../Store/Product-context";

const PurchasedData = () => {
  const productCtx = useContext(ProductContext);
  const items = [];
  for (const key in productCtx.items) {
    items.push(productCtx.items[key])
  }

  return (
    <Card>
      <table className="table table-success table-striped mt-5">
        <thead>
          <tr>
            <th scope="col">T-Shirt Name</th>
            <th scope="col">T-Shirt Description</th>
            <th scope="col">t-Shirt Price</th>
            <th scope="col">Buy Small</th>
            <th scope="col">Buy Medium</th>
            <th scope="col">Buy Large</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <SingleItem
              name={item.name}
              description={item.description}
              price={item.price}
              smallitem={item.smQuantity}
              mediumitem={item.mdQuantity}
              largeitem={item.lgQuantity}
              id={item.id}
              key={item.id}
            />
          ))}
        </tbody>
      </table>
    </Card>
  );
};

export default PurchasedData;
