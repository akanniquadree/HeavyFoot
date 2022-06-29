import React from 'react'
import AdminSide from '../../Component/AdminSide/AdminSide'
import Topbar from '../../Component/Topbar/Topbar'

export default function CreateCloth() {
  return (
    <div className='user'>
        <Topbar/>
        <div className='userContainer'>
            <AdminSide/>
            <div style={{flex:"7 1"}}>
                <div className="userWrapper">
                    <form >
                        <div className="userForm">
                            <div className="userFormLeft">
                                <input type="text" placeholder="Enter the Item Name" required/>
                                <input type="text" placeholder="Enter the Item Discount Price" required/>
                                <input type="text" placeholder="Enter the Item Discount Price" required/>
                                <input type="text" placeholder="Enter the Item Discount Price" required/>
                                <input type="text" placeholder="Enter the Item Discount Price" required/>
                            </div>
                            <div className="userFormRight">
                                <input type="text" placeholder="Enter the Item Price" required/>
                                <input type="text" placeholder="Enter the Item Price" required/>
                                <input type="text" placeholder="Enter the Item Price" required/>
                                <input type="text" placeholder="Enter the Item Price" required/>
                                <input type="text" placeholder="Enter the Item Price" required/>
                            </div>
                        </div>
                        <textarea name="" id="" placeholder='Enter the product Information'></textarea>
                        <button className="userCreate">Create Product</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}
