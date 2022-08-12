import React, {useState} from 'react'
import TablePagination from '@mui/material/TablePagination';
import { Delete, Edit, MoreVert, Search } from '@material-ui/icons'
import { Link } from 'react-router-dom'
import { Menu, MenuItem } from '@material-ui/core'
import { data } from '../Data'

export default function Headwears() {
    const [search, setSearch] = useState("")
    const [anchorEl, setAnchorEl] = useState(null);
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const indexOfLastPage = page * rowsPerPage
    const indexOfFirstPage = indexOfLastPage + rowsPerPage
    const currentPosts = data.slice(indexOfLastPage, indexOfFirstPage)

    const SearchParams = (rows) =>{
        const columns = rows[0] && Object.keys(rows[0])
      return rows.filter((row)=>columns.some((column)=>row[column].toString().toLowerCase().indexOf(search.toLowerCase())>-1))
    }
    const handleChangePage = (event, newPage) => {
      setPage(newPage);
    };
  
    const handleChangeRowsPerPage = (event) => {
      setRowsPerPage(parseInt(event.target.value, 10));
      setPage(0);
    };

    const sort = Boolean(anchorEl);
    const sortClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const sortClose = () => {
        setAnchorEl(null);
    }; 
  const sortDesc = () => {
    data.reverse();
  }; 
  return (
      <>
         <div className="clothWrapperSearchContainer">
            <Link to="/admin/product/createcloth">
              <button className="clothWrapperButton">Create New Product</button>
            </Link>
            <div className="clothWrapperSearch">
                <Search/>
                <input type="search" placeholder="Search Cloth" value={search} onChange={(e)=>{setSearch(e.target.value)}} />
            </div>
        </div>   
        <div style={{height:"400px !important"}}>
    <table>
        <thead>
            <tr>
                <th>Id 
                <span style={{float:"right"}}><MoreVert style={{fontSize:"15"}} 
                id="basic-button"
                aria-controls={sort ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={sort ? 'true' : undefined}
                onClick={sortClick}
                /></span> 
                </th>
                <th>Name
                <span style={{float:"right"}}><MoreVert style={{fontSize:"15"}} 
                id="basic-button"
                aria-controls={sort ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={sort ? 'true' : undefined}
                onClick={sortClick}
                /></span> 
                </th>
                <th>Category
                <span style={{float:"right"}}><MoreVert style={{fontSize:"15"}} 
                id="basic-button"
                aria-controls={sort ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={sort ? 'true' : undefined}
                onClick={sortClick}
                /></span> 
                </th>
                <th>Discount Price
                <span style={{float:"right"}}><MoreVert style={{fontSize:"15"}} 
                id="basic-button"
                aria-controls={sort ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={sort ? 'true' : undefined}
                onClick={sortClick}
                /></span> 
                </th>
                <th>Product Price
                <span style={{float:"right"}}><MoreVert style={{fontSize:"15"}} 
                id="basic-button"
                aria-controls={sort ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={sort ? 'true' : undefined}
                onClick={sortClick}
                /></span> 
                </th>
                <th>Quantity
                <span style={{float:"right"}}><MoreVert style={{fontSize:"15"}} 
                id="basic-button"
                aria-controls={sort ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={sort ? 'true' : undefined}
                onClick={sortClick}
                /></span> 
                </th>
                <th>Number of Reviews
                <span style={{float:"right"}}><MoreVert style={{fontSize:"15"}} 
                id="basic-button"
                aria-controls={sort ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={sort ? 'true' : undefined}
                onClick={sortClick}
                /></span> 
                </th>
                <th>Product Information
                <span style={{float:"right"}}><MoreVert style={{fontSize:"15"}} 
                id="basic-button"
                aria-controls={sort ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={sort ? 'true' : undefined}
                onClick={sortClick}
                /></span> 
                </th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
            {
              SearchParams(currentPosts).map((itm, index)=>(
                    <tr className='trHover' key={index}>
                        <td>{itm.id}</td>
                        <td>{itm.firstName}</td>
                        <td>{itm.lastName}</td>
                        <td>{itm.detail}</td>
                        <td>{itm.review}</td>
                        <td>{itm.price}</td>
                        <td>{itm.discountPrice}</td>
                        <td>{itm.category}</td>
                        <td>
                            <Edit htmlColor="green" style={{fontSize:"20", cursor:"pointer",marginRight:"10px"}}/>
                            <Delete htmlColor="red" style={{fontSize:"20", cursor:"pointer",}}/>
                        </td>
                </tr>
                ))
            }

          
        </tbody>
    </table>
    <div className="tablePaddination">
      <div className="tablepaddinationLeft"></div>
      <div className="tablepaddinationRight">
      <TablePagination
        component="div"
        rowsPerPageOptions={[5,10,20,30,40,50]}
        count={data.length}
        page={page}
        onPageChange={handleChangePage}
        rowsPerPage={rowsPerPage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
      </div>
    </div>
        </div>
        <Menu id="basic-menu" anchorEl={anchorEl} open={sort} onClose={sortClose}  MenuListProps={{'aria-labelledby': 'basic-button',}}>
                <MenuItem onClick={()=>{sortClose();sortDesc()}}>Sort</MenuItem>
        </Menu>
      </>
    
  )
}
