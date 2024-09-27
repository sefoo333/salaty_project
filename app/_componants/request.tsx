"use client"

import React, { useEffect } from 'react'

function Request() {
      useEffect(() => {   
        localStorage.setItem("darkmode", JSON.stringify(false))
        localStorage.setItem("coutry", JSON.stringify({
            name: ["EG", "cairo", "مصر"],
            name2: ["مصر"]
        }))
    
    }, [])


    

    return (
        <></>
    )
}

export default Request
