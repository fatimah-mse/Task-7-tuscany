import Image from 'next/image'
import background from '../images/bg.png'
import { AboutCardData } from '@/data/AboutCardData'

export default function AboutCards() {
    return (
        <section className='px-250 py-21 max-[1366px]:px-14 max-[1366px]:py-14 max-[768px]:px-5 relative flex flex-wrap justify-between gap-y-10'>
            <Image className='w-screen h-full absolute left-0 bottom-0 object-cover -z-10' src={background} alt="bg-image" />
            {AboutCardData.map((e, index) => {
                return (
                    <div key={index} className='flex flex-col justify-between bg-white-bg p-8.3 rounded-3xl min-[1366px]:w-[15.235vw] max-[1366px]:w-83 max-[576px]:w-full'>
                        <Image className='block mx-auto w-15' src={e.img} alt='icon' />
                        <h3 className='font-open-sans font-extrabold text-xl text-primary text-center'>{e.title}</h3>
                    </div>
                )
            })}
        </section>
    )
}
