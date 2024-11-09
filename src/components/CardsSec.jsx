import React from 'react'
import CardComponent from './CardComponent'
import { CardSecData } from '@/data/CardSecData'

export default function CardsSec() {
    return (
        <section className='px-250 py-29 max-[1366px]:px-14 max-[1366px]:py-14 max-[768px]:px-5 flex flex-wrap justify-between gap-y-8.5 max-[992px]:gap-x-2'>
            {CardSecData.map((e, index) => {
                return (
                    <CardComponent
                        key={index}
                        image={e.img}
                        title={e.title}
                        desc={e.desc}
                        exist={false}
                        myclass={'min-h-99 flex flex-col justify-between'}
                    />
                )
            })}

        </section>
    )
}
