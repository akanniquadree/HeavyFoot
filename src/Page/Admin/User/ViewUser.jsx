import { Delete, Search } from '@material-ui/icons'
import React from 'react'
import AdminSide from '../Component/AdminSide/AdminSide'
import Topbar from '../Component/Topbar/Topbar'
import "./user.css"

export default function ViewUser() {
  return (
    <div className='user'>
        <Topbar/>
        <div className='userContainer'>
            <AdminSide/>
            <div style={{flex:"7 1"}}>
                <div className="userWrapper">
                    <form className="userWrapperSearchContainer">
                        <div className="userWrapperSearch">
                            <Search/>
                            <input type="search" placeholder="Search User" />
                        </div>
                    </form>
                    <table>
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>First Name</th>
                                <th>LastName</th>
                                <th>Username</th>
                                <th>Email</th>
                                <th>Phone Number</th>
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
                                <td>
                                    <Delete htmlColor="red" style={{fontSize:"15", cursor:"pointer"}}/>
                                </td>
                            </tr>
                            <tr className='trHover'>
                                <td>1</td>
                                <td>Quadree</td>
                                <td>Quadree</td>
                                <td>Quadree</td>
                                <td>Quadree</td>
                                <td>Quadree</td>
                                <td>
                                    <Delete htmlColor="red" style={{fontSize:"15", cursor:"pointer"}}/>
                                </td>
                            </tr>
                            <tr className='trHover'>
                                <td>1</td>
                                <td>Quadree</td>
                                <td>Quadree</td>
                                <td>Quadree</td>
                                <td>Quadree</td>
                                <td>Quadree</td>
                                <td>
                                    <Delete htmlColor="red" style={{fontSize:"15", cursor:"pointer"}}/>
                                </td>
                            </tr>
                            <tr className='trHover'>
                                <td>1</td>
                                <td>Quadree</td>
                                <td>Quadree</td>
                                <td>Quadree</td>
                                <td>Quadree</td>
                                <td>Quadree</td>
                                <td>
                                    <Delete htmlColor="red" style={{fontSize:"15", cursor:"pointer"}}/>
                                </td>
                            </tr>
                            <tr className='trHover'>
                                <td>1</td>
                                <td>Quadree</td>
                                <td>Quadree</td>
                                <td>Quadree</td>
                                <td>Quadree</td>
                                <td>Quadree</td>
                                <td>
                                    <Delete htmlColor="red" style={{fontSize:"15", cursor:"pointer"}}/>
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
