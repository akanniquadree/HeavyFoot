import React from 'react'
import AdminSide from '../Component/AdminSide/AdminSide'
import DashTop from '../Component/DashTop/DashTop'
import Topbar from '../Component/Topbar/Topbar'
import "./dashboard.css"

export default function Dashboard() {
  return (
    <div className='dash'>
        <Topbar/>
        <div className='dashboard'>
            <AdminSide/>
            <div style={{flex:"7 1"}}>
                <DashTop/>
            </div>
        </div>
    </div>
    
  )
}
