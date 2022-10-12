import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from './components/Navbar/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ItemListContainer } from './components/Item/ItemList/ItemListContainer';
import ItemDetailContainer from './components/Item/ItemDetail/ItemDetailContainer';


function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<ItemListContainer greeting={"TimberLand"} />} />
        <Route path='/details/:idProducto' element={<ItemDetailContainer />} />
        <Route path='/category/:idCategory' element={<ItemListContainer greeting={"TimberLand"} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
