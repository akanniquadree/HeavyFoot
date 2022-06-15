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
                        <span>Clothes</span>
                    </div>
                </li>
                <li>
                    <div className="sidebarList">
                        <AirlineSeatFlat/>
                        <span>Jewelries</span>
                    </div>
                </li>
                <li>
                    <div className="sidebarList">
                        <AirlineSeatFlat/>
                        <span>Hats</span>
                    </div>
                </li>
                <li>
                    <div className="sidebarList">
                        <AirlineSeatFlat/>
                        <span>Bags</span>
                    </div>
                </li>
                <li>
                    <div className="sidebarList">
                        <AirlineSeatFlat/>
                        <span>Footwears</span>
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
