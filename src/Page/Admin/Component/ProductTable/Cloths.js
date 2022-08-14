import React, {useEffect, useState} from 'react'
import TablePagination from '@mui/material/TablePagination';
import { ArrowDownward, ArrowUpward, Delete, Edit, MoreVert, Search } from '@material-ui/icons'
import { Link } from 'react-router-dom'
import { Menu, MenuItem } from '@material-ui/core'
// import { data } from '../Data'
import "../../Product/Clothes/cloth.css"
import axios from "axios"
import DeleteModal from '../../Product/Clothes/DeleteModal';

export default function Cloths() {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [product, setProduct] = useState([])
    const [search, setSearch] = useState("")
    const [asc, setAsc] = useState(false)
    // const [anchorEl, setAnchorEl] = useState(null);
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const indexOfLastPage = page * rowsPerPage
    const indexOfFirstPage = indexOfLastPage + rowsPerPage
    const currentPosts = product.slice(indexOfLastPage, indexOfFirstPage)
    useEffect(()=>{
      const Clothe = async() =>{
        const {data} = await axios.get("https://ecommerces-api.herokuapp.com/api/v1/public/get_all_products")
        setProduct(data)
      }
      Clothe()
    },[product])

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

    // const sort = Boolean(anchorEl);
    // const sortClick = (event) => {
    //     setAnchorEl(event.currentTarget);
    // };
    // const sortClose = () => {
    //     setAnchorEl(null);
    // }; 
  const sortDesc = () => {
    product.reverse();
    setAsc((currnt)=>!currnt)
  }; 
  return (
      <>
         <div className="clothWrapperSearchContainer">
            <Link to="/admin/product/create">
              <button className="clothWrapperButton">Create New Product</button>
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
                <th>Name
                <span style={{float:"right"}}>
                { asc ? <ArrowUpward style={{fontSize:"15", cursor:"pointer"}}  onClick={sortDesc}/> :<ArrowDownward style={{fontSize:"15", cursor:"pointer"}}  onClick={sortDesc}/>}
                  <MoreVert style={{fontSize:"15"}} 
                /></span> 
                </th>
                <th>Category
                <span style={{float:"right"}}>
                { asc ? <ArrowUpward style={{fontSize:"15", cursor:"pointer"}}  onClick={sortDesc}/> :<ArrowDownward style={{fontSize:"15", cursor:"pointer"}}  onClick={sortDesc}/>}
                  <MoreVert style={{fontSize:"15"}} 
                /></span> 
                </th>
                <th>Price
                <span style={{float:"right"}}>
                { asc ? <ArrowUpward style={{fontSize:"15", cursor:"pointer"}}  onClick={sortDesc}/> :<ArrowDownward style={{fontSize:"15", cursor:"pointer"}}  onClick={sortDesc}/>}
                  <MoreVert style={{fontSize:"15"}} 
                /></span> 
                </th>
                <th>Discount
                <span style={{float:"right"}}>
                { asc ? <ArrowUpward style={{fontSize:"15", cursor:"pointer"}}  onClick={sortDesc}/> :<ArrowDownward style={{fontSize:"15", cursor:"pointer"}}  onClick={sortDesc}/>}
                  <MoreVert style={{fontSize:"15"}} 
                /></span> 
                </th>
                <th>Qty
                <span style={{float:"right"}}>
                { asc ? <ArrowUpward style={{fontSize:"15", cursor:"pointer"}}  onClick={sortDesc}/> :<ArrowDownward style={{fontSize:"15", cursor:"pointer"}}  onClick={sortDesc}/>}
                  <MoreVert style={{fontSize:"15"}} 
                /></span> 
                </th>
                <th>Status
                <span style={{float:"right"}}>
                { asc ? <ArrowUpward style={{fontSize:"15", cursor:"pointer"}}  onClick={sortDesc}/> :<ArrowDownward style={{fontSize:"15", cursor:"pointer"}}  onClick={sortDesc}/>}
                  <MoreVert style={{fontSize:"15"}} 
                /></span> 
                </th>
                <th>Avater
                <span style={{float:"right"}}>
                { asc ? <ArrowUpward style={{fontSize:"15", cursor:"pointer"}}  onClick={sortDesc}/> :<ArrowDownward style={{fontSize:"15", cursor:"pointer"}}  onClick={sortDesc}/>}
                  <MoreVert style={{fontSize:"15"}} 
                /></span> 
                </th>
                {/* <th>Images
                <span style={{float:"right"}}>
                { asc ? <ArrowUpward style={{fontSize:"15", cursor:"pointer"}}  onClick={sortDesc}/> :<ArrowDownward style={{fontSize:"15", cursor:"pointer"}}  onClick={sortDesc}/>}
                  <MoreVert style={{fontSize:"15"}} 
                /></span> 
                </th> */}
                <th>Product Information
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
              SearchParams(currentPosts).map((itm, index)=>(
                    <tr className='trHover' key={index}>
                        <td style={{width:"40px"}}>{itm.id}</td>
                        <td>{itm.name}</td>
                        <td>{itm.category}</td>
                        <td>{itm.price}</td>
                        <td>{itm.discount}</td>
                        <td>{itm.quantity}</td>
                        <td>{itm.status}</td>
                        <td style={{width:"90px"}} >
                          <img src={itm.avater} alt="jjf"/>
                        </td>
                        {/* <td>{itm.images}</td> */}
                        <td style={{width:"270px"}}>{itm.description}</td>
                        <td>
                            <Link to={`/admin/product/editcloth/${itm.id}`}><Edit htmlColor="green" style={{fontSize:"20", cursor:"pointer",marginRight:"10px"}}/></Link>
                            <Delete htmlColor="red"  onClick={handleOpen} style={{fontSize:"20", cursor:"pointer",}}/>
                        </td>
                        <DeleteModal open={open} handleClose={handleClose} setOpen={setOpen} handleOpen={handleOpen} id={itm.id}/>
                </tr>
                ))
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
