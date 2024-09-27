"use client"

import React, { useEffect } from 'react'

function Request() {
      useEffect(() => {   
       if (localStorage.length == 0){
              localStorage.setItem("darkmode", JSON.stringify(false))
        localStorage.setItem("country", JSON.stringify({
            name: ["EG", "cairo", "مصر"],
            name2: ["مصر"]
        }))
       }
    
    }, [])


    

    return (
        <></>
    )
}

export default Request
