import React from 'react'

export default function SubTitleComponent({title , myClass}) {
    return (
        <h4 className={`${myClass} font-open-sans text-lg font-semibold text-primary font-open-sans'`}>{title}</h4>
    )
}
