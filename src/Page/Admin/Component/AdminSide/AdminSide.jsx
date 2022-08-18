import { Category, Dashboard, MoneyOff, People, PersonAdd,Dehaze ,RateReview, Storefront, TrendingDown, ViewArray, ArrowDropDown } from '@material-ui/icons'
import React, { useState , useEffect} from 'react'
import { Link } from 'react-router-dom'
import "./adminSide.css"

export default function AdminSide() {
    const [products, setProducts] = useState(false)
    useEffect(()=>{
    })
    const productHandler = () =>{
        setProducts(true)
    }
    const productHandlerClose = () =>{
        const reverse = document.querySelector(".mouseOver")
        setProducts(false)
    }
  return (
    <div className="adminSide">
        <div className="adminSideWrapper">
            <div className="AdminSideTop">
              <Link to="/" style={{display:"flex", alignItems:"center"}}>
                <img src="/Images/logo.jpg" className="logo" alt="logo" />
                <h3>Heavy Foot</h3>
              </Link>
                <Dehaze style={{fontSize:"15", marginRight:"10px", cursor:"pointer"}}/>
            </div>
            <ul>
                <li>
                    <Link to="/admin" style={{width:"100%", display:"flex", alignItems:"center"}}>
                        <Dashboard htmlColor=" #636e72" style={{ fontSize: 17 }}/>
                        <span className='detail'>Dashboard</span>
                        {/* <ArrowDropDown htmlColor="black"/> */}
                    </Link>
                </li>
                <li >
                    <Link to="/admin/viewuser" style={{width:"100%"}}>
                        <People  htmlColor=" #636e72" style={{ fontSize: 17 }}/>
                        <span className='detail'>Users</span>
                    </Link>
                </li>
             
                <li onMouseOver={()=>{productHandler()}} onMouseLeave={()=>{productHandlerClose()}}>
                    <Link to="" style={{width:"100%"}}>
                        <Category htmlColor=" #636e72" style={{ fontSize: 17 }}/>
                        <span className='detail'>Products</span>
                        
                    </Link>
                    <ArrowDropDown htmlColor="#636e72"/>
                </li>
                {
                    products &&
                    <li onMouseOver={()=>{productHandler()}} onMouseLeave={()=>{productHandlerClose()}} className="mouseOver">
                        <ul>
                            <li>
                                <Link to="/admin/product/create" style={{width:"100%"}}>
                                    <Category htmlColor=" #636e72" style={{ fontSize: 17 }}/>
                                    <span className='detail'>Add Product</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/admin/product/view" style={{width:"100%"}}>
                                    <PersonAdd htmlColor=" #636e72" style={{ fontSize: 17 }}/>
                                    <span className='detail'>View Products</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/admin/category/create" style={{width:"100%"}}>
                                    <PersonAdd htmlColor=" #636e72" style={{ fontSize: 17 }}/>
                                    <span className='detail'>Add Category</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/admin/category/view" style={{width:"100%"}}>
                                    <PersonAdd htmlColor=" #636e72" style={{ fontSize: 17 }}/>
                                    <span className='detail'>View Category</span>
                                </Link>
                            </li>
                           
                        </ul>
                    </li>
                }
                
                <li>
                    <Link to="" style={{width:"100%"}}>
                        <Storefront htmlColor=" #636e72" style={{ fontSize: 17 }}/>
                        <span className='detail'>Orders</span>
                    </Link>
                </li>
                <li>
                    <Link to='/admin/sales' style={{width:"100%"}}>
                        <TrendingDown htmlColor=" #636e72" style={{ fontSize: 17 }}/>
                        <span className='detail'>Sales Report</span>
                    </Link>
                </li>
                <li>
                    <Link to="" style={{width:"100%"}}>
                        <RateReview htmlColor=" #636e72" style={{ fontSize: 17 }}/>
                        <span className='detail'>Reviews</span>
                    </Link>
                </li>
                <li>
                    <Link to="" style={{width:"100%"}}>
                        <MoneyOff htmlColor=" #636e72" style={{ fontSize: 17 }}/>
                        <span className='detail'>Request</span>
                    </Link>
                </li>
            </ul>
        </div>
    </div>
  )
}
