import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemCount from './components/ItemDetail/ItemCount';
import ItemDetailContainer from './components/ItemDetail/ItemDetailContainer';
import ItemListContainer from './components/ItemList/ItemListContainer';
import NavBar from './components/NavBar';



function App() {

return (
  <>
  <BrowserRouter>
  <NavBar/>
  
  
        <Routes>
          <Route path="/" element={<ItemListContainer/>} />
          <Route path="/category/:idCategory" element={<ItemListContainer/>} />
          <Route path="/item/:idProducto" element={<ItemDetailContainer/>} />
          <Route path="*" element={<p>Error 404</p>} />
        </Routes>
      </BrowserRouter>

  
  </>

);

}

export default App
