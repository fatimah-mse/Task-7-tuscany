import React from 'react'
import earth from '../images/earth.png'
import usersImg from '../images/users.png'
import searchIcon from '../images/akar-icons_search.png'
import Image from 'next/image'
import { SearchData } from '@/data/SearchData'
import SubTitleComponent from './SubTitleComponent'

export default function HeroComponent({ image, title, desc, existSearch, existBTN}) {
    return (
        <section className='h-screen px-250 max-[1366px]:px-14 max-[768px]:px-5 flex justify-center items-center relative'>
            <Image className='w-screen h-full absolute object-cover -z-10' src={image} alt="hero-image" />
            <div className='pt-28.5 max-[768px]:pt-15 '>
                <h1 className='text-7xl max-[1366px]:text-5xl font-normal text-Podcast text-center text-white mb-6'>{title}</h1>
                <p className='mx-auto max-w-[847.75px] font-open-sans text-2xl [768px]:text-xl text-white font-bold text-center'>{desc}</p>

                {existSearch &&
                    <div className='mt-15 max-[768px]:mt-4'>

                        <div className='flex'>
                            <div className='flex items-center rounded-ss-xl p-4 max-[768px]:p-2 bg-white w-max'>
                                <Image className='pe-2.5 h-8 w-8 object-contain' src={earth} alt="earth-logo" />
                                <span className='text-lg font-semibold text-secondary font-open-sans max-[768px]:text-sm'>Public Tours</span>
                            </div>
                            <div className='flex items-center rounded-se-xl p-4 max-[768px]:p-2 bg-light-bg w-max'>
                                <Image className='pe-2.5 h-8 w-8 object-contain' src={usersImg} alt="earth-logo" />
                                <span className='text-lg font-semibold text-white font-open-sans max-[768px]:text-sm'>Private Tours</span>
                            </div>
                        </div>

                        <div className='flex flex-wrap rounded-b-xl rounded-se-xl bg-white'>
                            {SearchData.map((e, index) => {
                                return (
                                    <div key={index} className='flex items-start rounded-ss-xl my-4 px-7 max-[992px]:my-2.5 lg:border-r-2'>
                                        <Image className='pe-2.5 h-8 w-8 object-contain' src={e.img} alt="earth-logo" />
                                        <div>
                                            <SubTitleComponent title={e.title} myClass={'mb-1.5 max-[768px]:text-sm'}/>
                                            <select className='font-open-sans text-lg text-primary opacity-70 max-[768px]:text-sm'>
                                                <option className='font-open-sans text-primary text-xs' value={e.select}>{e.select}</option>
                                            </select>
                                        </div>
                                    </div>
                                )
                            })}

                            <div className='bg-secondary p-5 m-4 max-[992px]:m-2.5 max-[992px]:p-2 rounded-xl absolute xll:static right-3 bottom-3 hover:opacity-80 transition duration-300 ease-in-out'>
                                <Image className='' src={searchIcon} alt="search-icon" />
                            </div>
                        </div>

                    </div>
                }

                {existBTN &&
                    <button className='font-open-sans text-xl font-semibold mt-6 px-6 py-3.5 rounded-full border-2 border-white text-white text-center block mx-auto'>View our Tour Packages</button>
                }



            </div>
        </section>
    )
}
