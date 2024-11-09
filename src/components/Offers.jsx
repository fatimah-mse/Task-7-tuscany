import Image from 'next/image'
import background from '../images/bg.png'
import img from '../images/offers.png'
import TitleComponent from './TitleComponent'
import DescComponent from './DescComponent'
import BTNComponent from './BTNComponent'

export default function Offers() {
    return (
        <section className='min-[1400px]:h-99 px-250 py-15 max-[1366px]:px-14 max-[1366px]:py-14 max-[768px]:px-5 relative flex flex-wrap max-[1200px]:flex-col-reverse justify-between max-[1400px]:items-center max-[1200px]:gap-y-14'>
            <Image className='w-screen h-full absolute left-0 bottom-0 object-cover -z-10' src={background} alt="bg-image" />
            <div className='h-max bg-white-bg p-8.3 flex flex-col gap-y-8 min-[1200px]:max-w-[569px] max-[1200px]:w-full rounded-3xl'>
                <TitleComponent title={'Get Special Offers for Organizations'} myclass={'text-center'} />
                <DescComponent myclass={'text-center'} desc={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."}/>
                <BTNComponent myclass={'w-53 mx-auto text-white bg-secondary'} txt={'Contact Us'}/>
            </div>
            <Image className='min-[1400px]:-translate-y-1/2.5 h-600' src={img} alt="offers-image" />
        </section>
    )
}
