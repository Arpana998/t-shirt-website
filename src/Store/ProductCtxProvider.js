import { useEffect, useReducer, useState } from "react";
import ProductContext from "./Product-context";

let firstRender = false;
const ProductCtxProvider = (props) => {
  const [items, setItems] = useState({});
  const addDataOnScreenHandler = (newItems) => {
    setItems({ ...items, [newItems.id]: newItems }); //[] used to extract key name from variable value
    //if you use same key for the obj it will be overwritten
    //{name: 'aaaa', name: 'bbb'}
    //output: {name: 'bbb'}
    //dynamic setting the key of obj
  };
  const decreaseSizeFromItemHandler = (id, size) => {
    const productItems = { ...items };
    // const productItems = Object.assign({},items)//copy object
    if (productItems[id][size] > 0) {
      productItems[id][size] -= 1;
      setItems(productItems);
    }
  };


  useEffect(() => {
    
    async function saveProductItem() {

      try {
        const response = await fetch(
          "https://tshirtshop-93e67-default-rtdb.firebaseio.com/productitem.json",
          {
            method: "PUT",
            body: JSON.stringify(items),
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        const res = await response.json();
        console.log(res);
      } catch (err) {
        alert(err.message);
      }
    }
    if(firstRender){
        saveProductItem();
    }
  }, [items]);
  

  useEffect(() => {
    
    async function getProductItem() {

      try {
        const response = await fetch(
          "https://tshirtshop-93e67-default-rtdb.firebaseio.com/productitem.json"
        );
        const res = await response.json();
        setItems(res);
      } catch (err) {
        alert(err.message);
      }
    }
    if(!firstRender){
        getProductItem();
        firstRender = true;
    }
  }, []);


  

  const initialContext = {
    items,
    //items: items (it mean the same as above)
    addDataOnScreen: addDataOnScreenHandler,
    decreaseSizeFromItem: decreaseSizeFromItemHandler,
  };

  return (
    <ProductContext.Provider value={initialContext}>
      {props.children}
    </ProductContext.Provider>
  );
};

export default ProductCtxProvider;
