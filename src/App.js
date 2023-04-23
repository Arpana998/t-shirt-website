import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './Components/Header';
import InputForm from './Components/InputForm';
import PurchasedData from './Components/PurchasedData';
import CartModal from './Components/CartModal';
import CartProvider from './Store/CartProvider';
import ProductCtxProvider from './Store/ProductCtxProvider';
import { useContext } from 'react';
import CartContext from './Store/cart-context';

function App() {
  const cartCtx = useContext(CartContext)
  
  return(
    <CartProvider>
      <ProductCtxProvider>
    <Header />
    <InputForm />
    <PurchasedData />
    <CartModal />
  
    </ProductCtxProvider>
    </CartProvider>
  )
}

export default App;