import React, { useEffect, useState } from 'react'
import axios from "axios"
import Snackbar from '@mui/material/Snackbar';
import Fade from '@mui/material/Fade';
import Slide from '@mui/material/Slide';
import { CircularProgress, SnackbarContent } from '@mui/material'
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import MuiDrawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import {Link} from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { ArrowDropDown, Category, Dashboard, MoneyOff, People, PersonAdd, RateReview, Storefront, TrendingDown } from '@material-ui/icons';
import { ListItem } from '@mui/material';




export default function CreateCloth() {
    const [name, setName] = useState("")
    const [cat, setCat] = useState([])
    const [price, setPrice] = useState("")
    const [discount, setDiscount] = useState("")
    const [quantity, setQuantity] = useState("")
    const [status, setStatus] = useState("")
    const [category, setCategory] = useState("")
    const [description, setDescription] = useState("")
    const [avater, setAvater] = useState("")
    const [images, setImages] = useState("")
    const [error, setError] = useState("")
    const [message, setMessage] = useState("")
    const [disable, setDisable] = useState(false)
    const [open, setOpen] = React.useState(true);
    const toggleDrawer = () => {setOpen(!open);};
    const [state, setState] = useState({
        open: false,
        Transition: Fade,
      });
    
      function SlideTransition(props) {
        return <Slide {...props} direction="up" />;
      }
      
    
      const handleClick = (Transition) => () => {
        setState({
          open: true,
          Transition,
        });
        setError("")
        setMessage("")
      };
    
      const handleClose = () => {
        setState({
          ...state,
          open: false,
        });
      };
      useEffect(()=>{
        const Clothe = async() =>{
          const {data} = await axios.get("https://ecommerces-api.herokuapp.com/api/v1/public/get_all_category")
          setCat(data.data)
        }
        Clothe()
      },[])
    const submitData = async(e) =>{
        try {
            e.preventDefault()
            const formData = new FormData()
            formData.append("name", name)
            formData.append("images", images)
            formData.append("avater", avater)
            formData.append("price", price)
            formData.append("quantity", quantity)
            formData.append("category", category)
            formData.append("discount", discount)
            formData.append("status", status)
            formData.append("description", description)
            setDisable(true)
            const {data} = await axios.post("https://ecommerces-api.herokuapp.com/api/v1/admin/add_product", formData, {headers: {"Authorization": "Bearer " +localStorage.getItem("admintoken")}})
            if(data){
                window.location.replace("/admin/product/view")
                setError("")
                setMessage(data.message)
                console.log(data)
                setDisable(false)
            }
            
            
        } catch (error) {
            console.log(error)
            setError(error.response.data.message ? error.response.data.message : error.response.message)
            setMessage("")
            setDisable(false)
        }
       console.log(error)
    }
    
const drawerWidth = 200;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    '& .MuiDrawer-paper': {
      position: 'relative',
      whiteSpace: 'nowrap',
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
      boxSizing: 'border-box',
      ...(!open && {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
          width: theme.spacing(9),
        },
      }),
    },
  }),
);

const mdTheme = createTheme();
  return (
      <ThemeProvider theme={mdTheme}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar position="absolute" open={open} sx={{
             backgroundColor:"white"
            }}>
          <Toolbar
            sx={{
              pr: '24px', // keep right padding when drawer closed
            }}
          >
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={toggleDrawer}
              sx={{
                marginRight: '36px',color:"black",
                ...(open && { display: 'none' }),
              }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              component="h1"
              variant="h6"
              noWrap
              sx={{ flexGrow: 1, color:"black" }}
            >
              Heavy Foot
            </Typography>
            <IconButton sx={{color:"black" }}>
              <Badge badgeContent={4} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
          </Toolbar>
        </AppBar>
        <Drawer variant="permanent" open={open}>
          <Toolbar
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end',
              px: [1],
            }}
          >
            <IconButton onClick={toggleDrawer}>
              <ChevronLeftIcon />
            </IconButton>
          </Toolbar>
          <Divider />
          <List component="nav" className="adminSideWrapper">
          <ul>
                <li>
                    <Link to="/admin" style={{width:"100%", display:"flex", alignItems:"center"}}>
                        <Dashboard htmlColor=" #636e72" style={{ fontSize: open ? 17 : 22, transition:"ease-in-out all 0.5s" }}/>
                        <span className='detail' style={{opacity: open ? 1 : 0}}>Dashboard</span>
                        {/* <ArrowDropDown htmlColor="black"/> */}
                    </Link>
                </li>
                <Divider sx={{ my: 1 }} />
                <li >
                    <Link to="/admin/viewuser" style={{width:"100%"}}>
                        <People  htmlColor=" #636e72" style={{ fontSize: open ? 17 : 22,  transition:"ease-in-out all 0.5s" }}/>
                        <span className='detail'style={{opacity: open ? 1 : 0}}>Users</span>
                    </Link>
                </li>
                <Divider sx={{ my: 1 }} />
                <li className='hov' style={{display:"flex", flexDirection:"column"}}>
                    <Link to="" className='dropdown' style={{width:"100%"}}>
                      <div>
                        <Category htmlColor=" #636e72" style={{ fontSize: open ? 17 : 22, transition:"ease-in-out all 0.5s" }}/>
                        <span className='detail' style={{opacity: open ? 1 : 0}}>Products</span>
                      </div> 
                        <ArrowDropDown htmlColor="#636e72" style={{opacity: open ? 1 : 1}}/>
                    </Link>
                    <div className="dropdown-content">
                        <Link to="/admin/product/create" style={{width:"100%"}}>
                            <Category htmlColor=" #636e72" style={{ fontSize: 17 }}/>
                            <span className='detail' style={{opacity: open ? 1 : 0}}>Add Product</span>
                        </Link>
                        <Link to="/admin/product/view" style={{width:"100%"}}>
                            <PersonAdd htmlColor=" #636e72" style={{ fontSize: 17 }}/>
                            <span className='detail' style={{opacity: open ? 1 : 0}}>View Products</span>
                        </Link>
                        <Link to="/admin/category/create" style={{width:"100%"}}>
                            <PersonAdd htmlColor=" #636e72" style={{ fontSize: 17 }}/>
                            <span className='detail'style={{opacity: open ? 1 : 0}}>Add Category</span>
                        </Link>
                        <Link to="/admin/category/view" style={{width:"100%"}}>
                            <PersonAdd htmlColor=" #636e72" style={{ fontSize: 17 }}/>
                            <span className='detail' style={{opacity: open ? 1 : 0}}>View Category</span>
                        </Link>
                    </div>
                </li>
                <Divider sx={{ my: 1 }} />
                <li>
                    <Link to="" style={{width:"100%"}}>
                        <Storefront htmlColor=" #636e72" style={{ fontSize: open ? 17 : 22, transition:"ease-in-out all 0.5s" }}/>
                        <span className='detail' style={{opacity: open ? 1 : 0}}>Orders</span>
                    </Link>
                </li>
                <Divider sx={{ my: 1 }} />
                <li>
                    <Link to='/admin/sales' style={{width:"100%"}}>
                        <TrendingDown htmlColor=" #636e72" style={{ fontSize: open ? 17 : 22, transition:"ease-in-out all 0.5s" }}/>
                        <span className='detail' style={{opacity: open ? 1 : 0}}>Sales Report</span>
                    </Link>
                </li>
                <Divider sx={{ my: 1 }} />
                <li>
                    <Link to="" style={{width:"100%"}}>
                        <RateReview htmlColor=" #636e72" style={{ fontSize: open ? 17 : 22, transition:"ease-in-out all 0.5s" }}/>
                        <span className='detail' style={{opacity: open ? 1 : 0}}>Reviews</span>
                    </Link>
                </li>
                <Divider sx={{ my: 1 }} />
                <li>
                    <Link to="" style={{width:"100%"}}>
                        <MoneyOff htmlColor=" #636e72" style={{ fontSize: open ? 17 : 22 , transition:"ease-in-out all 0.5s"}}/>
                        <span className='detail' style={{opacity: open ? 1 : 0}}>Request</span>
                    </Link>
                </li>
                </ul>
            <Divider sx={{ my: 1 }} />
          </List>
        </Drawer>
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === 'light'
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: '100vh',
            overflow: 'auto',
          }}
        >
          <Toolbar />
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Grid container spacing={3}>
              {/* Chart */}
              <Grid item xs={12} md={12} lg={12}>
                <Paper
                  sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    height: 550,
                  }}
                >
                  <form className='fom' onSubmit={submitData} encType="multipart/form-data">
                        <div className="userForm">
                            <div className="userFormLeft">
                                <input type="text" placeholder="Enter the Item Name" name="name" value={name} onChange={(e)=>setName(e.target.value)} required/>
                                <input type="text" placeholder="Enter the Item Product Price" name="price" value={price} onChange={(e)=>setPrice(e.target.value)} required/>
                                <input type="text" placeholder="Enter the Item Discount Price" name="discount" value={discount} onChange={(e)=>setDiscount(e.target.value)} required/>
                                <input type="text" placeholder="Enter the Item Quantity" value={quantity} name="quantity" onChange={(e)=>setQuantity(e.target.value)} required/>
                               
                            </div>
                            <div className="userFormRight">
                                <input type="file" className="custom-file-input" onChange={(e)=>{setAvater(e.target.files[0])}} required/>
                                <input type="file" className="custom-file-input"  onChange={(e)=>{setImages(e.target.files[0])}}/>
                                 <select value={category} onChange={(e)=>{setCategory(e.target.value)}} required>
                                 <option value="">Choose A Category</option>
                                  {
                                    cat?.map((itm, index)=>(
                                      
                                        <option value={itm.name} key={index}>{itm.name}</option>
                                    ))
                                  }
                                    
                                 </select>
                                 <input type="text" placeholder="Enter the Item Available Quantity " value={status} name="status" onChange={(e)=>setStatus(e.target.value)} required/>
                            </div>
                        </div>
                        <textarea rows={8} placeholder='Enter the product Information' required value={description} onChange={(e)=>setDescription(e.target.value)}></textarea>
                        <button type='submit' disabled={disable} className="userCreate" onClick={handleClick(SlideTransition)}>{disable ? <CircularProgress thickness={4.5} sx={{color:"white"}} size="13px"/> : "Create Product"}</button>
                        
                                {
                                    error &&
                                    <Snackbar
                                        open={state.open}
                                        onClose={handleClose}
                                        TransitionComponent={state.Transition}
                                        key={state.Transition.name}
                                        
                                        anchorOrigin={{vertical: "top", horizontal: "right" }}
                                        autoHideDuration = {3000}
                                       >
                                        <SnackbarContent style={{backgroundColor:'red', color:"white"}}
                                          message={error}
                                        />
                                       </Snackbar>
                                }
                       
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
                                    <SnackbarContent style={{backgroundColor:'green', color:"white"}}
                                      message={message}
                                    />
                                   </Snackbar>
                                    
                                }
                    </form>
                </Paper>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  )
  }