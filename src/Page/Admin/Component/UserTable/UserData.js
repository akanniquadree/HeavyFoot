import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
// import { data } from '../Data'
import "../../Product/Clothes/cloth.css"
import axios from "axios"
import DeleteModal from '../../Product/Clothes/DeleteModal';
import { DataGrid, gridClasses} from '@mui/x-data-grid';
import Box from '@mui/material/Box';
import { alpha, styled } from '@mui/material/styles';
import { DeleteForever} from "@material-ui/icons";

const columns = [
  { field: 'id', headerName: 'ID', width: 60 },
  { field: 'firstName', headerName: 'First name', width: 170 },
  { field: 'lastName', headerName: 'Last name', width: 170 },
  { field: 'userName', headerName: 'User name', width: 170 },
  { field: 'email', headerName: 'Email', width: 210 },
  { field: 'phone', headerName: 'Phone Number', width: 200 },
   {field: 'action', headerName: 'Action', width: 70,renderCell: (params)=>{
            return(
                  <div>
                      <DeleteForever className='tiny material-icons' style={{marginRight:"5px",color:"red",cursor:"pointer"}} />
                  </div>
              )},}
]
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
export default function UserData() {
  const [product, setProduct] = useState([])
  // const [page, setPage] = useState(0);
  // const [rowsPerPage, setRowsPerPage] = useState(5);
  // const indexOfLastPage = page * rowsPerPage
  // const indexOfFirstPage = indexOfLastPage + rowsPerPage
  // const currentPosts = product?.slice(indexOfLastPage, indexOfFirstPage)
  useEffect(()=>{
    let ignore = false
    if(!ignore){
    const Clothe = async() =>{
      const {data} = await axios.get("https://ecommerces-api.herokuapp.com/api/v1/admin/get_all_users", {headers:{"Authorization":"Bearer 41|kOxux51mqFmCChDku6VI85INKOsPGx000hmCdnpk"}})
      setProduct(data.data)
    }
    Clothe()
  }
    return () => {ignore = true}
  },[product.id])
  const row = product?.map((itm)=>{
    return{
    userName : itm.userName,
    lastName : itm.lastName,
    id : itm.id,
    email : itm.email,
    phone : itm.phone,
    firstName : itm.firstName,
  }})
return (
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
  
  )
}
