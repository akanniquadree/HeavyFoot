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


function DeleteProductModal({open, change,product,handleClose, setOpen, id}) {
  const deleteProduct = async(id) =>{
    await axios.delete(`https://ecommerces-api.herokuapp.com/api/v1/admin/delete_product/${id}`, {headers: {"Authorization": "Bearer " +localStorage.getItem("admintoken") }}).then((result)=>{
      const newData = product.filter(item=>{return item.id !== id})
      change(newData)
      setOpen(false)
      
  })
}

  return (
    <Modal
        aria-labelledby="transition-modal-title" aria-describedby="transition-modal-description"
        open={open} onClose={handleClose} closeAfterTransition
        BackdropComponent={Backdrop} BackdropProps={{ timeout: 500, }}
    >
        <Fade in={open}>
            <Box sx={style}>
                <Typography id="transition-modal-title" variant="h6" component="h2" align="center">
                    Are you sure you want to delete this Product
                </Typography>
                <div style={{display:"flex", justifyContent:"space-around", marginTop:"10px"}}>
                    <button onClick={()=> {deleteProduct(id)}} style={{backgroundColor:"red",cursor:"pointer",border:"none", padding:"10px 20px", fontSize:"16px", color:"white"}}>Yes</button>
                    <button onClick={handleClose}   style={{backgroundColor:"green",cursor:"pointer",border:"none", padding:"10px 20px", fontSize:"16px", color:"white"}}>No</button>
                </div>
            </Box>
        </Fade>
    </Modal>
  )
}

export default DeleteProductModal