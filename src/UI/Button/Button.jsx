import React from 'react';

const Button = ({size,label,type}) => {
    return (
        <button 
        size={size}
        type={type}
        
         href="#_" className="inline-flex items-center justify-center w-full px-8 py-3 text-lg font-bold leading-6 text-white bg-green-600 border border-transparent rounded-full md:w-auto hover:bg-green-500 focus:outline-none focus:ring-green-600 cursor-pointer">
            {label}
        </button>
    );
};

export default Button;