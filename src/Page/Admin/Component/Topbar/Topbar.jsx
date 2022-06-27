import "./topbar.css"
import {ArrowDropDown, HelpOutline, Person, Search, ShoppingCart} from "@material-ui/icons"
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem';
import { useState, useContext } from "react";
import { AuthContext } from "../../../../Context/AuthContext";
import { Link } from "react-router-dom";


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
    <div className="topbarAdminContainer">
        <div className="topbarAdminWrappers">
            <div className="topbarAdminRight">
              <Link to="/" style={{display:"flex", alignItems:"center"}}>
                <img src="/Images/logo.jpg" className="logo" alt="logo" />
                <h3>Heavy Foot</h3>
              </Link>
                
            </div>
           
            <div className="topbarAdminLeft">
                <div className="topbarAdminLeftInfo" 
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
          <div>
              <MenuItem onClick={accountClose}>My Profile</MenuItem>
              <MenuItem onClick={accountClose}>Log out</MenuItem>
          </div>
          :
          <div>
              <MenuItem onClick={accountClose}>Log In </MenuItem>
              <MenuItem onClick={accountClose}>Sign Up </MenuItem>
          </div>
        }
        
        
      </Menu>

    </div>
  )
}

export default Topbar