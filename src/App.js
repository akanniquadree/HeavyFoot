import { useContext, useEffect } from 'react';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Cart from './Page/Cart/Cart';
import CheckOut from './Page/CheckOut/CheckOut';
import Home from './Page/Home/Home';
import Payment from './Page/Payment/Payment';
import Product from './Page/ProductPage/Product';
import Reciept from './Page/Reciept/Reciept';
import ShippingAddress from './Page/ShippingAddress/ShippingAddress';
import SignIn from './Page/SignIn/SignIn';
import Signup from './Page/SignUp/Signup';
import SingleProduct from './Page/SingleProduct/SingleProduct';
import {AuthContext} from "./Context/AuthContext"
import { LOGIN_SUCCESS } from './Context/AuthAction';
import Dashboard from './Page/Admin/Dashboard/Dashboard';
import ViewUser from './Page/Admin/User/ViewUser';
import ViewCloth from './Page/Admin/Product/Clothes/ViewCloth';
import CreateCloth from './Page/Admin/Product/Clothes/CreateCloth';
import EditCloth from './Page/Admin/Product/Clothes/EditCloth';
import SalesReport from './Page/Admin/SalesReport/SalesReport';

function App() {
  const {dispatch} = useContext(AuthContext)
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"))
    if(user){
      dispatch({type:LOGIN_SUCCESS, payload:user})
    }
  }, [dispatch])
  
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
        <Route path='/reciept' exact element={<Reciept/>}/>
        <Route path='/signup' exact element={<Signup/>}/>
        <Route path='/login' exact element={<SignIn/>}/>




        <Route path='/admin' exact element={<Dashboard/>}/>
        <Route path='/admin/viewuser' exact element={<ViewUser/>}/>
        <Route path='/admin/product/view' exact element={<ViewCloth/>}/>
        <Route path='/admin/product/create' exact element={<CreateCloth/>}/>
        <Route path='/admin/product/editcloth/:id' exact element={<EditCloth/>}/>
        <Route path='/admin/sales' exact element={<SalesReport/>}/>
      </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
