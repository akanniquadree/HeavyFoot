import { Delete, Search } from '@material-ui/icons'
import React from 'react'
import AdminSide from '../Component/AdminSide/AdminSide'
import Topbar from '../Component/Topbar/Topbar'
import UserData from '../Component/UserTable/UserData'
import "./user.css"

export default function ViewUser() {  
  
   
    return (
        <div className='cloth'>
            <AdminSide/>
            <div style={{flex:"6 1"}}>
                <Topbar/> 
                <div >
                    <div className="clothWrapper">
                        <UserData/>
                    </div> 
                </div>
            </div>
        </div>
    )
}
