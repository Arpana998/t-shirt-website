import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import CartBadge from './CartBadge';
import { useContext } from 'react';
import CartContext from '../Store/cart-context';

const Header = () => {
  
    return(
        <>
        <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="#home">T-Shirt Order App</Navbar.Brand>
          
          <CartBadge/>
          
        </Container>
      </Navbar>
      
      </>
    )
}
export default Header;