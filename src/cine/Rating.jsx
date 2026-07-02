import React from 'react'
import star from "../assets/star.svg"
function Rating({value}) {
    const stars = Array(value).fill(star)
  return (
    <>
       {stars.map((star, index)=>(
        <img
              key={index}
              src={star}
              alt="star"
              className="h-4 w-4"
            />
       ))}
    </>
  )
}

export default Rating
