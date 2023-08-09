import React, { useContext } from 'react'
import { MyContext } from './ProductContext'

export function ContactUs() {
  const msg=useContext(MyContext)
  return (
    <div> Contact me when am free vinod here {msg} </div>
  )
}

export default ContactUs