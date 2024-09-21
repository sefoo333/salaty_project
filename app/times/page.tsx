import React from 'react'
import Praytimes from '../_componants/praytimesclient'
import PrayNext from '../_componants/praynext'




function page() {




    return (
        <div className="parent px-[30px] w-full">
            <Praytimes />


            <div className="pray_timenow mt-[50px]">
                <div className="main mb-[10px] text-[40px] font-bold w-full flex justify-center px-[30px] py-[20px] text-nowrap text-center">
                    <h1 className="w-[200px] text-center border-b-[black] border-b-[5px]">الصلاة القادمة</h1>
                </div>
                <PrayNext />
            </div>
        </div>
    )
}

export default page
