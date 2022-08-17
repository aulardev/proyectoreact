import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';
import Cart from './components/Cart';
import CartProvider from './context/CartContext';
import CheckOut from './components/CheckOut'; 



function App() {

return (
  <div className='container'>
    <BrowserRouter>
    <CartProvider>
      <NavBar/>
        <Routes>
          
            <Route path="/" element={<ItemListContainer/>} />
            <Route path="/category/:productType" element={<ItemListContainer/>} />
            <Route path="/product/:productId" element={<ItemDetailContainer/>} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/checkout' element={<CheckOut/>}/>
            <Route path="*" element={<p>Error 404</p>} />
          
        </Routes>
      </CartProvider>
   </BrowserRouter>
 </div>
  

);

}

export default App
