"use client"

import React, { useEffect, useState } from 'react'

function Request() {
      useEffect(() => {   
            if (typeof window !== "undefined") {
        localStorage.setItem("darkmode", JSON.stringify(false))
        localStorage.setItem("coutry", JSON.stringify({
            name: ["EG", "cairo", "مصر"],
            name2: ["مصر"]
        }))
    }, [])


    }

    return (
        <></>
    )
}

export default Request
