"use client"

import React, { useEffect, useState } from 'react'

function PrayNext() {

    let [data1, setGet]: any = useState([])

    useEffect(() => {
        let country: any = localStorage.getItem("country")?.split("/")
        const get = async () => {
            let response = await fetch(`http://api.aladhan.com/v1/timingsByCity?country=${country[0]}&city=${country[1]}`);
            let data1: any = await response.json()
            setGet(data1)
        }
        return () => {
            get();
        }
    },[])

    let time: any = new Date().getHours();

    const salat = [{
        name: "الفجر",
        time: data1?.data?.timings?.Fajr,
    }, {
        name: "الشروق",
        time: data1?.data?.timings?.Sunrise,
    }, {
        name: "الظهر",
        time: data1?.data?.timings?.Dhuhr,
    }, {
        name: "العصر",
        time: data1?.data?.timings?.Asr,
    },
    {
        name: "المغرب",
        time: data1?.data?.timings?.Maghrib,
    },
    {
        name: "العشاء",
        time: data1?.data?.timings?.Isha,
    }
    ]
    return (
        <div className="element relative text-nowrap px-[40px] py-[20px] w-full h-[300px]  overflow-hidden  rounded-xl flex items-center justify-center bg-black text-white text-[20px]  ">
            <div className="image absolute h-full w-full before:bg-[#0000007a] before:w-full before:z-10 before:absolute before:h-full">
                <img src="/azkar.jpg" className="w-full  h-full object-cover absolute  " alt=""></img>
            </div>
            <div className="time z-[9999] text-[30px] text-center">
                <h1>
                    تبقى لصلاة

                    {
                        time < parseInt(salat[0].time?.slice(0, 2)) || time > parseInt(salat[5]?.time?.slice(0, 2)) ? (
                            ` ${salat[0].name}`
                        ) : time < parseInt(salat[1].time?.slice(0, 2)) ? (
                            ` ${salat[1].name}`
                        ) : time < parseInt(salat[2].time?.slice(0, 2)) ? (
                            ` ${salat[2].name}`
                        ) : time < parseInt(salat[3].time?.slice(0, 2)) ? (
                            ` ${salat[3].name}`
                        ) : time < parseInt(salat[4].time?.slice(0, 2)) ? (
                            ` ${salat[4].name}`
                        ) : time < parseInt(salat[5].time?.slice(0, 2)) ? (
                            ` ${salat[5].name}`
                        )
                            : time < parseInt(salat[6]?.time?.slice(0, 2)) ?
                                (
                                    ` ${salat[6].name}`
                                ) : null
                    }
                </h1>
                <span >{
                    time < parseInt(salat[0].time?.slice(0, 2)) ? (
                        ` ${parseInt(salat[0].time?.slice(0, 2)) - new Date().getHours() === 2 ? "ساعتان" : `ساعة ${parseInt(salat[0].time?.slice(0, 2)) - new Date().getHours()}`} `
                    ) : time < parseInt(salat[1].time?.slice(0, 2)) ? (
                        ` ${parseInt(salat[1].time?.slice(0, 2)) - new Date().getHours() === 2 ? "ساعتان" : `ساعة ${parseInt(salat[1].time?.slice(0, 2)) - new Date().getHours()}`} `
                    ) : time < parseInt(salat[2].time?.slice(0, 2)) ? (
                        ` ${parseInt(salat[2].time?.slice(0, 2)) - new Date().getHours() === 2 ? "ساعتان" : `ساعة ${parseInt(salat[2].time?.slice(0, 2)) - new Date().getHours()}`}  `
                    ) : time < parseInt(salat[3].time?.slice(0, 2)) ? (
                        `  ${parseInt(salat[3].time?.slice(0, 2)) - new Date().getHours() === 2 ? "ساعتان" : `ساعة ${parseInt(salat[3].time?.slice(0, 2)) - new Date().getHours()}`} `
                    ) : time < parseInt(salat[4].time?.slice(0, 2)) ? (
                        `  ${parseInt(salat[4].time?.slice(0, 2)) - new Date().getHours() === 2 ? "ساعتان" : `ساعة ${parseInt(salat[4].time?.slice(0, 2)) - new Date().getHours()}`} `
                    ) : time < parseInt(salat[5].time?.slice(0, 2)) ? (
                        `  ${parseInt(salat[5].time?.slice(0, 2)) - new Date().getHours() === 2 ? "ساعتان" : `ساعة ${parseInt(salat[5].time?.slice(0, 2)) - new Date().getHours()}`}`
                    )
                        : time < parseInt(salat[0]?.time?.slice(0, 2)) || time > parseInt(salat[5]?.time?.slice(0, 2)) ?
                            (
                                `${(parseInt(salat[0].time?.slice(0, 2))) - (new Date().getHours() - 12) === 2 ? "ساعتان" : `ساعة ${-((new Date().getHours() - 24) - (parseInt(salat[0].time?.slice(0, 2))))}`}`
                            )
                            : (
                                `Error of data`
                            )
                }</span>
            </div>
        </div>
    )
}

export default PrayNext
