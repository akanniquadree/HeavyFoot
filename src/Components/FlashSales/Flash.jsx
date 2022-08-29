import "./flash.css"
import React, { useEffect, useState } from 'react'
import { Link } from "@material-ui/core"
import { CountDownTimer } from "./CountDownTimer"

export default function Flash() {
    const Future = 3 * 24 * 60 * 60 * 1000;
    const Latest = new Date().getTime()
    const expire = Latest + Future;
    return (
    <div className="flash">
        <div className="flashWrapper">
            <CountDownTimer targetDate={expire}/>
        </div>
        
    </div>
  )
}
