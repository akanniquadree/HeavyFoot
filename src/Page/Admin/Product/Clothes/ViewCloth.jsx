import { Delete, Edit, Search } from '@material-ui/icons'
import React from 'react'
import AdminSide from '../../Component/AdminSide/AdminSide'
import Topbar from '../../Component/Topbar/Topbar'
import "./cloth.css"

export default function ViewCloth() {
  return (
    <div className='cloth'>
        <Topbar/>
        <div className='clothContainer'>
            <AdminSide/>
            <div style={{flex:"7 1"}}>
                <div className="clothWrapper">
                    <form className="clothWrapperSearchContainer" style={{justifyContent:"space-between"}}>
                        <button >Create New Product</button>
                        <div className="clothWrapperSearch">
                            <Search/>
                            <input type="search" placeholder="Search Cloth" />
                        </div>
                    </form>
                    <table>
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Name</th>
                                <th>Discount Price</th>
                                <th>Product Price</th>
                                <th>Quantity</th>
                                <th>Number of Reviews</th>
                                <th>Product Information</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className='trHover'>
                                <td>1</td>
                                <td>Quadree</td>
                                <td>Quadree</td>
                                <td>Quadree</td>
                                <td>Quadree</td>
                                <td>Quadree</td>
                                <td>Quadree</td>
                                <td>
                                    <Edit htmlColor="green" style={{fontSize:"20", cursor:"pointer",marginRight:"10px"}}/>
                                    <Delete htmlColor="red" style={{fontSize:"20", cursor:"pointer",}}/>
                                </td>
                            </tr>
                           
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
  )
}