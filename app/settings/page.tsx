"use client"
import { IoLocationSharp } from "react-icons/io5";

import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'

function select(selector: { name: any, name2: any }, kind: string) {
    if (kind === "country") {
        localStorage.setItem("country", JSON.stringify({
            name: selector.name,
            name2: selector.name2
        }));
    } else if (kind === "audio") {
        localStorage.setItem("audio", JSON.stringify({
            name: selector.name,
            name2: selector.name2
        }));
    }
}


function page() {
    let [data, setData]: any = useState([]);
    let [data2, setData3]: any = useState([]);
    let refersh = useRouter();

    useEffect(() => {
        const test = async () => {
            let response = await fetch("https://restcountries.com/v3.1/lang/arabic");
            let data2 = await response.json();
            setData(data2)
        }
            test()
        
    }, [])
    useEffect(() => {
        const test2 = async () => {
            let response2 = await fetch("https://data-rosy.vercel.app/radio.json");
            let data2 = await response2.json();
            setData3(data2)
        }
            test2()
        
    }, [])

    let [dark, setDark] = useState(false);
    let [dark2, setDark2] = useState(false);
    
    const darkmodeon = () => {
        
    if (localStorage.getItem("darkmode") !== null){
        setDark2(JSON.parse(localStorage.getItem("darkmode") || ''));
    }
        
    }

    useEffect(() => {
        darkmodeon()
    },[])
    let [error, setError] = useState("")

    let [dd, setdd]: any = useState("")
    useEffect(() => {
        fetch(`https://api.ipgeolocation.io/ipgeo?apiKey=7dddf1277671474b90fb561c8db1e534`)
            .then(response => response.json())
            .then(data => {
                setdd(data)
            })
            .catch(error => console.error('Error fetching location:', error));
    }, [])
    return (
        <>
                <div className="parent w-full">
                    <div className="main text-[40px] font-bold w-full flex justify-end px-[30px] py-[20px]">
                        <h1 className="w-[200px] text-right border-b-[black] border-b-[5px]">الأعدادات</h1>
                    </div>
                    <div className="public">
                        <div className="settings">
                            <div className="darkmode flex w-full justify-between px-[20px] text-[20px] flex-row-reverse">
                                <div className="text"><h1>الوضع الداكن</h1></div>
                                <div className="icon" onClick={() => {
                                    dark ? setDark(false) : setDark(true)
                                }}><label
                                    htmlFor="AcceptConditions"
                                    className="relative inline-block h-8 w-14 cursor-pointer rounded-full bg-gray-300 transition [-webkit-tap-highlight-color:_transparent] has-[:checked]:bg-green-500"
                                >
                                        <input
                                            type="checkbox"
                                            id="AcceptConditions"
                                            className="peer sr-only [&:checked_+_span_svg[data-checked-icon]]:block [&:checked_+_span_svg[data-unchecked-icon]]:hidden"
                                            onChange={(e) => {
                                                e.target.checked ? localStorage.setItem("darkmode", JSON.stringify(true)) : localStorage.setItem("darkmode", JSON.stringify(false))
                                                refersh.refresh()
                                            }}
                                            checked={dark2 ? true : false}
                                        />

                                        <span
                                            className="absolute inset-y-0 start-0 z-10 m-1 inline-flex size-6 items-center justify-center rounded-full bg-white text-gray-400 transition-all peer-checked:start-6 peer-checked:text-green-600"
                                        >
                                            <svg
                                                data-unchecked-icon
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="size-4"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>

                                            <svg
                                                data-checked-icon
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="hidden size-4"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                        </span>
                                    </label></div>
                            </div>
                            {/* <div className="notifaction flex w-full justify-between px-[20px] text-[20px] flex-row-reverse  mt-[30px]">
                     <div className="text"><h1>تشغيل الاشعارات (غير مفعل)</h1></div>

                 </div> */}
                            <div className="city_time flex w-full justify-between px-[20px] text-[20px] flex-row-reverse  mt-[30px] max-sm:flex-col">
                                <div className="text"><h1>اختيار البلد</h1></div>
                                <div className="flex flex-col">
                                    <div className="selector">
                                        <div>
                                            <select
                                                name="HeadlineAct"
                                                id="HeadlineAct"
                                                className="mt-1.5 w-full rounded-lg border-gray-300 text-gray-700 sm:text-sm p-[15px]"
                                                style={dark2 ? { backgroundColor: "#1E201E", color: "white" } : {}}
                                                onChange={(e: any) => {
                                                    select({
                                                        name: (e.target.value).split("/"),
                                                        name2: e.target.value.split("/").slice(-1)
                                                    }, "country")
                                                }}
                                            >
                                                <option value="">Please select</option>
                                                {data?.filter((e: any) => e.name.common !== "Israel").map((e: any) => (
                                                    <option value={`${e.cca2}/${e.capital[0]}/${e.translations.ara.common}`}>
                                                        {e.translations.ara.common}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>
                                    <div className="auto_button mt-[20px]" onClick={() => {
                                        let t = data.filter((e: any) => e.cca2 === dd.country_code2 && e.name.common !== "Israel")[0].translations.ara.common
                                        if (t.length > 1) {
                                            select({
                                                name: [dd.country_code2, dd.city],
                                                name2: [data.filter((e: any) => e.cca2 === dd.country_code2 && e.name.common !== "Israel")[0].translations.ara.common]
                                            }, "country")
                                        } else {
                                            setError("منطقتك ليست موجودة ")
                                        }
                                    }}>
                                        <a
                                            className="group flex items-center justify-between gap-4 rounded-lg border border-[#6A9C89] bg-[#6A9C89] px-5 py-3 transition-colors hover:bg-transparent focus:outline-none focus:ring"
                                            href="#"
                                        >
                                            <span
                                                className="font-medium text-[15px] text-white transition-colors group-hover:text-white group-active:text-white"
                                            >
                                                اختيار حسب المنطقة : {dd.country_name} , {dd.city}
                                            </span>

                                            <span
                                                className="shrink-0 rounded-full border border-current bg-white p-2 text-[#6A9C89] group-active:text-[#6A9C89]"
                                            >
                                                <IoLocationSharp className="size-4 rtl:rotate-180" />

                                            </span>
                                        </a>
                                    </div>
                                </div>
                                {error}
                            </div>
                            <div className="radio_settings flex w-full justify-between px-[20px] text-[20px] flex-row-reverse mt-[30px] max-sm:flex-col">
                                <div className="text"><h1>اختيار الإذاعة</h1></div>
                                <div className="selector">
                                    <div>
                                        <select
                                            name="HeadlineAct"
                                            id="HeadlineAct"
                                            style={dark2 ? { backgroundColor: "#1E201E", color: "white" } : {}}
                                            className="mt-1.5 w-full rounded-lg border-gray-300 text-gray-700 sm:text-sm p-[15px]"
                                            onChange={(e: any) => {

                                                select({
                                                    name: e.target.value.split("|")[0],
                                                    name2: e.target.value.split("|")[1]
                                                }, "audio")
                                            }}
                                        >
                                            <option value="">Please select</option>
                                            {data2?.radios?.map((e: any) => (
                                                <option value={`${e.url}|${e.name}`}>
                                                    {e.name}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
        </>
    )
}

export default page
