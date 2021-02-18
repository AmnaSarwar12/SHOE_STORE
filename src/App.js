
import './App.css';
import Product from './Component/Product';
import ProductList from './Component/ProductList' 
import Header from './Component/Header'
import {Routes,Route} from 'react-router-dom';
import Cart from './Component/Cart';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Header/>}/>
      
      <Route path="Product" element={<Product />}>
            <Route path="/" element={<ProductList />}></Route>
            <Route path=":productkey" element={<Cart />}></Route>
      </Route>
      </Routes>

    </div>
  );
}

export default App;
