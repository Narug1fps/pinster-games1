"use client";
import React, { useState } from "react";
import Image from "next/image"
import Link from "next/link"

const Header = ( ) => {
    
    const [isClick , setisClick] = useState(false);
    
    const toogleNavbar = () =>{
        setisClick(!isClick) 
    }
    return <>
   
    <nav className="bg-black">
        <div className="max-w-7xl mx-auto  px-4 sm:px-6 lg:px-8">
            di
          <div className="flex items center justify-between h-16">
            <div className="flex items-center">
                 <div className="flex-shrink-0">
                    <div className="">
                        <div className=""> 
                              <Image src="/Logo (1).png"  width={100} height={100}/>
                        </div>
                    </div>
                 </div>
             </div>
             <div className="hidden md:block">
                <div className="ml-4 fkex items-center space-x-4 wt-4">
                    <a href="/" className="text-white hover:bg-white hover:text-black rounded-lg p-2">
                        Home
                    </a>
                    <a href="/" className="text-white hover:bg-white hover:text-black rounded-lg p-2">
                        About
                    </a>
                    <a href="/" className="text-white hover:bg-white hover:text-black rounded-lg p-2">
                        Discord
                    </a>
                    <a href="/" className="text-white hover:bg-red-600 hover:p-3 hover:shadow-[0px_3px_20px_5px_#f7fafc] hover:text-black rounded-lg p-2">
                        Games
                    </a>
                 
             </div>
           </div>
               <div className="md:hidden flex items-center">
                <button className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                onClick={toogleNavbar}>
                   {isClick ? (
                    <svg  className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor" >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"/>
  </svg>
                   ) : (
                    <svg  className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16m-7 6h7"/>
  </svg>
                       )}
                </button>
               </div>
        </div> 
   </div>
  {isClick &&(
    <div className="md:hidden ">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
        <a href="/" className="text-white hover:bg-white hover:text-black rounded-lg p-2 block">
                        Home
                    </a>
                    <a href="/" className="text-white hover:bg-white hover:text-black rounded-lg p-2 block">
                        About
                    </a>
                    <a href="/" className="text-white hover:bg-white hover:text-black rounded-lg p-2 block">
                        Discord
                    </a>
                    <a href="/" className="text-white hover:bg-red-600 hover:text-white rounded-lg p-2 block ">
                        Games
                    </a>
        </div>
    </div>
  )}
  <div className="h-2 bg-red-600 w-full "></div>
    </nav>

    </>
}

export default Header;