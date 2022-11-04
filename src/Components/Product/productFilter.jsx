import React, {useState} from 'react'
import { Height, LocalOffer, Tune } from '@material-ui/icons'
import CategoryIcon from '@mui/icons-material/Category';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import PaletteIcon from '@mui/icons-material/Palette';

export default function ProductFilter() {
    
  return (
    <>
        <ul className="productFilterLeft">
            <li ><LocalOffer/>Price Range<ArrowDropDownIcon/></li>
            <li><CategoryIcon />Category<ArrowDropDownIcon/></li>
            <li><PaletteIcon/> Colour <ArrowDropDownIcon/></li>
            <li><Height/>Size <ArrowDropDownIcon/></li>
            <li><Tune/>Filter <ArrowDropDownIcon/></li>
            <li><Tune/>Product Filter <ArrowDropDownIcon/></li>
        </ul>
        
    </>
  )
}
