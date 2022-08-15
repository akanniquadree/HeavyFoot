import React, {useEffect, useState} from 'react'
import TablePagination from '@mui/material/TablePagination';
import { ArrowDownward, ArrowUpward, Delete, Edit, MoreVert, Search } from '@material-ui/icons'
import { Link } from 'react-router-dom'
import { Menu, MenuItem } from '@material-ui/core'
// import { data } from '../Data'
import "../../Product/Clothes/cloth.css"
import axios from "axios"
import DeleteModal from '../../Product/Clothes/DeleteModal';

export default function UserData() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
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
      const {data} = await axios.get("https://ecommerces-api.herokuapp.com/api/v1/admin/get_all_users", {headers:{"Authorization":"Bearer 41|kOxux51mqFmCChDku6VI85INKOsPGx000hmCdnpk"}})
      setProduct(data.data)
      console.log(data)
      console.log(product)
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
          <div >
          
          </div>
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
              <th>First Name
              <span style={{float:"right"}}>
              { asc ? <ArrowUpward style={{fontSize:"15", cursor:"pointer"}}  onClick={sortDesc}/> :<ArrowDownward style={{fontSize:"15", cursor:"pointer"}}  onClick={sortDesc}/>}
                <MoreVert style={{fontSize:"15"}} 
              /></span> 
              </th>
              <th>LastName
              <span style={{float:"right"}}>
              { asc ? <ArrowUpward style={{fontSize:"15", cursor:"pointer"}}  onClick={sortDesc}/> :<ArrowDownward style={{fontSize:"15", cursor:"pointer"}}  onClick={sortDesc}/>}
                <MoreVert style={{fontSize:"15"}} 
              /></span> 
              </th>
              <th>Username
              <span style={{float:"right"}}>
              { asc ? <ArrowUpward style={{fontSize:"15", cursor:"pointer"}}  onClick={sortDesc}/> :<ArrowDownward style={{fontSize:"15", cursor:"pointer"}}  onClick={sortDesc}/>}
                <MoreVert style={{fontSize:"15"}} 
              /></span> 
              </th>
              <th>Email
              <span style={{float:"right"}}>
              { asc ? <ArrowUpward style={{fontSize:"15", cursor:"pointer"}}  onClick={sortDesc}/> :<ArrowDownward style={{fontSize:"15", cursor:"pointer"}}  onClick={sortDesc}/>}
                <MoreVert style={{fontSize:"15"}} 
              /></span> 
              </th>
              <th>Phone Number
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
              <th>Action</th>
          </tr>
      </thead>
      <tbody>
          {
            SearchParams(currentPosts).map((itm, index)=>(
                  <tr className='trHover' key={index}>
                      <td style={{width:"40px"}}>{itm.id}</td>
                      <td>{itm.firstName}</td>
                      <td>{itm.lastName}</td>
                      <td>{itm.userName}</td>
                      <td>{itm.email}</td>
                      <td>{itm.phone}</td>
                      {/* <td>{itm.status}</td>
                      <td style={{width:"90px"}} >
                        <img src={itm.avater} alt="jjf"/>
                      </td> */}
                      <td>
                          <Link to=""><Edit htmlColor="green" style={{fontSize:"20", cursor:"pointer",marginRight:"10px"}}/></Link>
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
