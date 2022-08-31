import React, {useEffect, useMemo, useState} from 'react'
import TablePagination from '@mui/material/TablePagination';
import { ArrowDownward, ArrowUpward, Delete, Edit, EditSharp, MoreVert, Search } from '@material-ui/icons'
import { Link } from 'react-router-dom'
import { Menu, MenuItem } from '@material-ui/core'
// import { data } from '../Data'
import "../../Product/Clothes/cloth.css"
import axios from "axios"
import DeleteModal from '../../Product/Clothes/DeleteModal';
import EditCatModal from '../../Product/Category/EditCategory';
import { DataGrid, gridClasses} from '@mui/x-data-grid';
import Box from '@mui/material/Box';
import { alpha, styled } from '@mui/material/styles';
import { DeleteForever} from "@material-ui/icons";
import { useRef } from 'react';
import Fade from '@mui/material/Fade';
import Slide from '@mui/material/Slide';


const ODD_OPACITY = 0.2;

const StripedDataGrid = styled(DataGrid)(({ theme }) => ({
  [`& .${gridClasses.row}.even`]: {
    backgroundColor: theme.palette.grey[200],
    '&:hover, &.Mui-hovered': {
      backgroundColor: alpha(theme.palette.primary.main, ODD_OPACITY),
      '@media (hover: none)': {
        backgroundColor: 'transparent',
      },
    },
    '&.Mui-selected': {
      backgroundColor: alpha(
        theme.palette.primary.main,
        ODD_OPACITY + theme.palette.action.selectedOpacity,
      ),
      '&:hover, &.Mui-hovered': {
        backgroundColor: alpha(
          theme.palette.primary.main,
          ODD_OPACITY +
            theme.palette.action.selectedOpacity +
            theme.palette.action.hoverOpacity,
        ),
        // Reset on touch devices, it doesn't add specificity
        '@media (hover: none)': {
          backgroundColor: alpha(
            theme.palette.primary.main,
            ODD_OPACITY + theme.palette.action.selectedOpacity,
          ),
        },
      },
    },
  },
}));

export default function Categry() {
    const [product, setProduct] = useState([])
    const [open, setOpen] = useState(false);
    const [openEdit, setOpenEdit] = useState(false);
    const [error, setError] = useState("")
    const [message, setMessage] = useState("")
    const [state, setState] = useState({open: false,Transition: Fade});
    const [disable, setDisable] = useState(false)
    // const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const handleCloseEdit = () => setOpenEdit(false);
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
    useEffect(()=>{
      let ignore = false
      if(!ignore){
        const Clothe = async() =>{
          const {data} = await axios.get("https://ecommerces-api.herokuapp.com/api/v1/public/get_all_category")
          setProduct(data.data)
        }
        Clothe()
      }
      return ()=>{ignore = true}
    },[])
    const idProductRef =useRef()
    const deleteProduct = (id) =>{
      setOpen(true)
      idProductRef.current = id
    }
    const ConfirmDelete = async(choose) =>{
      if(choose){
        const deleted = await axios.delete(`https://ecommerces-api.herokuapp.com/api/v1/admin/delete_category/${idProductRef.current}`, {headers: {"Authorization": "Bearer " +localStorage.getItem("admintoken") }})
        if(deleted){
          setProduct(product.filter((item)=>item.id !== idProductRef.current))
          setOpen(false)
        }
      }
    }
    const nameCatRef = useRef()
    const idCatRef = useRef()
    const EditCat = (name, id) =>{
     nameCatRef.current = name
     idCatRef.current = id
     setOpenEdit(true)
    }
    const ConfirmEdit = async (name) =>{
      try{
        setDisable(true)
        const EditData = await axios.put(`https://ecommerces-api.herokuapp.com/api/v1/admin/edit_category/${idCatRef.current}`, {"name":name} ,{headers: {"Authorization": "Bearer " +localStorage.getItem("admintoken") }})
        if(EditData){
           const newData = product.map((itm)=>{
              if(itm.id === idCatRef.current){
                return EditData
              }else{
               return itm
              }
            })
            setProduct(newData)
            setOpenEdit(false)
            setError("")
            setMessage(EditData.data.message)
            setDisable(false)
        }
    }catch(error){
        console.log(error)
        setError(error.response.data.errors.name)
        setDisable(false)
    }
    }
    let idCounter = 0
    const row = product?.map((itm)=>{
      idCounter += 1
      return{
      name : itm?.name,
      id : idCounter,
      _id: itm?.id
    }})
    const columns = [
      { field: 'id', headerName: 'S/N', width: 150},
      { field: '_id', headerName: 'ID', width: 150},
      { field: 'name', headerName: 'Category name', width: 720 },
       {field: 'action', headerName: 'Action', width: 100,renderCell: (params)=>{
                return(
                      <div>
                          <EditSharp  style={{marginLeft:"5px",marginRight:"5px",color:"green",cursor:"pointer"}} onClick={()=> {EditCat(params.row.name, params.row._id)}}/>
                          <DeleteForever className='tiny material-icons' style={{marginRight:"5px",color:"red",cursor:"pointer"}} onClick={()=> {deleteProduct(params.row._id)}}/>
                          <DeleteModal open={open} handleClose={handleClose} onDelete={ConfirmDelete}/>
                          <EditCatModal state={state} oldName={nameCatRef.current} handleClick={handleClick} disable={disable} handleCloset={handleCloset} open={openEdit} error={error} message={message} handleClose={handleCloseEdit} onEdit={ConfirmEdit}/>
                      </div>
                  )},}
    ]
    
    
    
  return (
      <>
         <div className="clothWrapperSearchContainer">
            <Link to="/admin/category/create">
              <button className="clothWrapperButton">Create New Category</button>
            </Link>
        </div>
        <Box sx={{
            height: "100%",
            width: 1,
            '& .super-app-theme--header': {
            backgroundColor: '#1775ee',}}}>
            <DataGrid
                style={{ fontSize: "13px",}}
                rows={row}
                columns={columns}
                pageSize={9}
                rowsPerPageOptions={[9]}
                disableSelectionOnClick
                getRowClassName={(params) =>
                    params.indexRelativeToCurrentPage % 2 === 0 ? 'even' : 'odd'
                }
                // getRowId={(row) => row.no}
                id={Math.random()}
            />
        </Box>
        
      </>
    
  )
}
