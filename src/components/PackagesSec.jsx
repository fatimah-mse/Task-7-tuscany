import React from 'react'
import TitleComponent from './TitleComponent'
import { PackagesCardData } from '@/data/PackagesCardData'
import Image from 'next/image'
import BTNComponent from './BTNComponent'

export default function PackagesSec() {
    return (
        <section className='px-250 pt-29 max-[1366px]:px-14 max-[1366px]:pt-14 max-[768px]:px-5'>
            <TitleComponent title={'The Most Popular Packages'} myclass={'mb-15'} />
            <div className='flex flex-wrap justify-between gap-y-8'>
                {PackagesCardData.map((e, index) => {
                    return (
                        <div key={index} className='max-[1400px]:w-83 min-[1400px]:w-340 max-[576px]:w-full rounded-3xl shadow-lg'>
                            <Image className='w-full' src={e.img} alt='card-img' />
                            <div className='p-6.1 flex flex-col'>
                                <h3 className='font-open-sans font-extrabold text-xl text-primary'>{e.title}</h3>
                                <p className='text-secondary font-open-sans text-5xl max-[768px]:text-2xl font-bold'>
                                    <sup className='text-primary text-xl font-normal opacity-50 me-2'>€</sup>
                                    {e.num}
                                    <sub className='text-primary text-lg font-normal opacity-50 ms-2'>/day</sub>
                                </p>
                                {e.content.map((item, i) => {
                                    return (
                                        <p key={i} className='font-open-sans flex py-4'>
                                            <Image src={item.logo} alt='card-logo' className='me-4 font-normal text-lg' />{item.txt}
                                        </p>
                                    )
                                })}
                                <BTNComponent myclass={'w-full text-center text-secondary border-2 border-secondary'} txt={'Book Now'} />
                            </div>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}
