import React from 'react'
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import axios from "axios"
import Button from '@mui/material/Button';
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
};


function DeleteCat({open, handleClose,setOpen, id}) {
    const deleteCat = async() =>{
        const deleted = await axios.delete(`https://ecommerces-api.herokuapp.com/api/v1/admin/delete_category/${id}`, {headers: {"Authorization": "Bearer 41|kOxux51mqFmCChDku6VI85INKOsPGx000hmCdnpk" }})
        setOpen(false)
    }

  return (
    <Modal
        aria-labelledby="transition-modal-title" aria-describedby="transition-modal-description"
        open={open} onClose={handleClose} closeAfterTransition
        BackdropComponent={Backdrop} BackdropProps={{ timeout: 500, }}
    >
        <Fade in={open}>
            <Box sx={style}>
                <Typography id="transition-modal-title" variant="h6" component="h2">
                    Are you sure you want to delete this Category
                </Typography>
                <div style={{display:"flex", justifyContent:"space-around", marginTop:"10px"}}>
                    <button onClick={()=> {deleteCat()}} style={{backgroundColor:"red",cursor:"pointer",border:"none", padding:"10px 20px", fontSize:"16px", color:"white"}}>Yes</button>
                    <button onClick={handleClose}   style={{backgroundColor:"green",cursor:"pointer",border:"none", padding:"10px 20px", fontSize:"16px", color:"white"}}>No</button>
                </div>
            </Box>
        </Fade>
    </Modal>
  )
}

export default DeleteCat