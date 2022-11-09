import React from 'react'
import Link from 'next/link';
import { useState } from 'react';
import {menu} from './menu'

function Navbar() {
    const [navbar, setNavbar] = useState(false);
    const HandleSideMenu = (flag = false, index = undefined) => {
      setActiveMenu(index)
      flag && setIsSideMenuOpen(!isSideMenuOpen)
      isSideMenuOpen && setIsSideMenuOpen(false)
    }
  return (
    <>
    <nav className="w-full bg-black bg-opacity-80 text-teal-400 fixed z-20  shadow">
        <div className="justify-between px-4 md:px-2 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
          <div>
            <div className="flex items-center justify-between py-3 md:py-5 md:block">
               <Link href="/">
                <h2 className="text-2xl  font-bold">Top Tiling</h2>
              </Link> 
              <div className="md:hidden">
                <button
                  className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 text-white"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                navbar ? 'block' : 'hidden'
              }`}
            >
            <ul className="items-center justify-center space-y-1 md:flex md:space-x-1 md:space-y-0 text-center ">
              {menu.map((item,i)=>{
                return(           
                    <li key={i} className="hover:text-teal-700  py-3 px-4 hover:border-b-2 border-teal-500"  >
                      <Link href={item.url} onClick={() => HandleSideMenu(false, index)} >
                        {item.title}
                      </Link>
                    </li>                
                )
              })}

            </ul>
  
            </div>
          </div>
        </div>
      </nav>

    </>
  )
}

export default Navbar