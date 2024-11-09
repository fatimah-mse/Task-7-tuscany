import Image from 'next/image'
import background from '../images/bg.png'
import img from '../images/bike.png'
import TitleComponent from './TitleComponent'
import { BookFormData } from '@/data/BookFormData'
import BTNComponent from './BTNComponent'

export default function BookSec() {
    return (
        <section className='px-250 py-15 max-[1366px]:px-14 max-[1366px]:py-14 max-[768px]:px-5 relative flex flex-wrap max-[1200px]:flex-col-reverse justify-between max-[1400px]:items-center max-[1200px]:gap-y-14'>
            <Image className='w-screen h-full absolute left-0 bottom-0 object-cover -z-10' src={background} alt="bg-image" />
            <div className='min-[1200px]:w-1/2 max-[1200px]:w-full'>
                <TitleComponent title={'Book Now Bike'} myclass={'text-center mb-9'} />
                <form className='bg-white-bg p-8.3 flex flex-wrap justify-between gap-y-8 rounded-3xl'>
                    {BookFormData.map((e, index) => {
                        return (
                            <div key={index} className='w-82.5 max-[576px]:w-full'>
                                <label className='font-open-sans text-lg text-primary font-semibold block mb-2'>{e.lablel}</label>
                                {e.inputExist && <input type={e.type} className='text-placeholder font-open-sans py-3.5 px-6 bg-white w-full rounded-lg' placeholder={e.placeholder} />}
                                {e.selectExit &&
                                    <div className='py-3.5 px-6 bg-white w-full rounded-lg'>
                                        <select className='text-primary font-open-sans opacity-60 w-full'>
                                            <option value={e.placeholder}>{e.placeholder}</option>
                                            <option value='s1'>select 1</option>
                                            <option value='s2'>select 2</option>
                                            <option value='s3'>select 3</option>
                                        </select>
                                    </div>
                                }
                            </div>
                        )
                    })}
                    <BTNComponent myclass={'w-53 mx-auto text-white bg-secondary'} txt={'Book Now'}/>
                </form>
            </div>
            <Image className='min-[1200px]:-mb-24 min-[1200px]:w-1/2 max-[1200px]:w-full' src={img} alt="offers-image" />
        </section>
    )
}
