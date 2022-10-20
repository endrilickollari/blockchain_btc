import React from 'react'
import Switcher from '../switcher/Switcher';
import Dropdown from "./Dropdown";


function Navbar() {
    return (
        <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
            <div className="container flex flex-wrap justify-between items-center mx-auto">
                <a href="https://flowbite.com/" className="flex items-center">
                    <img
                        src="/btc-logo.png"
                        className="mr-3 h-6 sm:h-9"
                        alt=""/>
                    <span
                        className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">BTC Blockchain</span>
                </a>
                {/*<div className='md:block hidden'>*/}
                {/*    <Dropdown/>*/}
                {/*</div>*/}
                <div className='md:block hidden'>
                    <Switcher/>
                </div>
            </div>
        </nav>


    )
}

export default Navbar;