import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import AdminSide from '../../Component/AdminSide/AdminSide'
import Categry from '../../Component/ProductTable/Category'
import Topbar from '../../Component/Topbar/Topbar'
// import "./cloth.css"



export default function ViewCat() {
    return (
        <div className='cloth'>
            <AdminSide/>
            <div style={{flex:"6 1"}}>
                <Topbar/> 
                <div >
                    <div className="clothWrapper">
                        <Categry/>
                    </div>
                </div>
            </div>
        </div>
  )
}