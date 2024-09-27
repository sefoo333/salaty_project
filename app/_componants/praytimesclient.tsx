"use client"

import React, { useEffect, useState } from 'react'

function Praytimes(props:any) {

    let [data1, setGet]: any = useState(null)

    let [country, setData2]: any = useState([]);


    

let gethiis = async () => {
    
                    let response = await fetch(`http://api.aladhan.com/v1/timingsByCity?country=${localStorage.getItem("country") !== null ? JSON.parse(localStorage.getItem("country") || '').name[0] : "EG"}&city=${localStorage.getItem("country") !== null ? JSON.parse(localStorage.getItem("country") || '').name[1] : "cairo"}`);
                    let data2: any = await response.json()
                    setGet(data2)
           }
                



    useEffect(() => {   
            gethiis();
    }, [])
        console.log("thius",data1)


    const salat = [{
        name: "الفجر",
        time: data1?.data?.timings?.Fajr,
    }, {
        name: "الشروق",
         time: data1?.data?.timings?.Sunrise ,
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
         time:data1?.data?.timings?.Isha ,
    }
    ]

//let datt:any = []
//if (localStorage !== undefined ||/localStorage !== null){
// datt = localStorage.getItem("country"}
    return (
       
             <div className="times">
<h1>{data1 !== null ? data1?.data?.timings?.Maghrib : null}</h1>
                    <div className="main text-[40px] font-bold w-full flex justify-end px-[30px] py-[20px]">
                        
                    </div>
                    <div className="elements grid grid-cols-3 w-full gap-[10px] mt-[30px] justify-items-center max-md:grid-cols-2 max-sm:grid-cols-1">
                        {salat.map((e) => (
                            <div className="element px-[40px] py-[20px] bg-[#16423C] text-white rounded-xl text-[20px]">
                                <h1>{e.name}</h1>
                                <span>{parseInt(e.time?.slice(0, 2)) > 12 ? `0${parseInt(e.time.slice(0, 2)) - 12}:${e.time.slice(3, 5)}` : e.time}</span>
                            </div>
                        ))}
                    </div>
                </div>
        
    )
}

export default Praytimes
