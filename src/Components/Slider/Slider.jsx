import "./slider.css"
import React, { useRef,useState, useEffect }  from 'react'
import { ArrowLeft, ArrowRight } from "@material-ui/icons"
import { SliderData } from "./SliderData"




export default function Slider({slides}) {
    const [slideIndex, setSlideIndex] = useState(1)
    const timeout = useRef(null)
    const nextSlide = () =>{
      if(timeout.current){
        clearTimeout(timeout.current)
      }
      if(slideIndex !== SliderData.length){
        setSlideIndex(slideIndex + 1)
      }else if(slideIndex === SliderData.length){
        setSlideIndex(1)
      }
    }
    const prevSlide = () =>{
      if(timeout.current){
        clearTimeout(timeout.current)
      }
      if(slideIndex !== 1){
        setSlideIndex(slideIndex - 1)
      }else if(slideIndex === 1){
        setSlideIndex(SliderData.length)
      }

    }
    const moveDot = (index) =>{
      if(timeout.current){
        clearTimeout(timeout.current)
      }
      setSlideIndex(index)
    }
    useEffect(()=>{
      const nextSlide = () =>{
        if(slideIndex !== SliderData.length){
          setSlideIndex(slideIndex + 1)
        }else if(slideIndex === SliderData.length){
          setSlideIndex(1)
        }
      }
      timeout.current = setTimeout(nextSlide, 3000)
      return function (){
        if(timeout.current){
          clearTimeout(timeout.current)
        }
      }
      
    },[slideIndex])
    
  return (
    <div className="slider">
        <div className="sliderWrapper">
            {
              slides.map((item, index)=>(
                  <div className={slideIndex === index + 1 ? "slide active-anim" : "slide"}key={index}>
    
                        <img src={item.image} alt="" />
                      

                  </div>
              
              ))
            }
            <ArrowLeft  className="back " htmlColor="white" onClick={prevSlide}/>
            <ArrowRight className="back next" htmlColor="white" onClick={nextSlide}/>
            <div className="contDot">
              {Array.from({length:SliderData.length}).map((item, index)=>(
                <div className={ slideIndex === index +1 ? "dots sliactive": "dots"} onClick={()=>{moveDot(index + 1)}} key={index}></div>
              ))}
            </div>
        </div>
    </div>
  )
}
