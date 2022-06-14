import "./slider.css"
import React, { useRef, useEffect }  from 'react'
import M from "materialize-css"




export default function Slider() {
    const slider = useRef(null)
    useEffect(()=>{
        M.Carousel.init(slider.current, {numVisible:1,noWrap:true, fullWidth:true, indicators: true})
    },[])
    
  return (
    <div className="slider">
        <div className="sliderWrapper">
        <div className="carousel" ref={slider}>
            <a className="carousel-item" href="#one!"><img src="/Images/caro.jpg" className="carousel-items" alt=""/></a>
            <a className="carousel-item" href="#two!"><img src="/Images/caro1.jpg" className="carousel-items" alt=""/></a>
            <a className="carousel-item" href="#three!"><img src="/Images/caro2.jpg" className="carousel-items" alt=""/></a>
            <a className="carousel-item" href="#four!"><img src="/Images/caro3.jpg" className="carousel-items" alt=""/></a>
            <a className="carousel-item" href="#five!"><img src="/Images/caro2.jpg" className="carousel-items" alt=""/></a>
  </div>
        </div>
    </div>
  )
}
