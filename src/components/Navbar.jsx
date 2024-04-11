"use client"

import React, { useState } from 'react';
import Link from "next/link";
import Image from 'next/image';
import logo from '../assets/images/boost.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

import '../assets/css/components-css/navbar.css';

const Navbar = () => {
  const [show, setShow] = useState(false);

  const toggleMenu = () => {
    setShow(!show);
  };

  return (
    <nav>
      <div className="container nav">
        <div className="logo">
          <Link href="/">
            <Image
              src={logo}
              alt="Logo"
            />
          </Link>
        </div>
        <div className={`links ${show ? 'open' : ''}`}>
          
       
          <ul>
            <li><Link href="/" className='hover-links'>Home</Link></li>
            <li><Link href="/services" className='hover-links'>Services</Link></li>
            <li><Link href="/aboutus" className='hover-links'>About Us</Link></li>

            <li><Link href="/contact" className='primary-btn2'>Contact Us</Link></li>
          </ul>

        
        </div>
        <div className="hamburger" onClick={toggleMenu}>
            <FontAwesomeIcon icon={faBars} />
          </div>
        
      </div>
    </nav>
  );
};

export default Navbar;
