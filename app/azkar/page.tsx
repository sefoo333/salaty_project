
import React, { useEffect } from 'react'
import Button from '../_componants/azkar_comps/buttons'


const buttons = [
    {
        name: "أذكار الصباح",
        imageurl: "/الشروق.jpg",
        href: "azkar_sun"
    },
    {
        name: "أذكار المساء",
        imageurl: "/المساء.jpg",
        href: "azkar_night"
    }, {
        name: "أذكار ما بعد الصلاة",
        imageurl: "/الصلاة.jpg",
        href: "azkar_pray",
    },
    {
        name: "أذكار النوم",
        imageurl: "/النوم.jpg",
        href: "azkar_sleep"
    },
    {
        name: "أذكار الاستيقاظ",
        imageurl: "/الاستيقاظ.jpg",
        href: "azkar_waekup"
    }
]

interface button {
    name: string,
    imageurl: string,
    href: string,
}
function page() {

    return (
        <div className="parent w-full my-[50px]">
            <div className="main text-[40px] font-bold w-full flex justify-center px-[30px] py-[20px]">
                <h1 className="w-[200px] text-nowrap border-b-[black] border-b-[5px]">اختيار الأذكار</h1>
            </div>
            <div className="buttons max-sm:flex max-sm:flex-col max-sm:items-center mt-[60px] px-[30px] w-full grid justify-items-center grid-cols-2 gap-[15px]">
                {buttons.map((e: button) => (
                    <Button image={e.imageurl} name={e.name} href={`/azkar/${e.href}`} />
                ))}
            </div>
        </div>

    )
}

export default page
