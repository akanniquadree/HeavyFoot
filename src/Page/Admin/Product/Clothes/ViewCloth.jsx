import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import AdminSide from '../../Component/AdminSide/AdminSide'
import Cloths from '../../Component/ProductTable/Cloths'

import Topbar from '../../Component/Topbar/Topbar'
import "./cloth.css"



export default function ViewCloth() {
    
    return (
        <div className='cloth'>
            <AdminSide/>
            <div style={{flex:"6 1"}}>
                <Topbar/> 
                <div >
                    <div className="clothWrapper">
                        <Cloths/>
                    </div> 
                </div>
            </div>
        </div>
  )
}