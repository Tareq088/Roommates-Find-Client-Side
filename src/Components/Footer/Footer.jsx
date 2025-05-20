import React from 'react';
import roomMateLogo from '../../assets/roomMate_logo.png'
import { Link } from 'react-router';
import { FaFacebook } from 'react-icons/fa';
import { IoLogoFigma } from 'react-icons/io5';
import { SiNetlify } from 'react-icons/si';


const Footer = () => {
  return (
    <footer className="bg-gray-100 text-center text-xs sm:text-sm text-gray-600 p-8 space-y-3">
      <div className='space-y-2'>
        <Link>
            <img className='w-20 h-20 mx-auto rounded-full' src={roomMateLogo}></img>
        </Link>
        <strong>Find Mate Company Ltd.</strong><br />
        1234 Road Name, City, Country<br />
        Email: contact@example.com | Phone: +880 123 456 7890
      </div>
      <div className="mt-3">
        <Link href="/terms-and-conditions" className="text-gray-600 hover:underline mx-2">
          Terms and Conditions
        </Link>
        |
        <Link href="/privacy-policy" className="text-gray-600 hover:underline mx-2">
          Privacy Policy
        </Link>
      </div>
        <div className=' flex justify-center gap-2'>
            <a className='text-xl' href="https://www.facebook.com/"><FaFacebook color='blue'/></a>
            <a className='text-xl' href="https://github.com/Tareq088"><IoLogoFigma color='black'/></a>
            <a className='text-xl' href="https://app.netlify.com/teams/tareqrahman342"><SiNetlify color='green'/></a>
        </div>
      <div className="mt-3">
        &copy; {new Date().getFullYear()} Find Mate Company Ltd. All rights reserved.
      </div>
    </footer>
  );

}

export default Footer;