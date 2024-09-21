"use client"


import React, { useEffect, useRef, useState } from 'react'
import { FaPlay } from "react-icons/fa6";
import { IoPause } from "react-icons/io5";
import { MdFullscreen } from "react-icons/md";
import { FaRadio } from "react-icons/fa6";

import { AiFillSound } from "react-icons/ai";
import { FaVolumeMute } from "react-icons/fa";

function Radio() {
    let [active, setActive] = useState(true)
    let [active2, setActive2] = useState(true)
    let [Time, setTime]: any = useState("")
    let audio2: any = useRef()
 let data:any = ""
    useEffect(() => {
        if (typeof window !== "undefined"){
            data =   localStorage.getItem("audio");
        }
},[])
    return (
        <div className="radio_window w-[700px] h-[500px] rounded-md bg-black relative">



            <div className="radio_information absolute left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] flex flex-col justify-center items-center">
                <FaRadio className=' text-[#dddddd82] text-[50px]' />
                <h1 className='text-[#ccc]'>{JSON.parse(data).name2}</h1>
            </div>

            <div className="bottom absolute bottom-0 bg-red-400 flex justify-between items-center w-full text-white py-[15px] px-[20px] text-[20px]">
                <audio onTimeUpdate={(e) => {
                    setTime(e.currentTarget.currentTime.toFixed(0))


                }} ref={audio2} src={JSON.parse(data).name}>

                </audio>
                <div className="play flex" onClick={() => {
                    active2 ? setActive2(false)
                        : setActive2(true)
                }} >

                    {active2 ? (
                        <FaPlay className='mr-[20px] cursor-pointer' onClick={() => {
                            if (audio2.current !== "") {
                                audio2.current.play()
                            }
                        }} />

                    ) : (
                        <IoPause className='cursor-pointer' onClick={() => {
                            if (audio2.current !== "") {
                                audio2.current.pause()
                            }
                        }} />
                    )}

                </div>
                <div className="audio_count flex">
                    {!Number.isNaN((parseInt(Time) / 60)) ? (parseInt(Time) / 60).toFixed(0) : "0"}:{Time}
                </div>

                <div className="audio cursor-pointer" onClick={() => {
                    active ? setActive(false) : setActive(true)
                }}>
                    {active ? (<AiFillSound onClick={() => {
                        audio2.current.volume = 0
                    }} />) : (<FaVolumeMute onClick={() => {
                        audio2.current.volume = 1
                    }} />)}
                </div>
            </div>
        </div>
    )
}

export default Radio
