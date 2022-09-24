import React from 'react'
import FlashPromotion from '../../Components/FlashPromotion/FlashPromotion'
import Flash from '../../Components/FlashSales/Flash'
import Footer from '../../Components/Footer/Footer'
import HomeFashion from '../../Components/HomeFashion/HomeFashion'
import HomeGadget from '../../Components/HomeGadget/HomeGadget'
import HomeGadgetTwo from '../../Components/HomeGadget2/HomeGadget2'
import Promotion from '../../Components/Promotion/Promotion'
import Sidebar from '../../Components/Sidebar/Sidebar'
import Slider from '../../Components/Slider/Slider'
import { SliderData } from '../../Components/Slider/SliderData'
import Topbar from '../../Components/Topbar/Topbar'
import TopCart from '../../Components/TopCat/TopCart'
import TopSales from '../../Components/TopSales/TopSales'
import "./home.css"

export default function Home() {
  return (
    <>
      <Topbar/>
      <Slider slides={SliderData}/>
      <Flash/>
      <TopSales/>
      <TopCart/>
      <HomeFashion/>
      <HomeGadget/>
      <HomeGadgetTwo/>
      <Promotion/>
      {/* <Footer/> */}
    </>
  )
}
