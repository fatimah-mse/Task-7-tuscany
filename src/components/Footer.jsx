import Image from 'next/image'
import React from 'react'
import logo from '../images/logo.png'
import { FooterHome, FooterServices } from '@/data/FooterData'
import Link from 'next/link'

export default function Footer() {
    return (
        <footer className='bg-primary px-250 py-10 max-[1366px]:px-14 max-[768px]:px-5'>
            <Image className='h-130 w-133 mb-8.5' src={logo} alt='logo' />
            <div className='border-y border-slate-700 py-8.5 gap-y-10 flex flex-wrap justify-between'>
                <div className='w-1/4 max-[992px]:w-83 max-[576px]:w-full'>
                    <h3 className='font-open-sans font-extrabold text-xl text-white mb-5'>Services</h3>
                    <div className='flex flex-col gap-y-2.5'>
                        {FooterServices.map((e, index) => {
                            return (
                                <p key={index} className='font-open-sans text-lg text-white'>{e.p}</p>
                            )
                        })}
                    </div>
                </div>
                <div className='w-70 max-[992px]:w-full flex justify-between flex-wrap gap-y-10'>
                    {FooterHome.map((e, index) => {
                        return (
                            <div key={index} className='max-[992px]:w-83 max-[768px]:w-full'>
                                <h3 className='font-open-sans font-extrabold text-xl text-white mb-5'>{e.title}</h3>
                                <div className='flex flex-col gap-y-2.5'>
                                    {e.content.map((item, i) => {
                                        return (
                                            <Link href={item.href}><p key={i} className='font-open-sans text-lg text-white flex items-start'>{item.p}</p></Link>
                                        )
                                    })}
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
            <h5 className='text-white text-base font-normal font-open-sans text-center mt-8.5'>Copyright © 2024.  All rights reserved.</h5>

        </footer>
    )
}
