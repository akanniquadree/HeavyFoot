import React, { useEffect } from 'react'
import { useState } from 'react'
import AdminSide from '../../Component/AdminSide/AdminSide'
import Topbar from '../../Component/Topbar/Topbar'
import axios from "axios"
import Stack from '@mui/material/Stack';
import MuiAlert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';
import Fade from '@mui/material/Fade';
import Slide from '@mui/material/Slide';
import Grow from '@mui/material/Grow';
import { useParams } from 'react-router-dom'

export default function EditCloth() {
    const {id} = useParams()
    const [product, setProduct] = useState([])
    const [singleProduct, setSingleProduct]= useState({})
    const [name, setName] = useState(product.filter((thisProject) => String(thisProject.id) === id)[0]?.name)
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
          console.log(typeof(name))
    
    const [state, setState] = useState({
        open: false,
        Transition: Fade,
      });
    
      function GrowTransition(props) {
        return <Grow {...props} />;
      }
    
      function SlideTransition(props) {
        return <Slide {...props} direction="up" />;
      }
      
    
      const handleClick = (Transition) => () => {
        setState({
          open: true,
          Transition,
        });
      };
    
      const handleClose = () => {
        setState({
          ...state,
          open: false,
        });
      };

    useEffect(()=>{
      const Clothe = async() =>{
        const {data} = await axios.get("https://ecommerces-api.herokuapp.com/api/v1/public/get_all_products")
        if(data){
          setProduct(data)
        }
      }
      Clothe()
      
    },[])
    

   const submitHandler = async(e) =>{
    try{
      e.preventDefault()
      const formData = new FormData()
      formData.append("name", name)
      formData.append("images", images)
      formData.append("avater", avater)
      formData.append("price", price)
      formData.append("quantity", quantity)
      formData.append("category", category)
      formData.append("discount", discount)
      formData.append("status", status)
      formData.append("description", description)
      const data = await axios.put(`https://ecommerces-api.herokuapp.com/v1/admin/edit_product/${id}`,formData, {headers: {"Authorization": "Bearer 41|kOxux51mqFmCChDku6VI85INKOsPGx000hmCdnpk" }})
      if(data){
            setMessage(data.message)
      }
    }catch(error){

    }
    
  }

  return (
    <div className='cloth'>
    <AdminSide/>
    <div style={{flex:"6 1"}}>
        <Topbar/>
        <div>
            <div className="userWrapper">
                <form onSubmit={submitHandler} encType="multipart/form-data">
                    <div className="userForm">
                        <div className="userFormLeft">
                            
                            <label>Item Name:</label>
                            <input type="text" placeholder="Enter the Item Name" name="name" value={name} onChange={(e)=>setName(e.target.value)} required/>
                            <label>Item Price:</label>
                            <input type="text" placeholder="Enter the Item Product Price" name="price" value={price} onChange={(e)=>setPrice(e.target.value)} required/>
                            <label>Item Discount Price:</label>
                            <input type="text" placeholder="Enter the Item Discount Price" name="discount" value={discount} onChange={(e)=>setDiscount(e.target.value)} required/>
                            <label>Item Quantity:</label>
                            <input type="text" placeholder="Enter the Item Quantity" value={quantity} name="quantity" onChange={(e)=>setQuantity(e.target.value)} required/>
                           
                        </div>
                        <div className="userFormRight">
                            <label>Item Avater:</label>
                            <input type="file" className="custom-file-input" onChange={(e)=>{setAvater(e.target.files[0])}} />
                            <label>Item Other Images:</label>
                            <input type="file" className="custom-file-input"  onChange={(e)=>{setImages(e.target.files[0])}}/>
                            <label>Item Category:</label>
                             <input type="text" placeholder="Enter the Item Category " value={category} name="category" onChange={(e)=>setCategory(e.target.value)} required/>
                             <label>Item Status:</label>
                             <input type="text" placeholder="Enter the Item Available Quantity " value={status} name="status" onChange={(e)=>setStatus(e.target.value)} required/>
                        </div>
                    </div>
                    <textarea rows={8} placeholder='Enter the product Information' required value={description} onChange={(e)=>setDescription(e.target.value)}></textarea>
                    <button type='submit' className="userCreate" onClick={handleClick(SlideTransition)}>Create Product</button>
                    
                            {
                                error &&
                                <Snackbar
                                    open={state.open}
                                    onClose={handleClose}
                                    TransitionComponent={state.Transition}
                                    message="I love snacks"
                                    key={state.Transition.name}
                                    
                                />
                            }
                   
                            {
                                message &&
                                <Snackbar
                                    open={state.open}
                                    onClose={handleClose}
                                    TransitionComponent={state.Transition}
                                    message={message}
                                    key={state.Transition.name}
                                />
                                
                            }
                </form>
                
            </div>
        </div>
    </div>
</div>
  )
}
