import Image from 'next/image'
import React from 'react'
import TitleComponent from './TitleComponent'
import DescComponent from './DescComponent'
import { WelcomeData } from '@/data/WelcomeData'

export default function WelcomeSec({ image, myclass, title, desc }) {
    return (
        <section className={`py-29 max-[1366px]:py-14 ${myclass} flex max-[1366px]:flex-col gap-10 justify-between items-center max-[1366px]:items-start`}>
            <Image src={image} alt='img' className='max-[1366px]:m-auto' />
            <div>
                <div className='min-[1366px]:max-w-700 max-[768px]:w-full'>
                    <p className='text-base font-semibold text-primary font-open-sans opacity-60'>WELCOME TO OUR SITE!</p>
                    <TitleComponent title={title} myclass={'mb-8'} />
                    <DescComponent myclass={'mb-8 leading-8'} desc={desc} />
                </div>
                <div className='flex flex-wrap gap-g-13'>
                    {WelcomeData.map((e, index) => {
                        return (
                            <div key={index} className='max-w-21'>
                                <span className='block font-open-sans text-32 font-bold max-[768px]:text-3xl text-secondary'>{e.num}</span>
                                <span className='block font-open-sans text-base font-normal opacity-60 text-primary'>{e.text}</span>
                            </div>
                        )
                    })}
                </div>
            </div>

        </section>
    )
}
