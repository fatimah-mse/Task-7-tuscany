import React from 'react'
import TitleComponent from './TitleComponent'
import Image from 'next/image'
import img from "../images/left & right arrows.png"
import popular from "../images/popular.png"
import { PopularData } from '@/data/PopularData'
import CardComponent from './CardComponent'
import WelcomeSec from './WelcomeSec'

export default function PopularSec() {
    return (
        <section className='px-250 py-29 max-[1366px]:px-14 max-[1366px]:py-14 max-[768px]:px-5'>
            <div className='flex w-full justify-between items-start max-[768px]:flex-col'>
                <TitleComponent title={'Explore Our Popular Destinantions'} myclass={'mb-15'}/>
                <Image className="max-[768px]:block max-[768px]:ms-auto max-[768px]:mb-15" src={img} alt='arrow'/>
            </div>
            <div className='flex flex-wrap justify-between gap-y-8.5 max-[992px]:gap-x-2'>
                {PopularData.map((e,index) => {
                    return (
                        <CardComponent 
                            key={index}
                            image={e.img}
                            title={e.title}
                            desc={e.desc}
                            cal={e.cal}
                            user={e.user}
                            exist={true}
                        />
                    )
                })}
            </div>
            <WelcomeSec 
                image={popular} 
                title={'We are the best company for your visit'}
                desc={'After decades of experience, and a whole life in Lucca, we offer you the most complete tourism service in the city. In addition to having bikes and rickshaws to have as much fun as you want, you have the choice of tour guides with whom to tour and drivers for your every need! We offer packages in the way that you get the most at the lowest price. Book with us and we will always be available for you!'}
            />
        </section>
    )
}
