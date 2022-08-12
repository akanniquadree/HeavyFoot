import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import AdminSide from '../../Component/AdminSide/AdminSide'
import Accessories from '../../Component/ProductTable/Accessories'
import Bags from '../../Component/ProductTable/Bags'
import Cloths from '../../Component/ProductTable/Cloths'
import Footwears from '../../Component/ProductTable/Footwears'
import Headwears from '../../Component/ProductTable/Headwears'
import Topbar from '../../Component/Topbar/Topbar'
import "./cloth.css"



export default function ViewCloth() {
    const [cloth, setCloth] = useState(true)  
    const [bags, setBags] = useState(false)  
    const [footwears, setFootwears] = useState(false)  
    const [headwears, setHeadwears] = useState(false)  
    const [accessories, setAccessories] = useState(false)  
    const clothHandler = () =>{
        setCloth(true)
        setBags(false)
        setFootwears(false)
        setHeadwears(false)
        setAccessories(false)
    }
    const BagHandler = () =>{
        setCloth(false)
        setBags(true)
        setFootwears(false)
        setHeadwears(false)
        setAccessories(false)
    }
    const footHandler = () =>{
        setCloth(false)
        setBags(false)
        setFootwears(true)
        setHeadwears(false)
        setAccessories(false)
    }
    const headHandler = () =>{
        setCloth(false)
        setBags(false)
        setFootwears(false)
        setHeadwears(true)
        setAccessories(false)
    }
    const AccHandler = () =>{
        setCloth(false)
        setBags(false)
        setFootwears(false)
        setHeadwears(false)
        setAccessories(true)
    }
    return (
        <div className='cloth'>
            <AdminSide/>
            <div style={{flex:"6 1"}}>
                <Topbar/> 
                <div >
                    <div className="clothWrapper">
                        {cloth && <Cloths/>}
                        {bags && <Bags/>}
                        {headwears && <Headwears/>}
                        {footwears && <Footwears/>}
                        {accessories && <Accessories/>}
                        <div className="productWrapper">
                            <button onClick={clothHandler} className={`${cloth ?"pactive": "" }`}>Clothes</button>
                            <button onClick={BagHandler} className={`${bags ?"pactive": "" }`}>Bags</button>
                            <button onClick={footHandler} className={`${footwears ?"pactive": "" }`}>Footwears</button>
                            <button onClick={headHandler} className={`${headwears ?"pactive": "" }`}>Headwears</button>
                            <button onClick={AccHandler} className={`${accessories ?"pactive": "" }`}>Accessories</button>
                        </div>
                    </div> 
                </div>
            </div>
        </div>
  )
}