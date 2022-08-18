import React from 'react'
import { useState } from 'react'
import AdminSide from '../../Component/AdminSide/AdminSide'
import Topbar from '../../Component/Topbar/Topbar'
import axios from "axios"
import CircularProgress from '@mui/material/CircularProgress';
import Snackbar from '@mui/material/Snackbar';
import Fade from '@mui/material/Fade';
import Slide from '@mui/material/Slide';
import Grow from '@mui/material/Grow';
import { SnackbarContent } from '@mui/material'
;

export default function CreateCat() {
    const [name, setName] = useState("")
    const [error, setError] = useState("")
    const [message, setMessage] = useState("")
    const [state, setState] = useState({open: false,Transition: Fade});
    const [disable, setDisable] = useState(false)
    
    const submitData = async(e) =>{
      try {
          e.preventDefault()
          const formData = new FormData()
          formData.append("name", name)
          setDisable(true)
          const {data} = await axios.post("https://ecommerces-api.herokuapp.com/api/v1/admin/add_category", formData, {headers: {"Authorization": "Bearer " +localStorage.getItem("admintoken") }})
          if(data){
              window.location.replace("/admin/category/view")
              setError("")
              setMessage(data.message)
              console.log(data)
              setDisable(false)
          }
          
          
      } catch (error) {
          console.log(error)
          setError(error.response.data.errors.name)
          setDisable(false)
      }
      console.log(error) 
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
                                <input type="text" placeholder="Enter the Item Category Name" name="name" value={name} onChange={(e)=>setName(e.target.value)} required/>
                            </div>
                        </div>
                        <button type='submit' className="userCreate" disabled={disable} onClick={handleClick(SlideTransition)}>{disable ? <CircularProgress thickness={4.5} sx={{color:"white"}} size="13px"/>:"Create Category"}</button>
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
                                    <SnackbarContent style={{ backgroundColor:"red"}}
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
                                    <SnackbarContent style={{ backgroundColor:"green"}}
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
