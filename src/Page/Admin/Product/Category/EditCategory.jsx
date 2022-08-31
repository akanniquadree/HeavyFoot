import React, { useState, useEffect } from 'react'
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


function EditCatModal({handleClick, disable, handleClose, open, error, message,state, handleCloset, onEdit, oldName}) {
    const [name, setName] = useState("")
    function SlideTransition(props) {
      return <Slide {...props} direction="up" />;
    }
    useEffect(()=>{
        setName(oldName)
    },[oldName])
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
                <form onSubmit={(e)=>{e.preventDefault();onEdit(name)}} >
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