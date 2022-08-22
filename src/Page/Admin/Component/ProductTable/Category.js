import React, {useEffect, useState} from 'react'
import TablePagination from '@mui/material/TablePagination';
import { ArrowDownward, ArrowUpward, Delete, Edit, MoreVert, Search } from '@material-ui/icons'
import { Link } from 'react-router-dom'
import { Menu, MenuItem } from '@material-ui/core'
// import { data } from '../Data'
import "../../Product/Clothes/cloth.css"
import axios from "axios"
import DeleteModal from '../../Product/Clothes/DeleteModal';
import EditCatModal from '../../Product/Category/EditCategory';

export default function Categry() {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [openCat, setOpenCat] = useState(false);
    const handleOpenCat = () => setOpenCat(true);
    const handleCloseCat = () => setOpenCat(false);
    const [product, setProduct] = useState([])
    const [search, setSearch] = useState("")
    const [asc, setAsc] = useState(false)
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const indexOfLastPage = page * rowsPerPage
    const indexOfFirstPage = indexOfLastPage + rowsPerPage
    const currentPosts = product?.slice(indexOfLastPage, indexOfFirstPage)
    useEffect(()=>{
      const Clothe = async() =>{
        const {data} = await axios.get("https://ecommerces-api.herokuapp.com/api/v1/public/get_all_category")
        setProduct(data.data)
      }
      Clothe()
    },[])
  
    const SearchParams = (rows) =>{
        const columns = rows[0] && Object.keys(rows[0])
      return rows.filter((row)=>columns.some((column)=>row[column].toString().toLowerCase().indexOf(search.toLowerCase())>-1))
    }
    const emptyTable = rowsPerPage - Math.min(rowsPerPage, product.length - page * rowsPerPage)
    const handleChangePage = (event, newPage) => {
      setPage(newPage);
    };
  
    const handleChangeRowsPerPage = (event) => {
      setRowsPerPage(parseInt(event.target.value, 10));
      setPage(0);
    };

  const sortDesc = () => {
    product.reverse();
    setAsc((currnt)=>!currnt)
  }; 
  return (
      <>
         <div className="clothWrapperSearchContainer">
            <Link to="/admin/category/create">
              <button className="clothWrapperButton">Create New Category</button>
            </Link>
            <div className="clothWrapperSearch">
                <Search/>
                <input type="search" placeholder="Search Cloth" value={search} onChange={(e)=>{setSearch(e.target.value)}} />
            </div>
        </div>   
        <div style={{height:"500px !important"}}>
    <table>
        <thead>
            <tr>
                <th>Id 
                
                <span style={{float:"right"}}>
                  { asc ? <ArrowUpward style={{fontSize:"15", cursor:"pointer"}}  onClick={sortDesc}/> :<ArrowDownward style={{fontSize:"15", cursor:"pointer"}}  onClick={sortDesc}/>}
                  <MoreVert style={{fontSize:"15"}} 
                /></span> 
                </th>
                <th>Category Name
                <span style={{float:"right"}}>
                { asc ? <ArrowUpward style={{fontSize:"15", cursor:"pointer"}}  onClick={sortDesc}/> :<ArrowDownward style={{fontSize:"15", cursor:"pointer"}}  onClick={sortDesc}/>}
                  <MoreVert style={{fontSize:"15"}} 
                /></span> 
                </th>
                <th>Product Length
                <span style={{float:"right"}}>
                { asc ? <ArrowUpward style={{fontSize:"15", cursor:"pointer"}}  onClick={sortDesc}/> :<ArrowDownward style={{fontSize:"15", cursor:"pointer"}}  onClick={sortDesc}/>}
                  <MoreVert style={{fontSize:"15"}} 
                /></span> 
                </th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
            {
              SearchParams(currentPosts).map((itm, index)=>{
                return(
                    <tr className='trHover' key={index}>
                        <td style={{width:"40px"}}>{itm.id}</td>
                        <td>{itm.name}</td>
                        <td>
                        <DeleteModal   open={open} handleClose={handleClose} setOpen={setOpen} handleOpen={handleOpen} id={itm.id}/>
                        <EditCatModal   open={openCat} handleClose={handleCloseCat} setOpen={setOpenCat} handleOpen={handleOpenCat} id={itm.id} oldName={itm}/>
                        </td>
                        <td>
                            <Edit onClick={handleOpenCat} htmlColor="green" style={{fontSize:"20", cursor:"pointer",marginRight:"10px"}}/>
                            <Delete htmlColor="red"  onClick={handleOpen} style={{fontSize:"20", cursor:"pointer",}}/>
                        </td>
                    </tr>
              ) 
                    
              })
            }
            {
              emptyTable > 0 && (
                <tr style={{height: 41.45 * emptyTable}}>
                  <td>

                  </td>
                </tr>
              )
            }
          
        </tbody>
    </table>
    <div className="tablePaddination">
      <div className="tablepaddinationLeft"></div>
      <div className="tablepaddinationRight">
      <TablePagination
        component="div"
        rowsPerPageOptions={[5,10,20,30,40,50]}
        count={product.length}
        page={page}
        onPageChange={handleChangePage}
        rowsPerPage={rowsPerPage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
      </div>
    </div>
        </div>
        {/* <Menu id="basic-menu" anchorEl={anchorEl} open={sort} onClose={sortClose}  MenuListProps={{'aria-labelledby': 'basic-button',}}>
                <MenuItem onClick={()=>{sortClose();sortDesc()}}>Sort</MenuItem>
        </Menu> */}
        
      </>
    
  )
}
