import React, { useState } from 'react'
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import axios from "axios"
import CircularProgress from '@mui/material/CircularProgress';
import Snackbar from '@mui/material/Snackbar';
import Slide from '@mui/material/Slide';
import Grow from '@mui/material/Grow';
import { SnackbarContent } from '@mui/material'
import Typography from '@mui/material/Typography';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  height:"250px"
};


function EditCatModal({open, handleClose, setOpen, id, oldName}) {
    const [name, setName] = useState(oldName.name)
    const [error, setError] = useState("")
    const [message, setMessage] = useState("")
    const [state, setState] = useState({open: false,Transition: Fade});
    const [disable, setDisable] = useState(false)
    console.log(oldName)
  const EditCat = async(e) =>{
    e.preventDefault()
    try{
        const formData = new FormData()
        formData.append("name", name)
        setDisable(true)
    const deleted = await axios.put(`https://ecommerces-api.herokuapp.com/api/v1/admin/edit_category/${id}`, {"name":name} ,{headers: {"Authorization": "Bearer " +localStorage.getItem("admintoken") }})
        if(deleted){
            setOpen(false)
            setError("")
            setMessage(deleted.data.message)
            setDisable(false)
        }
    }catch(error){
        console.log(error)
        setError(error.response.data.errors.name)
        setDisable(false)
    }
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
    
      const handleCloset = () => {
        setState({
          ...state,
          open: false,
        });
      };

  return (
    <Modal
        aria-labelledby="transition-modal-title" aria-describedby="transition-modal-description"
        open={open} onClose={handleClose} closeAfterTransition
        BackdropComponent={Backdrop} BackdropProps={{ timeout: 500, }}
    >
        <Fade in={open}>
            <Box sx={style}>
                <Typography id="transition-modal-title" variant="h6" component="h2" align="center">
                    Edit Product Category
                </Typography>
                <form onSubmit={EditCat} >
                        <div className="userForm">
                            <div className="userFormLeft">
                                <input type="text" placeholder="Enter the Item Category Name" name="name" value={name} onChange={(e)=>setName(e.target.value)} required/>
                            </div>
                        </div>
                        <button type='submit' className="userCreate" disabled={disable} onClick={handleClick(SlideTransition)}>{disable ? <CircularProgress thickness={4.5} sx={{color:"white"}} size="13px"/>:"Update Category Name"}</button>
                                {
                                    error &&
                                    <Snackbar
                                    open={state.open}
                                    onClose={handleCloset}
                                    TransitionComponent={state.Transition}
                                    key={state.Transition.name}
                                    
                                    anchorOrigin={{vertical: "bottom", horizontal: "center" }}
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
                                    onClose={handleCloset}
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
            </Box>
        </Fade>
    </Modal>
  )
}

export default EditCatModal