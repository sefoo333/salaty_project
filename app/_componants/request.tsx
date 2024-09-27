"use client"

import React from 'react'

function Request() {
    if (typeof window !== "undefined") {
        localStorage.setItem("darkmode", JSON.stringify(false))
        localStorage.setItem("coutry", JSON.stringify({
            name: ["EG", "cairo", "مصر"],
            name2: ["مصر"]
        }))


    }

    return (
        <></>
    )
}

export default Request
