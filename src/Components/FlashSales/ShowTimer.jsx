import { Button, CircularProgress, Paper } from '@mui/material'
import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../Context/AuthContext'
import Skeleton from '@mui/material/Skeleton';
import { ArrowBackIos, ArrowForwardIos } from '@material-ui/icons'


function ShowTimer({days, hours, minutes, seconds }) {
    const [product, setProduct] = useState([])
    const[disable, setDisable] = useState(false)
    const[fetching, setFetching] = useState(true)
    const[error, setError] = useState("")
    const[message, setMessage] = useState("")
    const {user} = useContext(AuthContext)
    const[quantity, setQuantity] = useState(1)
    const [currentPage, setCurrentPage] = useState(1)
    const [postPerPage, setPostPerPage] = useState(4)
    //To get current posts
    const indexOfLastPage = currentPage * postPerPage
    const indexOfFirstPage = indexOfLastPage - postPerPage
    useEffect(()=>{
        let ignore = false
       const Product = async() =>{
        const {data} = await axios.get("https://ecommerces-api.herokuapp.com/api/v1/public/get_all_products")
        if (!ignore) { 
            setProduct(data.reverse()); 
            setFetching(false)
        }
       }
       Product()
        return () => { ignore = true }; 
    },[])
    const addToCart = async({id,name, price,img}) =>{
        if(user){
            try{    
                const {data} = await axios.post("https://ecommerces-api.herokuapp.com/api/v1/user/add_to_cart",{product_id:id,product_name:name,product_price:price,product_image:img,quantity,product_image_url:img},{headers:{"Authorization":"Bearer " +localStorage.getItem("token")}})
                setDisable(true)
                if(data){
                    console.log(data)
                    setError("")
                    setMessage(data.message)
                    console.log(data)
                    setDisable(false)
                }
            }catch(error){
                console.log(error)
                setError(error.response.data.message)
                setDisable(false)
            } 
      }else{
        window.location.replace(`/login?redirect=product/${id}`)
        setDisable(true)
      }
    }
    function goToPrev(page){
        setCurrentPage((page) => page - 1)
    }
    //go to next page
    function goToNext (page){
        setCurrentPage((page) => page + 1) 
    }
    const pageNumber = [];
    for (let i = 1; i <= Math.ceil(product.length / postPerPage); i++){
        pageNumber.push(i)
    }
  return (
    <>
        <div className="flashTop">
            <h5>Flash Sales</h5>
            <h6>Time Left: {days}days : {hours}hrs : {minutes}mins : {seconds} secs</h6>
            <span>See All</span>
        </div>
        <div className="flashBottom">
        {
              fetching ?
                
                    <Skeleton animation="wave" width="100%" height="198px" sx={{marginLeft:"10px", backgroundColor:"transparent"}} />
              :
                product?.slice(indexOfFirstPage, indexOfLastPage).map((itm, index)=>(
                    <Paper elevation={3} className="cover" key={index}>
                            <Link to={`/product/${itm.id}`} className="" >
                                <div className="TopSALE">
                                    <img src="/Images/boxer.jpg" alt="" />
                                    <div className="addTo">
                                        <Button sx={{backgroundColor:"black",borderRadius:"5px", fontSize:"10px"}} size="small" variant="contained" disabled={disable} onClick={()=>{addToCart({id:itm.id,name:itm.name, price:itm.discount,img:itm.avater})}}>{disable ? <CircularProgress thickness={4.0} style={{color:"white"}} size="13px"/>:"Add To Cart"}</Button>
                                        <Button sx={{backgroundColor:"white", color:"black",borderRadius:"5px", fontSize:"10px"}} size="small" variant="contained">Quick View</Button>
                                    </div>
                                </div>
                                <div className="Topsale">
                                    <h5>{itm.name}</h5>
                                    <p>{itm.status} item remaining</p>
                                    <div className="TopsaleBot">
                                       <div className="disc">{itm.discount} </div> 
                                       <div className="rev">(25 reviews) </div> 
                                    </div>
                                    
                                </div>
                            </Link>
                           
                            {/* <button  disabled={disable}onClick={()=>{addToCart({id:itm.id,name:itm.name, price:itm.discount,img:itm.avater})}}>{disable ? <CircularProgress thickness={4.0} style={{color:"white"}} size="13px"/>:"Add To Cart"}</button> */}
                        </Paper>
                )) 
                
            }
                <ArrowBackIos  className={`backs ${currentPage === 1 ? "disable": "" }`} htmlColor="black" onClick={goToPrev}/>
                <ArrowForwardIos className={`backs nexts `} htmlColor="black" onClick={goToNext}/>    
        </div>
    </>
  )
}

export default ShowTimer