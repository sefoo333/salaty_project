"use client"

import React, { useEffect, useState } from 'react'

function Praytimes() {

    let [data1, setGet]: any = useState([])

    let [country, setData2]: any = useState([]);


const get = async () => {
      
                                let response = await fetch(`http://api.aladhan.com/v1/timingsByCity?country=EG"&city=cairo`);
                    let data1: any = await response.json()
                    setGet(data1)
           }
                

        


    useEffect(() => {   

            get();
        
    }, [])

    const salat = [{
        name: "الفجر",
        time: data1.data?.timings?.Fajr,
    }, {
        name: "الشروق",
        time: data1.data?.timings?.Sunrise ,
    }, {
        name: "الظهر",
        time: data1.data?.timings?.Dhuhr,
    }, {
        name: "العصر",
        time: data1.data?.timings?.Asr,
    },
    {
        name: "المغرب",
        time: data1.data?.timings?.Maghrib,
    },
    {
        name: "العشاء",
        time:data1.data?.timings?.Isha ,
    }
    ]
let datt:any = localStorage.getItem("country")
    return (
        <>
            
             <div className="times">
                    <div className="main text-[40px] font-bold w-full flex justify-end px-[30px] py-[20px]">
                        <h1 className="w-[200px] text-right border-b-[black] border-b-[5px]">{datt !== null ?  JSON.parse(datt || '').name2[0] : null}</h1>
                    </div>
                    <div className="elements grid grid-cols-3 w-full gap-[10px] mt-[30px] justify-items-center max-md:grid-cols-2 max-sm:grid-cols-1">
                        {salat.map((e) => (
                            <div className="element px-[40px] py-[20px] bg-[#16423C] text-white rounded-xl text-[20px]">
                                <h1>{e.name}</h1>
                                <span>{data1.data?.timings?.Maghrib}</span>
                            </div>
                        ))}
                    </div>
                </div>
        </>
    )
}

export default Praytimes
