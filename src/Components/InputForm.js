import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Card from "./Card";
import { useContext, useRef } from "react";
import PurchasedContext from "../Store/Product-context";

const InputForm = () => {
  const purchasedDataCtx = useContext(PurchasedContext)
  
  const nameRef = useRef();
  const dspRef = useRef();
  const priceRef = useRef();
  const smRef = useRef();
  const mdRef = useRef();
  const lgRef = useRef();
  
  const submitHandler = (event) => {
    event.preventDefault();
      purchasedDataCtx.addDataOnScreen({
        name: nameRef.current.value,
        description: dspRef.current.value,
        price: +priceRef.current.value,
        smQuantity: +smRef.current.value,
        mdQuantity: +mdRef.current.value,
        lgQuantity: +lgRef.current.value,
        id: Math.random().toString().slice(2) + 'a',//number is converted to string and starting 2 digits removed

      })
      
    
  }

  return (
    <Card>
      <h2 className="text-center mb-4 pb-2">Add T-Shirt Details</h2>
      <Form>
        <Row>
          <Col>
            <Form.Control placeholder="T-Shirt Name" ref={nameRef}/>
          </Col>
          <Col>
            <Form.Control placeholder="T-Shirt Desciption" ref={dspRef}/>
          </Col>
          <Col>
            <Form.Control placeholder="T-Shirt price" ref={priceRef}/>
          </Col>
          <Col>
            <Row>
              
                <Form.Control
                  placeholder="Sm"
                  type="number"
                  min="1"
                  max="100"
                  step="1"
                  className="quantity-field border-2 text-center w-25"
                  ref={smRef}
                />
                <Form.Control
                  placeholder="Md"
                  type="number"
                  min="1"
                  max="100"
                  step="1"
                  className="quantity-field border-2 text-center w-25"
                  ref={mdRef}
                />
                <Form.Control
                  placeholder="Lg"
                  type="number"
                  min="1"
                  max="100"
                  step="1"
                  className="quantity-field border-2 text-center w-25"
                  ref={lgRef}
                />
            </Row>
          </Col>
          <Col>
            <Button variant="primary" onClick={submitHandler}>Add T-Shirt</Button>{" "}
          </Col>
        </Row>
      </Form>
    </Card>
  );
};
export default InputForm;
