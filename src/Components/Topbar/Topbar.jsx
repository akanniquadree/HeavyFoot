import "./topbar.css"
import {ArrowDropDown, HelpOutline, Person, Search, ShoppingCart} from "@material-ui/icons"
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem';
import { useState, useContext } from "react";
import { AuthContext } from "../../Context/AuthContext";


function Topbar() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [help, setHelp] = useState(null);
  const open = Boolean(anchorEl);
  const openHelp = Boolean(help);
  const {user} = useContext(AuthContext)
  console.log(user)
  const accountClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const helpClick = (event) => {
    setHelp(event.currentTarget);
  };
  const accountClose = () => {
    setAnchorEl(null);
  }; 
  const helpClose = () => {
    setHelp(null);
  }; 
  return (
    <div className="topbarContainer">
        <div className="topbarWrapper">
            <div className="topbarRight">
                <img src="/Images/logo.jpg" className="logo" alt="logo" />
                <h3>Heavy Foot</h3>
            </div>
            <form className="topbarMiddle">
              <div className="topbarMiddleSearch">
                  <Search/>
                  <input type="search" placeholder="Enter the Product Name" />
              </div>
            </form>
            <div className="topbarLeft">
                <div className="topbarLeftInfo" 
                  id="basic-button"
                  aria-controls={open ? 'basic-menu' : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? 'true' : undefined}
                  onClick={accountClick}
                >
                   <Person htmlColor="black"/>
                   <span>{user ? user.firstName : "Account"}</span> 
                   <ArrowDropDown htmlColor="black"/>
                </div>
                <div className="topbarLeftInfo" 
                  id="basic-button"
                  aria-controls={openHelp ? 'basic-menu' : undefined}
                  aria-haspopup="true"
                  aria-expanded={openHelp ? 'true' : undefined}
                  onClick={helpClick}>
                   <HelpOutline htmlColor="black"/>
                   <span>Help</span> 
                   <ArrowDropDown htmlColor="black"/>
                </div>
                <div className="topbarLeftInfo">
                   <ShoppingCart htmlColor="black"/>
                   <span>Cart</span> 
                </div>
                <div className="">
                   {/* <Menu htmlColor="black" size="20" className="hidden"/> */}
                </div>
                
                
            </div>
        </div>
        <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={accountClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        
        {
          user ?
          <>
              <MenuItem onClick={accountClose}>My Profile</MenuItem>
              <MenuItem onClick={accountClose}>Log out</MenuItem>
          </>
          :
          <>
              <MenuItem onClick={accountClose}>Log In </MenuItem>
              <MenuItem onClick={accountClose}>Sign Up </MenuItem>
          </>
        }
        
        
      </Menu>
        <Menu
        id="basic-menu"
        anchorEl={help}
        open={openHelp}
        onClose={helpClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={helpClose}>Help Center</MenuItem>
        <MenuItem onClick={helpClose}>Place & track order</MenuItem>
        <MenuItem onClick={helpClose}>Return and Funds</MenuItem>
        <MenuItem onClick={helpClose}>Other Cancellation</MenuItem>
       
      </Menu>
    </div>
  )
}

export default Topbar