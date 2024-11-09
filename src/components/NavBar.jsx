'use client'
import Image from 'next/image'
import logo from '../images/logo.png'
import menuWhite from '../images/menu-white.png'
import XWhite from '../images/x-white.png'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { NavLinksdata } from '@/data/NavLinksData'

export default function NavBar() {

    const [show, setShow] = useState(false)
    const [header, setHeader] = useState(false)

    function handleScroll() {
        if (window.scrollY > 50) {
            setHeader(true)
        }
        else {
            setHeader(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [header])

    return (
        <nav className={`${header ? 'bg-primary' : 'bg-dark-bg'} w-full py-5 px-250 max-[1366px]:px-14 max-[992px]:py-2 max-[768px]:px-5 flex justify-between items-center fixed top-0 z-10`}>
            <Image className='h-130 w-133' src={logo} alt='logo' />
            <div className={`max-[992px]:bg-primary max-[992px]:w-screen max-[992px]:h-screen transition-all duration-300 ease-in-out flex items-center lg:justify-between max-[992px]:justify-evenly max-[992px]:fixed max-[992px]:left-0 max-[992px]:top-0 max-[992px]:flex-col max-[992px]:items-center ${show ? 'translate-y-0' : 'max-[992px]:-translate-y-full'}`}>
                <ul className='flex justify-between gap-x-10 max-[992px]:gap-y-10 max-[992px]:flex-col max-[992px]:items-center'>
                    {NavLinksdata.map((e, index) => {
                        return (
                            <li key={index} className='font-open-sans text-xl font-semibold w-max text-white max-[992px]:text-lg'><Link href={e.path}>{e.txt}</Link></li>
                        )
                    })}
                </ul>
                <select className='font-open-sans bg-transparent text-xl text-white opacity-60 min-[1366px]:ms-167 min-[992px]:mx-5.5'>
                    <option className='font-open-sans bg-transparent text-primary text-xs' value="eng">Eng</option>
                    <option className='font-open-sans bg-transparent text-primary text-xs' value="ar">Ar</option>
                </select>
                <Link className='font-semibold font-open-sans text-xl text-white max-[992px]:text-lg min-[992px]:me-5.5' href={'/login'}>Login</Link>
                <Link className='font-semibold font-open-sans text-xl text-white max-[992px]:text-lg min-w-24 min-[1366px]:min-w-42 text-center rounded-full py-2.5 bg-secondary hover:opacity-80 transition duration-300 ease-in-out' href={'/signup'}>Sign Up</Link>
                <Image onClick={() => setShow(!show)} className='hidden max-[992px]:block w-8 h-8' src={XWhite} alt="close" />
            </div>
            <Image onClick={() => setShow(!show)} className='hidden max-[992px]:block w-8 h-8' src={menuWhite} alt="menu" />

        </nav>
    )
}
