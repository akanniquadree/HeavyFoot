import "./salesReport.css"
import React from 'react'
import AdminSide from "../Component/AdminSide/AdminSide"
import Topbar from "../Component/Topbar/Topbar"
import Sales from "../Component/Sales/Sales"

function SalesReport() {
    
  return (
        <div className='dashboard'>
            <AdminSide/>
            <div style={{flex:"5 1", paddingLeft:"30px"}}>
                <Topbar/>
                <Sales/>
            </div>
        </div>
  )
}

export default SalesReport