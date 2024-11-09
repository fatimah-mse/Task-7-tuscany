import React from 'react'

export default function DescComponent({desc , myclass}) {
    return (
        <p className={`${myclass} font-open-sans text-lg text-primary font-normal`}>{desc}</p>
    )
}
