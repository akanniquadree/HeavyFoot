import React from 'react'
import Footer from '../../Components/Footer/Footer'
import Sidebar from '../../Components/Sidebar/Sidebar'
import TopDisplay from '../../Components/SingleProductDisplay/TopDisplay'
import Topbar from '../../Components/Topbar/Topbar'
import TopSales from '../../Components/TopSales/TopSales'
import "./singleProduct.css"


export default function SingleProduct() {
  return(
      <>
      <Topbar/>
        <div className="singleProduct">
            <div className="singleProductTop">
                <TopDisplay/>
            </div>
            <TopSales/>
            <TopSales/>
        </div>
        <Footer/>
    </>
  )
}
