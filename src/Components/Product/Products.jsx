import React, {useEffect, useState} from 'react'
import "./products.css"
import Sidebar from '../Sidebar/Sidebar'
import axios from "axios"

export default function Products() {
  const [product, setProduct] = useState([])
  useEffect(()=>{
    const Clothe = async() =>{
      const {data} = await axios.get("https://ecommerces-api.herokuapp.com/api/v1/public/get_all_products")
      setProduct(data)
    }
    Clothe()
  },[product])
  return (
    <div className="products">
        <div className="productsWrapper">
            <Sidebar/>
            <div className="productsProduct">
              <div className="productProductsTop">
                <h5>Fashion</h5>
              </div>
              <div className="productsLists">
                {
                  product.map((itm, index) =>(
                    <div className="productsListsWrapper">
                      <div className="productListsTop">
                        <img src="/Images/boxer.jpg" alt="" />
                      </div>
                      <div className="productListsBottom">
                        <h5>{itm.name}</h5>
                        <span>{itm.discount}</span>
                        <p>{itm.price}</p>
                        <button className='productListsButton'>Add To Cart</button>
                      </div>
                    </div>
                  ))
                }
                
              </div>
            </div>
        </div>
    </div>
  )
}
