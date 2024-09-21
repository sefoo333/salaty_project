import Link from 'next/link'
import React from 'react'
interface button {
    image: string,
    name: string,
    href: string
}
function Button(props: button) {
    return (
        <Link href={props.href}>
            <div className="button w-[300px] h-[150px] relative p-[15px] flex justify-center items-center text-white text-[30px] font-bold">
                <div className="image absolute h-full w-full before:bg-[#0000007a] before:w-full before:rounded-3xl before:z-10 before:absolute before:h-full">
                    <img src={props.image} className="rounded-3xl w-full  h-full object-cover absolute  " alt=""></img>
                </div>
                <h1 className='relative z-10'>{props.name}</h1>

            </div>
        </Link>
    )
}

export default Button
