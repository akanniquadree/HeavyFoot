import "./topbar.css"
import {ArrowDropDown, Dehaze, HelpOutline, Person, Search, ShoppingCart} from "@material-ui/icons"
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem';
import { useState, useContext, useMemo } from "react";
import { AuthContext } from "../../Context/AuthContext";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios"


function Topbar() {
  const [cat, setCat] = useState([]);
  const [cart, setCart] = useState([]);
  const [anchorEl, setAnchorEl] = useState(null);
  const [help, setHelp] = useState(null);
  const [shop, setShop] = useState(null);
  const open = Boolean(anchorEl);
  const openHelp = Boolean(help);
  const openShop = Boolean(shop);
  const {user, dispatch} = useContext(AuthContext)
  const accountClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const ShopClick = (event) => {
    setShop(event.currentTarget);
  };
  const helpClick = (event) => {
    setHelp(event.currentTarget);
  };
  const accountClose = () => {
    setAnchorEl(null);
  }; 
  const ShopClose = () => {
    setShop(null);
  }; 
  const helpClose = () => {
    setHelp(null);
  };
  const AllCart = useMemo(()=>({
    product_id:cart.product_id, product_name:cart.product_name, product_price:cart.product_price,quantity:cart.quantity, product_image:cart.product_image, product_image_url:cart.product_image_url
  }),[cart.product_id,cart.product_name,cart.product_price,cart.quantity,cart.product_image,cart.product_image_url])
  const AllCat = useMemo(()=>({
    id:cat.id, name:cat.name
  }),[cat.id,cat.name])

  useEffect(()=>{
    const cancelToken = axios.CancelToken.source()
    const Category = async() =>{
      const {data} = await axios.get("https://ecommerces-api.herokuapp.com/api/v1/public/get_all_category", {cancelToken:cancelToken.token})
      setCat(data.data)
    }
    const CART = async() =>{
      if(user){
        const {data} = await axios.get("https://ecommerces-api.herokuapp.com/api/v1/user/get_all_cart",{headers:{"Authorization":"Bearer " +localStorage.getItem("token")}})
        setCart(data.data)
      }
    }
    CART()
    Category()
    return () =>{
      cancelToken.cancel()
    }
  },[AllCart,AllCat,user])
  const logOut = async() =>{
    const formData = new FormData()
    const clear = await axios.post("https://ecommerces-api.herokuapp.com/api/v1/user/logout",formData,{headers:{"Authorization":"Bearer " +localStorage.getItem("token")}})
    if(clear){
      setAnchorEl(null);
      dispatch({type:"clear"})
      localStorage.clear()
      window.location.replace("/login")
    }
  }
  return (
    <div className="topbarContainer">
        <div className="topbarWrapper">
            <div className="topbarRight">
                <Link to="/" style={{display:"flex", alignItems:"center"}}>
                  {/* <img src="/Images/logo.jpg" className="logo" alt="logo" /> */}
                  <h3>Heavy Foot</h3>
                </Link>
            </div>
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
                  aria-controls={openShop ? 'basic-menu' : undefined}
                  aria-haspopup="true"
                  aria-expanded={openShop ? 'true' : undefined}
                  onClick={ShopClick}
                >
                   <Person htmlColor="black"/>
                   <span>Shop</span> 
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
                <Link to="/cart" style={{color:"black"}} className="topbarLeftInfo">
                    <ShoppingCart htmlColor="black"/>
                    <span>Cart</span> 
                    <div className="absolute">
                      <span>{cart  ? cart.length : 0}</span>
                    </div> 
                </Link>
                <div className="topbarLeftInfo">
                   <Search htmlColor="black"/>
                </div>
            </div>
            <div className="hidden">
              <Dehaze htmlColor="black" size="20" className=""/>
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
            <Link to=""  style={{color:"black"}}>
              <MenuItem onClick={accountClose}>My Profile</MenuItem>
            </Link>
              
              <MenuItem onClick={logOut} style={{cursor:"pointer"}}>Log out</MenuItem>
         
          </div>
          :
          <div>
            <Link to="/login"  style={{color:"black"}}>
              <MenuItem onClick={accountClose}>Log In </MenuItem>
            </Link>
            <Link to="/signup"  style={{color:"black"}}>
              <MenuItem onClick={accountClose}>Sign Up </MenuItem>
            </Link>
          </div>
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
        <Menu
        id="basic-menu"
        anchorEl={shop}
        open={openShop}
        onClose={ShopClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >{
        cat?.map((itm, index)=>(
         <Link to={`/shop/${itm.name}`} style={{color:"black"}} key={index}><MenuItem onClick={ShopClose} key={index}>{itm.name}</MenuItem></Link>
        ))
      }
      </Menu>
    </div>
  )
}

export default Topbar