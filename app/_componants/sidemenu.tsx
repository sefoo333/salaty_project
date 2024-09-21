"use client"
import { FiMenu } from "react-icons/fi";

import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
interface props {
    font: string
}

import { Rakkas } from "next/font/google"

const getCar = Rakkas({
    subsets: ["latin"],
    weight: ["400"],
});

const data = [
    {
        name: "الصفحـة الرئيسية",
        href: "/"
    },
    {
        name: "اوقــات الصلاة",
        href: "/times"
    }, {
        name: "الأذكــار",
        href: "/azkar"
    }, {
        name: "التسبيــح",
        href: "/tsbeh"
    }, {
        name: "الراديــو",
        href: "/radio"
    }, {
        name: "الإعدادات",
        href: "/settings"
    }
]
function Sidemenu() {
    useEffect(() => {
      if (typeof window !== "undefined"){
            if (JSON.parse(localStorage.getItem("darkmode") || "")) {
            document.body.style.backgroundColor = "#3C3D37"
            document.body.style.color = "white"
        } else {
            document.body.style.backgroundColor = "white"
            document.body.style.color = "black"
        }
      }
    }, [JSON.parse(localStorage.getItem("darkmode") || "")])
    let [active, setActive] = useState(false)

    useEffect(() => {
        if (typeof window  !== "undefined"){
            if (localStorage.length == 0){
                localStorage.setItem("darkmode" , JSON.stringfy(false))
            }
        }
    },[])

    return (
        <>
            {typeof window !== "undefined" ? (
            <>
                  <FiMenu className="hidden z-[999999999] max-lg:block text-[30px] fixed left-[20px] top-[20px]" onClick={() => active ? setActive(false) : setActive(true)} />
            <div className={`flex h-screen flex-col justify-between relative z-[99999999] border-e max-lg:h-full max-lg:w-full max-lg:items-center max-lg:justify-center max-lg:text-center max-lg:fixed bg-white ${!active ? `max-lg:hidden` : `max-lg:flex`}`} style={JSON.parse(localStorage.getItem("darkmode") || '') ? { backgroundColor: "#1E201E", color: "white" } : {}} >
                <div className="px-4 py-6">
                    <span className={`grid text-[35px] font-bold italic  h-10 w-32 place-content-center rounded-lg  text-white ${getCar.className}`}>
                        صـلاتــي
                    </span>

                    <ul className="mt-6 space-y-1 text-nowrap">
                        {data.map((e) => (
                            <li>
                                <Link
                                    href={e.href}
                                    className={`block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 ${!JSON.parse(localStorage.getItem("darkmode") || "") ? `hover:bg-gray-100 hover:text-gray-700` : `hover:bg-[#3C3D37] hover:text-white`}`}
                                    style={JSON.parse(localStorage.getItem("darkmode") || '') ? { color: "white" } : {}}
                                >
                                    {e.name}
                                </Link>
                            </li>
                        ))}



                    </ul>
                </div>

                {/* <div className="sticky inset-x-0 bottom-0 border-t border-gray-100">
      <a href="#" className="flex items-center gap-2 bg-white p-4 hover:bg-gray-50">
        <img
          alt=""
          src="https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
          className="size-10 rounded-full object-cover"
        />
  
        <div>
          <p className="text-xs">
            <strong className="block font-medium">Eric Frusciante</strong>
  
            <span> eric@frusciante.com </span>
          </p>
        </div>
      </a>
    </div> */}
            </div>
            </>
            ) :
                null
            }
        </>
    )
}

export default Sidemenu
