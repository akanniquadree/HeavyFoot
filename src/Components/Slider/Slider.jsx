import "./slider.css"
import React, { useRef,useState, useEffect }  from 'react'
import M from "materialize-css"
import { ArrowLeft, ArrowRight } from "@material-ui/icons"




export default function Slider({slides}) {
    const [current, setCurrent] = useState(1)
    const length = slides.length
    const timeout = useRef(null)
    const nextSlide = () =>{
      if(timeout.current){
        clearTimeout(timeout.current)
      }
      if(current !== length){
        setCurrent(current + 1)
      }else if(current === length){
        setCurrent(1)
      }
    }
    const prevSlide = () =>{
      if(timeout.current){
        clearTimeout(timeout.current)
      }
      if(current !== 1){
        setCurrent(current - 1)
      }else if(current === 1){
        setCurrent(length)
      }
    }
    const moveDot = (index) =>{
      if(timeout.current){
        clearTimeout(timeout.current)
      }
      setCurrent(index)
    }
    useEffect(()=>{
      const nextSlide = () =>{
        if(current !== length){
          setCurrent(current + 1)
        }else if(current === length){
          setCurrent(1)
        }
      }
      timeout.current = setTimeout(nextSlide, 3000)
      return function (){
        if(timeout.current){
          clearTimeout(timeout.current)
        }
      }
      
    },[current, length])
    
  return (
    <div className="slider">
        <div className="sliderWrapper">
            {
              slides.map((item, index)=>(
                  <div className={current === index + 1 ? "carousel active-anim": "carousel"}key={index}>
    
                        <img src={item.image} alt="" />

                  </div>
              
              ))
            }
            <ArrowLeft className="Arrow" onClick={prevSlide}/>
            <ArrowRight className="Arrow" style={{marginLeft:"50px"}} onClick={nextSlide}/>
            <div className="contDot">
              {Array.from({length:length}).map((item, index)=>(
                <div className={ current === index +1 ? "dots active": "dots"} onClick={()=>{moveDot(index + 1)}}></div>
              ))}
            </div>
        </div>
    </div>
  )
}
