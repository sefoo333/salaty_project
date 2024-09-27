"use client"

import React, { useEffect, useState } from 'react'

interface button {
    content: string,
    count: string,
    image: string,
    description: string
}
function ChildComponent(props: button) {
    let [value, setValue] = useState(0);


    return (
        <div className="element mt-[30px] relative text-nowrap  max-2xl:w-[650px]  max-md:w-[350px] max-lg:w[450px] w-full h-[300px]  overflow-hidden  rounded-xl flex items-center justify-center bg-black text-white text-[20px]  ">
            <div className="image absolute h-full w-full before:bg-[#0000007a] before:w-full before:z-10 before:absolute before:h-full">
                <img src={`/${props.image}`} className="w-full  h-full object-cover absolute  " alt=""></img>
            </div>
            <div className="time z-[9999] text-[25px] max-md:text-[18px] flex justify-center flex-col  items-center text-nowrap">
                <h1 className='text-wrap text-center'>
                    {props.content}
                </h1>
                <button className='mt-[10px] bg-black p-[10px]  rounded-full w-[70px] h-[70px] flex justify-center items-center text-[19px] ' onClick={(e) => {
                    if (value !== parseInt(props.count)) {
                        value++
                        setValue(value)
                    }
                }} >{value}<span className='relative z-[9999]'>/{props.count}</span>
                    <span id='test' className='bg-circle absolute w-[76px] h-[76px] z-[-1] rounded-full'>
                    </span></button>
                <span className='text-[15px] max-md:text-[13px] max-md:text-wrap'>{props.description}</span>
            </div>
        </div>
    )
}

export default ChildComponent
