import React from 'react'

export default function TitleComponent({title , myclass}) {
    return (
        <h2 className={`${myclass} font-open-sans text-32 font-extrabold max-[768px]:text-3xl text-primary`}>{title}</h2>
    )
}
