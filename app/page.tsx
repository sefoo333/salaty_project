"use client"

import Image from "next/image";
// import "../images/pexels-samrana3003-1883409.jpg"

import jsonfile from "./json_files/adkar.json"
import Praytimes from "./_componants/praytimesclient";
import Link from "next/link";


const sections = [{
  name: "اوقات الصلاه",
  href: "/praytimes.jpg",
  link: "/times"
}, {
  name: " الأذكار",
  href: "/azkar.jpg",
  link: "/azkar"
}, {
  name: "التسبيح",
  href: "/tsbeh.jpg",
  link: "/tsbeh"
}, {
  name: "الراديو",
  href: "/radio.jpg",
  link: "/radio"
}
]


export default function Home() {


  return (
    <>
    {typeof window !== "undefined" ? (
      <>
            <div className="parent px-[30px] w-full">
      <Praytimes />
      <div className="doaa_time w-full h-[400px] mt-[50px] mb-[100px]">
        <div className="main text-[40px] font-bold w-full flex justify-end px-[30px] py-[20px]">
          <h1 className="w-[200px] text-right border-b-[black] border-b-[5px]">دعاء اليوم</h1>
        </div>
        <div className="panel relative overflow-hidden flex w-full h-full  text-white rounded-3xl items-center justify-center text-[30px] ">
          <div className="image absolute w-full h-full before:bg-[#0000007a] before:w-full before:absolute before:h-full">
            <img src="/azkar.jpg" className="w-full z-[-1] h-full object-cover absolute  " alt=""></img>
          </div>
          <h1 className="z-[9] text-[22px] text-center">
            {jsonfile["أدعية الأنبياء"][Math.round(Math.random() * 2)]?.content}
          </h1>
        </div>
      </div>
      <div className="secions ">
        <div className="main text-[40px] font-bold w-full flex justify-end px-[30px] py-[20px]">
          <h1 className="w-[200px] text-right border-b-[black] border-b-[5px]">الاقسام</h1>
        </div>
        <div className="parent max-sm:grid-cols-1 grid grid-cols-3 w-full gap-[10px] mt-[30px] justify-items-center">
          {sections.map((e) => (
            <Link href={e.link} className="link">
              <div className="element relative text-nowrap px-[40px] py-[20px] w-[200px] h-[150px]  overflow-hidden  rounded-xl flex items-center justify-center bg-black text-white text-[20px] cursor-pointer transition-[500ms] hover:scale-110">
                <div className="image absolute h-full w-full before:bg-[#0000007a] before:w-full before:z-10 before:absolute before:h-full">
                  <img src={e.href} className="w-full  h-full object-cover absolute  " alt=""></img>
                </div>
                <h1 className="z-10">{e.name}</h1>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
      </>
    ): null}
    </>
  );
}
