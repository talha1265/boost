import React from 'react'
import Link from "next/link";
import Image from 'next/image';
import th from '../assets/images/th.jpeg';
import '../assets/css/components-css/cards.css';

const Cards = ({data}) => {
  console.log(data)
  return (
   <div className="card">
     <Image
        src={data.img}
        alt="hero"
        width={500}
        height={300} // Set the width and height of your image


        />
        <div className="card-content">

        
        <h4>{data.heading}</h4>
        <p>{data.para}</p>
        <div  className="bottom-date">
        <Link href={`/blog-detail/${data.id}`} className='read-more-btn'>Read More</Link>
        <p>{data.date}</p>
        </div>
       
        </div>
   </div>
  )
}

export default Cards
