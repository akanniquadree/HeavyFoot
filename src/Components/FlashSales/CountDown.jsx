import React, { useEffect, useState } from 'react'

 const useCountDown = (targetDate) =>{
    const countDownDate = new Date(targetDate).getTime();
    const [countDown, setCountDown] = useState(countDownDate - Date.UTC(2022, 8, 24, 2))

    useEffect(()=>{
        const interval = setInterval(() => {
            setCountDown(countDownDate - new Date().getTime());
        }, 1000);
    
        return () => clearInterval(interval);
    },[countDownDate])
    return getReturnValues(countDown)
}

const getReturnValues = (countDown) =>{
    //days left
    const days = Math.floor(countDown/(1000* 60 * 60 * 24))
    const hours = Math.floor(
        (countDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((countDown % (1000 * 60)) / 1000);
    
      return [days, hours, minutes, seconds];
}

export {useCountDown}