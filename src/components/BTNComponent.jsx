import React from 'react'

export default function BTNComponent({txt , myclass}) {
    return (
        <button className={`${myclass} border-0 text-xl font-semibold py-2.5 text-center rounded-full font-open-sans`}>{txt}</button>
    )
}
