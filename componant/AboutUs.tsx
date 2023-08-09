import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { MyContext } from './ProductContext';

//when u need to use routing then use useParam


export const AboutUs = () => {
    // const {name}=useParams();
    const msg =useContext(MyContext)
  return (
    <div>Welcome vinod {msg}</div>
  )
}

export default AboutUs