"use client"


import React, { useEffect, useState } from 'react'
import { FaGithub } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io5";

import { Rakkas } from "next/font/google"

const getCar = Rakkas({
    subsets: ["latin"],
    weight: ["400"],
});

function Footer() {
   let [dark2, setDark2] = useState(false);
    
    const darkmodeon = () => {
        
    if (localStorage.getItem("darkmode") !== null){
        setDark2(JSON.parse(localStorage.getItem("darkmode") || ''));
    }
        
    }

    useEffect(() => {
        darkmodeon()
    },[])
    return (
        <>
                <>
                    {!dark2 ? (
                         <footer className="bg-gray-50">
                            <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
                                <div className="sm:flex sm:items-center sm:justify-between">
                                    <div className={`flex justify-center text-[25px] text-teal-600 sm:justify-start ${getCar.className}`}>
                                        <h1>صلاتـي</h1>
                                    </div>

                                    <div className="group">
                                            <p className="mt-4 text-center text-sm lg:mt-0 lg:text-right text-gray-400">
                                                Copyright &copy; {new Date().getFullYear()}. All rights reserved.
                                            </p>
                                            <div className="links flex text-[20px] mt-[10px] items-center justify-center">
                                                <a href="https://www.linkedin.com/in/sefoo333/" target='_blank' className='transition p-[10px] hover:bg-slate-800 hover:text-white rounded-full'>
                                                    <FaGithub  className='text-black' />
                                                </a>
                                                <a href="https://github.com/sefoo333" target="_blank" className='ml-[10px]  p-[10px] transition hover:bg-cyan-500 hover:text-white rounded-full'>
                                                    <IoLogoLinkedin  className='text-black'/>
                                                </a>

                                            </div>
                                        </div>
                                </div>
                            </div>
                        </footer>
                    ) :
                        (
                            <footer className="bg-gray-900">
                                <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
                                    <div className="sm:flex sm:items-center sm:justify-between">
                                        <div className={`flex justify-center text-[25px]  sm:justify-start text-teal-300  ${getCar.className}`}>
                                            صـلاتــي
                                        </div>

                                        <div className="group">
                                            <p className="mt-4 text-center text-sm lg:mt-0 lg:text-right text-gray-400">
                                                Copyright &copy; {new Date().getFullYear()}. All rights reserved.
                                            </p>
                                            <div className="links flex text-[20px] mt-[10px] items-center justify-center">
                                                <a href="https://www.linkedin.com/in/sefoo333/" target='_blank' className='transition p-[10px] hover:bg-slate-800 rounded-full'>
                                                    <FaGithub />
                                                </a>
                                                <a href="https://github.com/sefoo333" target="_blank" className='ml-[10px]  p-[10px] transition hover:bg-cyan-500 rounded-full'>
                                                    <IoLogoLinkedin />
                                                </a>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </footer>
                        )
                    }
                </>
        </>
    )
}

export default Footer
