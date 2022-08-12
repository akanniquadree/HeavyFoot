import { People} from '@material-ui/icons'
import React from 'react'
import "./DashTop.css"

function DashTop() {
  return (
    <div className="dashTop">
        <div className="dashTopWrapper">
            <div className="dashTopUp">
              <div>
                <h3>Welcome Back Akanni</h3>
                <p>Your current status and analysis are here</p> 
              </div>
              {/* <span>20 October 2022</span> */}
            </div>
            <div className="dashTopBottom">
              <div className="dashTopCard">
                <div className="dashTopCardIcon">
                  <People htmlColor="blue" style={{fontSize:"40"}}/>
                </div>
                <div className="dashTopCardDetail" >
                  <div>
                    <h4>234</h4>
                    <span>+4</span>
                  </div>
                  <p className='para'>New User</p>
                </div>
              </div>
              <div className="dashTopCard">
                <div className="dashTopCardIcon">
                  <People htmlColor="blue" style={{fontSize:"40"}}/>
                </div>
                <div className="dashTopCardDetail" >
                  <div>
                    <h4>234</h4>
                    <span>+4</span>
                  </div>
                  <p className='para'>New User</p>
                </div>
              </div>
              <div className="dashTopCard">
                <div className="dashTopCardIcon">
                  <People htmlColor="blue" style={{fontSize:"40"}}/>
                </div>
                <div className="dashTopCardDetail" >
                  <div>
                    <h4>234</h4>
                    <span>+4</span>
                  </div>
                  <p className='para'>New User</p>
                </div>
              </div>
              <div className="dashTopCard">
                <div className="dashTopCardIcon">
                  <People htmlColor="blue" style={{fontSize:"40"}}/>
                </div>
                <div className="dashTopCardDetail" >
                  <div>
                    <h4>234</h4>
                    <span>+4</span>
                  </div>
                  <p className='para'>New User</p>
                </div>
              </div>
              <div className="dashTopCard">
                <div className="dashTopCardIcon">
                  <People htmlColor="blue" style={{fontSize:"40"}}/>
                </div>
                <div className="dashTopCardDetail" >
                  <div>
                    <h4>234</h4>
                    <span>+4</span>
                  </div>
                  <p className='para'>New User</p>
                </div>
              </div>
              
            </div>
        </div>
    </div>
  )
}

export default DashTop