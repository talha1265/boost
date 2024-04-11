import Link from 'next/link'
import React from 'react'

const Banner = () => {
  return (
    <>
    <div className="banner container">
        <div className="banner-content ">
            <h2>Be a part of our family and boost your business with us.</h2>
            <Link href="/contact" className='banner-btn'>Get Started</Link>
        </div>
        </div></>
  )
}

export default Banner
