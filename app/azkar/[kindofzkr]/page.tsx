
import React from 'react'


import jsonfile from "./json_files/adkar.json"
import Buttonzkr from '@/app/_componants/azkar_comps/button';
import ChildComponent from '@/app/_componants/azkar_comps/button';
import Button2 from '@/app/_componants/azkar_comps/button2';
import Link from 'next/link';

function page({ params }: any) {
    let data: string = params.kindofzkr
    let getselect: any = jsonfile[data as keyof typeof jsonfile]

    return (
        <div className="parent w-full px-[40px] mt-[50px]">
            <Link
                className="inline-block rounded-full border border-[#6A9C89] bg-[#6A9C89] p-3 text-white hover:bg-transparent hover:text-[#6A9C89] focus:outline-none focus:ring active:text-[#6A9C89]"
                href="/azkar"
            >
                <span className="sr-only"> Go Back </span>

                <svg
                    className="size-5 rotate-[180deg]"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                </svg>
            </Link>

            <div className="main text-[40px] font-bold w-full flex justify-center px-[30px] py-[20px] items-center">
                <h1 className="w-[200px] text-nowrap border-b-[black] border-b-[5px]">{getselect !== undefined ? (<>{getselect[0].category}</>) : null}</h1>
            </div>
            {getselect !== undefined ? (
                <div className='flex flex-col items-center justify-center'>
                    {getselect.map((e: { count: string, content: string, description: string }) => (
                        <Button2 content={e.content} count={e.count} image="azkar.jpg" description={e.description} />
                    ))}
                </div>
            ) :
                null}
        </div>
    )
}

export default page
