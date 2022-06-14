import "./sidebar.css"
import {AirlineSeatFlat, Checkroom} from "@material-ui/icons"

export default function Sidebar() {
  return (
    <div className="sidebar">
        <div className="sidebarContainer">
            <ul>
                <li>
                    <div className="sidebarList">
                        <AirlineSeatFlat/>
                        <span>Fashion</span>
                    </div>
                </li>
                <li>
                    <div className="sidebarList">
                        <AirlineSeatFlat/>
                        <span>Gadget</span>
                    </div>
                </li>
                <li>
                    <div className="sidebarList">
                        <AirlineSeatFlat/>
                        <span>Phones</span>
                    </div>
                </li>
                <li>
                    <div className="sidebarList">
                        <AirlineSeatFlat/>
                        <span>About us</span>
                    </div>
                </li>
                <li>
                    <div className="sidebarList">
                        <AirlineSeatFlat/>
                        <span>Contact Us</span>
                    </div>
                </li>
            </ul>
        </div>
    </div>
  )
}
