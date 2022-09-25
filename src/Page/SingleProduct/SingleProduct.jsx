import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Footer from '../../Components/Footer/Footer'
import SimilarProduct from '../../Components/SingleProductDisplay/SimilarProduct'
import TopDisplay from '../../Components/SingleProductDisplay/TopDisplay'
import Topbar from '../../Components/Topbar/Topbar'
import TopSales from '../../Components/TopSales/TopSales'
import NotFound from '../NotFound/NotFound'
import "./singleProduct.css"


export default function SingleProduct() {
  const [notFound, setNotFound] = useState(false)
  const [product, setProduct]=useState([])
  const {id} = useParams()
  useEffect(()=>{
    const Clothe = async() =>{
        const {data} = await axios.get("https://ecommerces-api.herokuapp.com/api/v1/public/get_all_products")
        setProduct(data.filter((item)=> String(item.id) === id))
        if(product.filter((itm)=> String(itm.id) === id)){
          setNotFound(true)
        }
      }
      Clothe()
      
},[])
  return(
      <>
      {
        notFound ?
          <>
            <Topbar/>
              <div className="singleProduct">
                  <div className="singleProductTop">
                      <TopDisplay/>
                  </div>
                  <SimilarProduct cat={product[0].category}/>
                  <TopSales/>
              </div>
              <Footer/>
          </>
        :
        <NotFound/>
      }
    </>
  )
}
