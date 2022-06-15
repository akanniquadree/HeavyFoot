import "./slider.css"
import React, { useRef,useState, useEffect }  from 'react'
import M from "materialize-css"
import { ArrowLeft, ArrowRight } from "@material-ui/icons"




export default function Slider({slides}) {
    const [current, setCurrent] = useState(0)
    const length = slides.length
    const nextSlide = () =>{
      setCurrent(current === length - 1 ? 0 : current +1)
      console.log(current)
    }
    const prevSlide = () =>{
      setCurrent(current === 0 ? length - 1 : current -1)
      console.log(current)
    }
    useEffect(()=>{
    },[])
    
  return (
    <div className="slider">
        <div className="sliderWrapper">
          <div className="carousel" >
            {
              slides.map((item, index)=>(
                  <div className="carouselItem"key={index}>
                    {index === current && (
                      <div className="carouselItemWrapper">
                        <img src={item.image} alt="" />
                      </div>
                    )}
                  </div>
              
              ))
            }
            <ArrowLeft className="Arrow" onClick={prevSlide}/>
            <ArrowRight className="Arrow" style={{marginLeft:"50px"}} onClick={nextSlide}/>
          </div>
        </div>
    </div>
  )
}
