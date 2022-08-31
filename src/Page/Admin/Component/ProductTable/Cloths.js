import React, {useEffect, useRef, useState} from 'react'
import { ArrowDownward, ArrowUpward, Delete, Edit, MoreVert, Search } from '@material-ui/icons'
import { Link } from 'react-router-dom'
// import { data } from '../Data'
import "../../Product/Clothes/cloth.css"
import axios from "axios"
import DeleteProductModal from '../../Product/Clothes/DeleteProductModal';
import DeleteModal from '../../Product/Clothes/DeleteModal';
import { DataGrid, gridClasses} from '@mui/x-data-grid';
import Box from '@mui/material/Box';
import { alpha, styled } from '@mui/material/styles';
import { DeleteForever} from "@material-ui/icons";


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

export default function Cloths() {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [product, setProduct] = useState([])
    
    useEffect(()=>{
      const Clothe = async() =>{
        const {data} = await axios.get("https://ecommerces-api.herokuapp.com/api/v1/public/get_all_products")
        setProduct(data)
      }
      Clothe()
    },[])
    
  const row = product?.map((itm)=>{
    return{
    name : itm.name,
    category : itm.category,
    price : itm.price,
    id:itm.id,
    discount : itm.discount,
    quantity : itm.quantity,
    status : itm.status,
    avater:itm.avater,
    description:itm.description
  }})
  const columns = [
    { field: 'id', headerName: 'ID', width: 50 },
    { field: 'name', headerName: 'Product name', width: 240 },
    { field: 'category', headerName: 'Category', width: 100 },
    { field: 'price', headerName: 'Price', width: 70 },
    { field: 'discount', headerName: 'Discount', width: 70 },
    { field: 'quantity', headerName: 'Qty', width: 60 },
    { field: 'status', headerName: 'Status', width: 60 },
    { field: 'description', headerName: 'Description', width: 330 },
     {field: 'action', headerName: 'Action', width: 70,renderCell: (params)=>{
              return(
                    <div>
                      <Link to={`/admin/product/editcloth/${params.row.id}`}><Edit  style={{marginLeft:"5px",marginRight:"5px",color:"green",cursor:"pointer"}}/></Link>
                      <DeleteForever className='tiny material-icons' style={{marginRight:"5px",color:"red",cursor:"pointer"}} onClick={()=>HandleDelete(params.row.id)}/>
                      <DeleteProductModal onDelete={confirmDelete} open={open} handleClose={handleClose}/>
                    </div>
                )},}
  ]
  const IdProdRef = useRef()
   const HandleDelete = (id) =>{
        setOpen(true)
        IdProdRef.current = id
   }
   const confirmDelete = async(choose) =>{
      if(choose){
        await axios.delete(`https://ecommerces-api.herokuapp.com/api/v1/admin/delete_product/${IdProdRef.current}`, {headers: {"Authorization": "Bearer " +localStorage.getItem("admintoken") }}).then((result)=>{
        const newData = product.filter(item=>{return item.id !== IdProdRef.current})
        if(newData){
          setProduct(newData)
          setOpen(false)
        }
  })
      }
   }
  return (
      <>
        <div className="clothWrapperSearchContainer">
              <Link to="/admin/product/create">
                <button className="clothWrapperButton">Create New Product</button>
              </Link>
        </div> 
        <Box sx={{
          height: "100%",
          width: 1,
          '& .super-app-theme--header': {
          backgroundColor: '#1775ee',}}}>
          <StripedDataGrid
              style={{ fontSize: "13px",}}
              rows={row}
              columns={columns}
              pageSize={9}
              rowsPerPageOptions={[9]}
              disableSelectionOnClick
              getRowClassName={(params) =>
                  params.indexRelativeToCurrentPage % 2 === 0 ? 'even' : 'odd'
              }
          />
      </Box>  
      </>
    
  )
}
