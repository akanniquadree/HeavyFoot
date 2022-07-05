import { Menu, MenuItem } from '@material-ui/core'
import { Delete, Edit, MoreVert, Search } from '@material-ui/icons'
import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import AdminSide from '../../Component/AdminSide/AdminSide'
import { data } from '../../Component/Data'
import {ProductTable} from '../../Component/ProductTable/ProductTable'
import Topbar from '../../Component/Topbar/Topbar'
import "./cloth.css"



export default function ViewCloth() {
    const [anchorEl, setAnchorEl] = useState(null);
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
    <div className='cloth'>
       <AdminSide/>
        <div style={{flex:"5 1", paddingLeft:"30px"}}>
            <Topbar/> 
            <div >
                <div className="clothWrapper">
                        <Link to="/admin/product/createcloth">
                            <button>Create New Product</button>
                        </Link>
                    <div className="productWrapper">
                        <button>CLothes</button>
                        <button>Bags</button>
                        <button>Footwears</button>
                        <button>Headwears</button>
                        <button>Accessories</button>
                    </div>
                    <form className="clothWrapperSearchContainer">
                    
                        <div className="clothWrapperSearch">
                            <Search/>
                            <input type="search" placeholder="Search Cloth" />
                        </div>
                    </form>
                    <ProductTable/>
                    {/* <table>
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
                                data.map((itm, index)=>(
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
                    </table> */}
                </div> 
            </div>
        </div>
        <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={sort}
        onClose={sortClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
              <MenuItem onClick={()=>{sortClose();sortDesc()}}>Sort</MenuItem>
      </Menu>
    </div>
  )
}