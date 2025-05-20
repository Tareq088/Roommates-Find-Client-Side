import React from 'react';
import roomMateLogo from '../../assets/roomMate_logo.png'
import { Link } from 'react-router';


const Footer = () => {
  return (
    <footer className="bg-gray-100 text-center text-sm text-gray-600 py-6">
      <div>
        <img className='w-20 h-20 mx-auto rounded-full' src={roomMateLogo}></img>
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
      <div className="mt-3">
        &copy; {new Date().getFullYear()} Example Company Ltd. All rights reserved.
      </div>
    </footer>
  );

}

export default Footer;