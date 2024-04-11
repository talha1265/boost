import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import logo from '../assets/images/logo3.png';
import '@fortawesome/fontawesome-free/css/all.css';

import '../assets/css/components-css/footer.css';


const Footer = () => {
  return (
  <div className="footer">
    <div className="footer-content container">
        <div className="brand-logo">
        <Image
        src={logo}
        alt="Brand booster seo work agency"
        

        /> 
        <p>Boost brand presence and reach with tailored SEO solutions. Drive digital growth and maximize online visibility with our expert strategies.</p>  
        </div>
        <div className="footer-links">
            <ul className="ul-links">
              <h2>Quick Links</h2>
              <li><Link href="#" className='ul-link'>Home</Link></li>
              <li><Link href="#" className='ul-link'>Services</Link></li>
              <li> <Link href="#" className='ul-link'>About Us</Link></li>
              <li> <Link href="#" className='ul-link' >Contact Us</Link></li>
            </ul>
            <div className="social-handles">
            <h2>Social Handles</h2>
            <ul className="ul-links2">
              
              <li><Link href="#" className='social'><i class="fa-brands fa-instagram" ></i></Link></li>
              <li><Link href="#" className='social'><i class="fa-brands fa-youtube" ></i></Link></li>
              <li> <Link href="#" className='social'><i class="fa-brands fa-whatsapp" ></i></Link></li>
             
            </ul>
            </div>
            

        </div>
        
    </div>
    <p className="copyright">&copy;2024 Brand Booster. All rights reserved.</p>
  </div>
  )
}

export default Footer
