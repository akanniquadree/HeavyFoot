import { Skeleton } from "@mui/material"
import axios from "axios"
import { useEffect, useState } from "react"
import "./homeGadget.css"

export default function HomeGadgetTwo() {
  const [product, setProduct] = useState([])
  const [cat, setCat] = useState([])
  const[fetching, setFetching] = useState(true)
  useEffect(()=>{
    let ignore = false
    if(!ignore){
      const Clothe = async() =>{
        const {data} = await axios.get("https://ecommerces-api.herokuapp.com/api/v1/public/get_all_products")
        const Cate = await axios.get("https://ecommerces-api.herokuapp.com/api/v1/public/get_all_category")
        setCat(Cate.data.data[3])
        if(data){
        setProduct(data.filter((itm)=> itm.category === Cate.data.data[3].name))
        setFetching(false)
      }}
      Clothe()
    }
    return () => {ignore = true}
  },[])

  return (
    <div className="homeFashion margin">
    <div className="homeFashionWrapper">
        <div className="homeFashionTop">
                <h5>{cat.name}</h5>
            <span> View All</span>
        </div>
        <div className="homeFashionBottom" >
          {
           !fetching ? product.slice(0, 5).map((itm, index)=>(
              <div className="homeFashionBottomImg" key={index}>
                <img src="/Images/david.jpg" alt="" /> 
                <h5>{itm.name}</h5> 
                <span>{itm.discount}</span>
                <p>{itm.price}</p>
                <button>Add to Cart</button>
              </div>
              ))
              :
              <Skeleton  animation="wave" width="100%" height="305px" sx={{marginLeft:"10px", backgroundColor:"transparent"}} />
          }
        </div>
    </div>
</div>
  )
}
