import React from 'react'
import { useState } from 'react'
import AdminSide from '../../Component/AdminSide/AdminSide'
import Topbar from '../../Component/Topbar/Topbar'
import axios from "axios"
import Stack from '@mui/material/Stack';
import MuiAlert from '@mui/material/Alert';


const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

export default function CreateCloth() {
    const [name, setName] = useState("")
    const [price, setPrice] = useState("")
    const [discount, setDiscount] = useState("")
    const [quantity, setQuantity] = useState("")
    const [status, setStatus] = useState("")
    const [category, setCategory] = useState("")
    const [description, setDescription] = useState("")
    const [avater, setAvater] = useState("")
    const [images, setImages] = useState("")
    const [error, setError] = useState("")
    const [message, setMessage] = useState("")
    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
      setOpen(true);
    };
  
    const handleClose = (event, reason) => {
      if (reason === 'clickaway') {
        return;
      }
  
      setOpen(false);
    };

    const submitData = async(e) =>{
        try {
            e.preventDefault()
            const formData = new FormData()
            formData.append("name", name)
            formData.append("file", images)
            formData.append("avater", avater)
            formData.append("price", price)
            formData.append("quantity", quantity)
            formData.append("category", category)
            formData.append("discount", discount)
            formData.append("status", status)
            formData.append("description", description)
            const data = await axios.post("https://ecommerces-api.herokuapp.com/api/v1/admin/add_product", formData, {headers: {"Authorization": "Bearer 31|kEcedFEn6Y4KJaRDGbLvm2i9Uqfd6QEL2k5h3tGk" }})
            if(data){
                window.location.replace("/admin/product/view")
                setError("")
                setMessage(data.message)
            }
            
            
        } catch (error) {
            console.log(error)
            setError(error.response.data.errors)
        }
       
    }
  return (
    <div className='cloth'>
        <AdminSide/>
        <div style={{flex:"6 1"}}>
            <Topbar/>
            <div>
                <div className="userWrapper">
                    <form onSubmit={submitData} encType="multipart/form-data">
                        <div className="userForm">
                            <div className="userFormLeft">
                                <input type="text" placeholder="Enter the Item Name" name="name" value={name} onChange={(e)=>setName(e.target.value)} required/>
                                <input type="text" placeholder="Enter the Item Product Price" name="price" value={price} onChange={(e)=>setPrice(e.target.value)} required/>
                                <input type="text" placeholder="Enter the Item Discount Price" name="discount" value={discount} onChange={(e)=>setDiscount(e.target.value)} required/>
                                <input type="text" placeholder="Enter the Item Quantity" value={quantity} name="quantity" onChange={(e)=>setQuantity(e.target.value)} required/>
                                <input type="text" placeholder="Enter the Item Available Quantity " value={status} name="status" onChange={(e)=>setStatus(e.target.value)} required/>
                            </div>
                            <div className="userFormRight">
                                <input type="file" className="custom-file-input" onChange={(e)=>{setAvater(e.target.files[0])}} />
                                <input type="file" className="custom-file-input"  onChange={(e)=>{setImages(e.target.files[0])}}/>
                                 <input type="text" placeholder="Enter the Item Category " value={category} name="category" onChange={(e)=>setCategory(e.target.value)} required/>
                            </div>
                        </div>
                        <textarea  placeholder='Enter the product Information' required value={description} onChange={(e)=>setDescription(e.target.value)}></textarea>
                        <button type='submit' className="userCreate" onClick={handleClick}>Create Product</button>
                    </form>
                    <Stack sx={{ width: '100%' }} open={open} autoHideDuration={6000} onClose={handleClose}>
                        {
                            error &&
                            <Alert  onClose={handleClose} severity="error" sx={{ width: '100%' }}>
                                {error}
                            </Alert>
                        }
                       
                        {
                            message &&
                            <Alert  onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                                This is an info alert — check it out!
                            </Alert>
                        }
                        
                    </Stack>
                </div>
            </div>
        </div>
    </div>
  )
  }
