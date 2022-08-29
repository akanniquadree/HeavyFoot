import { useContext, useEffect } from 'react';
import { Navigate, Routes } from 'react-router-dom';
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
import AdminLogin from './Page/Admin/SignIn/SignIn';
import CreateCat from './Page/Admin/Product/Category/CreateCat';
import ViewCat from './Page/Admin/Product/Category/ViewCat';
import NotFound from './Page/NotFound/NotFound';

function App() {
  const {user, dispatch} = useContext(AuthContext)
  const {admin, admindispatch} = useContext(AuthContext)
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"))
    const admin = JSON.parse(localStorage.getItem("admin"))
    if(user){
      dispatch({type:"LOGIN_SUCCESS", payload:user})
    }
    if(admin){
      admindispatch({type:"ADMIN_LOGIN_SUCCESS", payload:admin})
    }
  }, [admindispatch, dispatch])
  
  return (
    <div className="App">
     <BrowserRouter>
      <Routes>
        <Route path='/' exact element={<Home/>}/>
        <Route path='/shop/:name' element={<Product/>}/>
        <Route path='/cart' exact element={<Cart/>}/>
        <Route path='/shipping' exact element={user ? <ShippingAddress/> : <NotFound/>}/>
        <Route path='/checkout' exact element={user ? <CheckOut/> : <NotFound/>}/>
        <Route path='/payment' exact element={user ? <Payment/> : <NotFound/>}/>
        <Route path='/product/:id' exact element={<SingleProduct/>}/>
        <Route path= '/reciept' exact element={user ? <Reciept/> : <NotFound/>}/>
        <Route path='/signup' exact element={<Signup/>}/>
        <Route path='/login' exact element={<SignIn/>}/>
        <Route path="*" element={<NotFound/>}/>


        <Route path='/admin' exact element={admin ? <Dashboard/> : <NotFound/>}/>
        <Route path='/admin/login' exact element={<AdminLogin/>}/>
        <Route path='/admin/viewuser' exact element={admin ? <ViewUser/> : <NotFound/>}/>
        <Route path='/admin/product/view' exact element={admin ? <ViewCloth/> : <NotFound/>}/>
        <Route path='/admin/category/view' exact element={admin ? <ViewCat/> : <NotFound/>}/>
        <Route path='/admin/product/create' exact element={admin ? <CreateCloth/> : <NotFound/>}/>
        <Route path='/admin/category/create' exact element={admin ? <CreateCat/> : <NotFound/>}/>
        <Route path='/admin/product/editcloth/:id' exact element={admin ? <EditCloth/> : <NotFound/>}/>
        <Route path='/admin/sales' exact element={admin ? <SalesReport/> : <NotFound/>}/>
      </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
