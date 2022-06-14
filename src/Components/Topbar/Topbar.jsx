import "./topbar.css"
import {ArrowDropDown, HelpOutline, Menu, Person, Search, ShoppingCart} from "@material-ui/icons"



function Topbar() {
  
  return (
    <div className="topbarContainer">
        <div className="topbarWrapper">
            <div className="topbarRight">
                <img src="/Images/toplogo.jpg" className="logo" alt="logo" />
            </div>
            <form className="topbarMiddle">
              <div className="topbarMiddleSearch">
                  <Search/>
                  <input type="search" placeholder="Enter the Product Name" />
              </div>
            </form>
            <div className="topbarLeft">
                <div className="topbarLeftInfo">
                   <Person htmlColor="white"/>
                   <span>Account</span> 
                   <ArrowDropDown htmlColor="white"/>
                </div>
                <div className="topbarLeftInfo">
                   <HelpOutline htmlColor="white"/>
                   <span>Help</span> 
                   <ArrowDropDown htmlColor="white"/>
                </div>
                <div className="topbarLeftInfo">
                   <ShoppingCart htmlColor="white"/>
                   <span>Cart</span> 
                </div>
                <div className="">
                   <Menu htmlColor="white" size="20" className="hidden"/>
                </div>
                
                
            </div>
        </div>
    </div>
  )
}

export default Topbar