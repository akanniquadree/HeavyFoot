import { Category, Dashboard, MoneyOff, People, PersonAdd, RateReview, Storefront, TrendingDown, ViewArray } from '@material-ui/icons'
// import CheckroomIcon from "@mui/icons-material/Checkroom"
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import "./adminSide.css"

export default function AdminSide() {
    const [users, setUsers] = useState(false)
    const [products, setProducts] = useState(false)
    const userHandler = () =>{
        setUsers(true)
    }
    const userHandlerClose = () =>{
        setUsers(false)
    }
    const productHandler = () =>{
        setProducts(true)
    }
    const productHandlerClose = () =>{
        setProducts(false)
    }
  return (
    <div className="adminSide">
        <div className="adminSideWrapper">
            <ul>
                <li>
                    <Link to="" style={{width:"100%"}}>
                        <Dashboard htmlColor="black" style={{ fontSize: 15 }}/>
                        <span className='detail'>Dashboard</span>
                    </Link>
                </li>
                <li onMouseOver={()=>{userHandler()}} onMouseLeave={()=>{userHandlerClose()}}>
                    <Link to="" style={{width:"100%"}}>
                        <People htmlColor="black" style={{ fontSize: 15 }}/>
                        <span className='detail'>Users</span>
                    </Link>
                </li>
                {
                    users &&
                    <li  onMouseOver={()=>{userHandler()}} onMouseLeave={()=>{userHandlerClose()}} className="mouseOver">
                        <ul>
                            <li>
                                <Link to="" style={{width:"100%"}}>
                                    <PersonAdd htmlColor="black" style={{ fontSize: 15 }}/>
                                    <span className='detail'>Add Users</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="" style={{width:"100%"}}>
                                    <ViewArray htmlColor="black" style={{ fontSize: 15 }}/>
                                    <span className='detail'>View Users</span>
                                </Link>
                            </li>
                        </ul>
                    </li>
                }
                <li onMouseOver={()=>{productHandler()}} onMouseLeave={()=>{productHandlerClose()}}>
                    <Link to="" style={{width:"100%"}}>
                        <Category htmlColor="black" style={{ fontSize: 15 }}/>
                        <span className='detail'>Products</span>
                    </Link>
                </li>
                {
                    products &&
                    <li onMouseOver={()=>{productHandler()}} onMouseLeave={()=>{productHandlerClose()}} className="mouseOver">
                        <ul>
                            <li>
                                <Link to="" style={{width:"100%"}}>
                                    <Category htmlColor="black" style={{ fontSize: 15 }}/>
                                    <span className='detail'>Clothes</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="" style={{width:"100%"}}>
                                    <PersonAdd htmlColor="black" style={{ fontSize: 15 }}/>
                                    <span className='detail'>Bags</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="" style={{width:"100%"}}>
                                    <PersonAdd htmlColor="black" style={{ fontSize: 15 }}/>
                                    <span className='detail'>Footwears</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="" style={{width:"100%"}}>
                                    <PersonAdd htmlColor="black" style={{ fontSize: 15 }}/>
                                    <span className='detail'>Headwears</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="" style={{width:"100%"}}>
                                    <PersonAdd htmlColor="black" style={{ fontSize: 15 }}/>
                                    <span className='detail'>Accessories</span>
                                </Link>
                            </li>
                        </ul>
                    </li>
                }
                <li>
                    <Link to="" style={{width:"100%"}}>
                        <Storefront htmlColor="black" style={{ fontSize: 15 }}/>
                        <span className='detail'>Orders</span>
                    </Link>
                </li>
                <li>
                    <Link to="" style={{width:"100%"}}>
                        <TrendingDown htmlColor="black" style={{ fontSize: 15 }}/>
                        <span className='detail'>Sales Report</span>
                    </Link>
                </li>
                <li>
                    <Link to="" style={{width:"100%"}}>
                        <RateReview htmlColor="black" style={{ fontSize: 15 }}/>
                        <span className='detail'>Reviews</span>
                    </Link>
                </li>
                <li>
                    <Link to="" style={{width:"100%"}}>
                        <MoneyOff htmlColor="black" style={{ fontSize: 15 }}/>
                        <span className='detail'>Request</span>
                    </Link>
                </li>
            </ul>
        </div>
    </div>
  )
}
