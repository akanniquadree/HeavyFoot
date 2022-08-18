import React, { useState, useContext} from 'react'
import { Admin } from '../../../ApiCall'
import { AuthContext } from '../../../Context/AuthContext'
import "./signup.css"
import Snackbar from '@mui/material/Snackbar';
import Fade from '@mui/material/Fade';
import Slide from '@mui/material/Slide';
import Grow from '@mui/material/Grow';
import { CircularProgress, SnackbarContent } from '@mui/material'

export default function AdminLogin() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const {admin,adminerror,adminisFetching, admindispatch} = useContext(AuthContext)
  const [message, setMessage] = useState("")

  const loginHandle = (e) =>{
   
      e.preventDefault()
      Admin({email, password}, admindispatch, setMessage)
  }
  const [state, setState] = useState({
      open: false,
      Transition: Fade,
    });
    function GrowTransition(props) {
      return <Grow {...props} />;
    }
  
    function SlideTransition(props) {
      return <Slide {...props} direction="up" />;
    }
    
  
    const handleClick = (Transition) => () => {
      setState({
        open: true,
        Transition,
      });
    };
  
    const handleClose = () => {
      setState({
        ...state,
        open: false,
      });
    };
  return (
    <>
        <div className="adminsignin">
            <form action="" className='adminsigninForm' onSubmit={loginHandle}>
                <h4>LOGIN</h4>
                <div className="adminsigninTop"> 
                 <input type="email" placeholder='Enter your Email' value={email} onChange={(e)=>{setEmail(e.target.value)}} required/>   
                </div>
                <div className="adminsigninTop">
                 <input type="password" placeholder='Enter your Password' value={password} onChange={(e)=>{setPassword(e.target.value)}} required />  
                </div>
                <div className="adminsigninTop2">
                 <button type='submit' disabled={adminisFetching} onClick={handleClick(SlideTransition)}>{adminisFetching ? <CircularProgress thickness={4.0} sx={{color:"white"}} size="13px"/> :"LOGIN"}</button>
                </div>
                       
                                {
                                    message &&
                                    <Snackbar
                                    open={state.open}
                                    onClose={handleClose}
                                    TransitionComponent={state.Transition}
                                    key={state.Transition.name}
                                    
                                    anchorOrigin={{vertical: "top", horizontal: "right" }}
                                    autoHideDuration = {3000}
                                   >
                                    <SnackbarContent style={{ backgroundColor:"red", textAlign:"center"}}
                                      message={message}
                                    />
                                   </Snackbar>
                                    
                                }
                        
            </form>
        </div>
    </>
  )
}
