import React from 'react'

function ShowTimer({days, hours, minutes, seconds }) {
  return (
    <div className="flashTop">
        <h5>Flash Sales</h5>
        <h6>Time Left: {days}days : {hours}hrs : {minutes}mins : {seconds} secs</h6>
        <span>See All</span>
    </div>
  )
}

export default ShowTimer