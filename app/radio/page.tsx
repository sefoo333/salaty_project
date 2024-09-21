import Link from 'next/link'
import React from 'react'
import Radio from '../_componants/radio';
import Radio2 from '../_componants/radio2';

function page() {
    return (

        <>
            <div className="parent w-full">
                <div className="bg-[#6A9C89] px-4 py-3 text-white  w-full">
                    <p className="text-center text-sm font-medium">
                        <Link href="/settings" className="inline-block underline">الإعدادات</Link>
                        {"\n"} يمكنك اختيار الإذاعة عن طريق
                    </p>
                </div>
                <div className="main text-[40px] font-bold w-full flex justify-end px-[30px] py-[20px]">
                    <h1 className="w-[200px] text-right border-b-[black] border-b-[5px]">الإذاعة</h1>
                </div>

                <div className="radio w-full h-[700px] flex justify-center items-center">
                    <Radio2 />
                </div>

            </div>
        </>
    )
}

export default page
