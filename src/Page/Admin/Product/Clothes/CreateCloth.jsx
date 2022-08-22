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
import { CircularProgress, SnackbarContent } from '@mui/material'


// const Alert = React.forwardRef(function Alert(props, ref) {
//     return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
//    n});




function TransitionsSnackbar() {
  
}

export default function CreateCloth() {
    const [name, setName] = useState("")
    const [cat, setCat] = useState([])
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
    const [disable, setDisable] = useState(false)
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
        setError("")
        setMessage("")
      };
    
      const handleClose = () => {
        setState({
          ...state,
          open: false,
        });
      };
      useEffect(()=>{
        const Clothe = async() =>{
          const {data} = await axios.get("https://ecommerces-api.herokuapp.com/api/v1/public/get_all_category")
          setCat(data.data)
        }
        Clothe()
      },[])
    const submitData = async(e) =>{
        try {
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
            setDisable(true)
            const {data} = await axios.post("https://ecommerces-api.herokuapp.com/api/v1/admin/add_product", formData, {headers: {"Authorization": "Bearer 41|kOxux51mqFmCChDku6VI85INKOsPGx000hmCdnpk" }})
            if(data){
                window.location.replace("/admin/product/view")
                setError("")
                setMessage(data.message)
                console.log(data)
                setDisable(false)
            }
            
            
        } catch (error) {
            console.log(error)
            setError(error.response.data.message ? error.response.data.message : error.response.message)
            setMessage("")
            setDisable(false)
        }
       console.log(error)
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
                               
                            </div>
                            <div className="userFormRight">
                                <input type="file" className="custom-file-input" onChange={(e)=>{setAvater(e.target.files[0])}} required/>
                                <input type="file" className="custom-file-input"  onChange={(e)=>{setImages(e.target.files[0])}}/>
                                 <select value={category} onChange={(e)=>{setCategory(e.target.value)}} required>
                                 <option value="">Choose A Category</option>
                                  {
                                    cat?.map((itm, index)=>(
                                      
                                        <option value={itm.name} key={index}>{itm.name}</option>
                                    ))
                                  }
                                    
                                 </select>
                                 <input type="text" placeholder="Enter the Item Available Quantity " value={status} name="status" onChange={(e)=>setStatus(e.target.value)} required/>
                            </div>
                        </div>
                        <textarea rows={10} placeholder='Enter the product Information' required value={description} onChange={(e)=>setDescription(e.target.value)}></textarea>
                        <button type='submit' disabled={disable} className="userCreate" onClick={handleClick(SlideTransition)}>{disable ? <CircularProgress thickness={4.5} sx={{color:"white"}} size="13px"/> : "Create Product"}</button>
                        
                                {
                                    error &&
                                    <Snackbar
                                        open={state.open}
                                        onClose={handleClose}
                                        TransitionComponent={state.Transition}
                                        key={state.Transition.name}
                                        
                                        anchorOrigin={{vertical: "top", horizontal: "right" }}
                                        autoHideDuration = {3000}
                                       >
                                        <SnackbarContent style={{backgroundColor:'red', color:"white"}}
                                          message={error}
                                        />
                                       </Snackbar>
                                }
                       
                                {
                                    message &&
                                    <Snackbar
                                    open={state.open}
                                    onClose={handleClose}
                                    TransitionComponent={state.Transition}
                                    key={state.Transition.name}
                                    
                                    anchorOrigin={{vertical: "top", horizontal: "right" }}
                                    autoHideDuration = {3000}
                                   >
                                    <SnackbarContent style={{backgroundColor:'green', color:"white"}}
                                      message={message}
                                    />
                                   </Snackbar>
                                    
                                }
                    </form>
                    
                </div>
            </div>
        </div>
    </div>
  )
  }
