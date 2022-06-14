import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Cart from './Page/Cart/Cart';
import CheckOut from './Page/CheckOut/CheckOut';
import Home from './Page/Home/Home';
import Payment from './Page/Payment/Payment';
import Product from './Page/ProductPage/Product';
import ShippingAddress from './Page/ShippingAddress/ShippingAddress';
import SingleProduct from './Page/SingleProduct/SingleProduct';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
      <Routes>
        <Route path='/' exact element={<Home/>}/>
        <Route path='/products' exact element={<Product/>}/>
        <Route path='/cart' exact element={<Cart/>}/>
        <Route path='/shipping' exact element={<ShippingAddress/>}/>
        <Route path='/checkout' exact element={<CheckOut/>}/>
        <Route path='/payment' exact element={<Payment/>}/>
        <Route path='/product' exact element={<SingleProduct/>}/>
      </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
