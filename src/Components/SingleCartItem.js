import Table from "react-bootstrap/Table";
import Badge from 'react-bootstrap/Badge';

const SingleCartItem = (props) => {
  return (
    <Table striped>
      <thead>
        <tr>
          <th>Name</th>
          <th>Desciption</th>
          <th>quantity</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td id={props.id} key={props.id}>{props.name}</td>
          <td>{props.description}</td>
          <td>
            <Badge bg="success">{props.smQuantity}</Badge>{" "}
            <Badge bg="danger">{props.mdQuantity}</Badge>{" "}
            <Badge bg="warning">{props.lgQuantity}</Badge>{" "}
          </td>
          <td>{props.price}</td>
        </tr>
      </tbody>
    </Table>
  );
};

export default SingleCartItem;
