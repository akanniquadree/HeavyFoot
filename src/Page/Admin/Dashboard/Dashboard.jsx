import React from 'react'
import AdminChart from '../Component/AdminChart/AdminChart'
import AdminSide from '../Component/AdminSide/AdminSide'
import DashTop from '../Component/DashTop/DashTop'
import Topbar from '../Component/Topbar/Topbar'
import "./dashboard.css"

export default function Dashboard() {
  return (
        <div className='cloth'>
            <AdminSide/>
            <div style={{flex:"6 1"}}>
                <Topbar/>
                <div style={{padding:"20px"}}>
                <DashTop/>
                <div className='dashboard'>
                  <AdminChart/>
                  <div style={{flex:"1 1"}}>
                    <AdminChart/>
                  </div>
                </div>
                </div>
            </div>
        </div>
  )
}
