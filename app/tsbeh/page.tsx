import React from 'react'

import jsonfile from "../json_files/adkar.json"
import Button from '../_componants/azkar_comps/buttons'
import Button2 from '../_componants/azkar_comps/button2'
function page() {
    let json = jsonfile["تسابيح"]
    return (
        <div className="parent w-full ">
            <div className="main text-[40px] font-bold w-full flex justify-center px-[30px] py-[20px]">
                <h1 className="w-[200px] text-nowrap border-b-[black] border-b-[5px] text-center">التسبيـح</h1>
            </div>
            <div className="elements px-[50px] flex flex-col items-center justify-center">
                {json.map((e) => (
                    <Button2 content={e.content} count={e.count} image='allah.jpeg' description={e.description} />
                ))}
            </div>
        </div>
    )
}

export default page
