import { useEffect, useState } from "react"
import "./homeFashion.css"
import axios from "axios"
import { Skeleton, Paper } from "@mui/material"
import { ArrowRightAlt } from "@material-ui/icons"
import { Link } from "react-router-dom"

export default function HomeFashion() {
  const [product, setProduct] = useState([])
  const [cat, setCat] = useState([])
  const[fetching, setFetching] = useState(true)
  useEffect(()=>{
    let ignore = false
    if(!ignore){
      const Clothe = async() =>{
        const {data} = await axios.get("https://ecommerces-api.herokuapp.com/api/v1/public/get_all_products")
        const Cate = await axios.get("https://ecommerces-api.herokuapp.com/api/v1/public/get_all_category")
        setCat(Cate.data.data)
        console.log(data)
        if(data){
        setProduct(data)
        setFetching(false)
      }
      }
      Clothe()
    }
    return () => {ignore = true}
  },[])
  return (
    <div className="homeFashion">
          <div className="homeFashionWrapper">
           <div className="homeFashionTop">
                    <h5>Start Exploring.</h5>
            </div>
            
            <div className="homeFashionBottom" >
              {
              !fetching ? cat.slice(0, 7).map((itm, index)=>(
                <Paper elevation={1} className="homeFashionBottomImg" key={index}>
                  <div className="homeFashionBottomTop">
                      <img src="/Images/david.jpg" alt="" /> 
                      <p className="homeFashionBottomTopP">{product.filter((item)=> item.category === itm.name).length} Products</p>
                  </div>
                  <div className="homeFashionBottomCenter">
                    <span>Category</span>
                      <h5>{itm.name}</h5>
                  </div>
                  <Link to="" className="More">See Collections <ArrowRightAlt  sx={{marginLeft:"10px", fontSize:"1.9rem"}} /></Link>
               
            </Paper>
            ))
            :
            <Skeleton  animation="wave" width="100%" height="305px" sx={{marginLeft:"10px", backgroundColor:"transparent"}} />
          }
        </div>
        </div>  
    </div>
  )
}
