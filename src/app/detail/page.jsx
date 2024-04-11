import React from 'react'

// import './contact.css';
import '../../contact/contact.css'
import contact from "../../assets/images/9628536.jpg"
import Image from 'next/image'

const page = () => {
  return (
    <>
    <div className="container">
      <div className="contact">
        <div className="contact-img">
        <Image
        src={contact}
        alt="contact for seo"
        className='img-contact'

        />
        </div>
        <div className="contact-form">
            <h2>Detail</h2>
            <form>
            <input type="text" placeholder="Your Name" />
            <input type="email" placeholder="Your Email Address" />
            <input type="tel" placeholder="Your WhatsApp Number" />
            <textarea placeholder="Your Message"></textarea>
            <button type="submit">Submit</button>
          </form>

        </div>
      </div>
     </div>
     </>
  )
}

export default page
