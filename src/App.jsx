import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';
import Cart from './components/Cart';
import CheckOut from './components/CheckOut'; 
import React from 'react';
import CartProvider from './context/CartProvider';


function App() {

return (
  <>
    <CartProvider>
    <BrowserRouter>
    
      <NavBar/>
        <Routes>
          
            <Route path="/" element={<ItemListContainer/>} />
            <Route path="/category/:idcategory" element={<ItemListContainer/>} />
            <Route path="/item/:idItem" element={<ItemDetailContainer/>} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/checkout' element={<CheckOut/>}/>
            <Route path="*" element={<p>Error 404</p>} />
          
        </Routes>      
   </BrowserRouter>
   </CartProvider> 
 </>
  

);

}

export default App