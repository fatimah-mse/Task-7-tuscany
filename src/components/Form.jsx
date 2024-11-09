import Image from 'next/image'
import bg from '../images/HomeHero.png'
import google from '../images/grommet-icons_google.png'
import eye from '../images/ant-design_eye-invisible-filled.png'
import close from '../images/clarity_window-close-line.png'
import TitleComponent from '@/components/TitleComponent'
import Link from 'next/link'
import BTNComponent from '@/components/BTNComponent'

export default function Form({ title, signup, signin , btn , link , Plink , href}) {
    return (
        <section className='relative flex justify-center items-center min-h-screen px-250 py-15 max-[1366px]:px-14 max-[768px]:px-5'>
            <Image className='fixed top-0 left-0 w-screen h-screen object-cover -z-20' src={bg} alt='background' />
            <div className='fixed top-0 left-0 w-screen h-screen -z-10 bg-slate-900 opacity-60'></div>
            <div className='min-[768px]:w-488 max-[768px]:w-full static z-50 bg-white backdrop-blur-3xl px-15 max-[768px]:px-5 py-10 rounded-3xl flex flex-col gap-y-5'>
                <div className='flex w-full justify-between items-center'>
                    <TitleComponent title={title} />
                    <Link href={'/'}><Image src={close} alt='arrow' /></Link>
                </div>
                <form className='flex flex-col gap-y-5'>
                    {signup &&
                        <div className='flex flex-col'>
                            <label className='text-lg font-open-sans opacity-60 text-primary font-semibold mb-2.5'>Name and Surname</label>
                            <input className='text-placeholder font-open-sans py-3.5 px-6 border w-full rounded-lg' type="text" placeholder='Enter your name and surname' />
                        </div>
                    }
                    <div className='flex flex-col'>
                        <label className='text-lg font-open-sans opacity-60 text-primary font-semibold mb-2.5'>Email Address</label>
                        <input className='text-placeholder font-open-sans py-3.5 px-6 border w-full rounded-lg' type="email" placeholder='Enter your email address' />
                    </div>
                    <div className='flex flex-col'>
                        <label className='text-lg font-open-sans opacity-60 text-primary font-semibold mb-2.5'>Password</label>
                        <div className='relative'>
                            <Image className='absolute right-6 bottom-3.5' src={eye} alt='eye' />
                            <input className='text-placeholder font-open-sans py-3.5 px-6 border w-full rounded-lg' type="password" placeholder='Enter your password' />
                        </div>
                    </div>
                    {signup &&
                        <div>
                            <input type="checkbox" className='me-2' />
                            <label className='text-sm font-open-sans opacity-60 text-primary font-normal'>I agree with <span className='text-secondary'>Terms</span> and <span className='text-secondary'>Privacy</span></label>
                        </div>
                    }
                    {signin &&
                        <p className='text-end text-sm font-open-sans opacity-60 text-primary font-normal'>Forgot your password?</p>
                    }
                    <div>
                        <BTNComponent myclass={'w-full text-white bg-secondary'} txt={btn} />
                        <span className='block text-center text-base font-open-sans opacity-60 my-1.5'>or</span>
                        <div className='relative'>
                            <Image className='absolute left-6 bottom-3.5' src={google} alt='google' />
                            <BTNComponent myclass={'w-full text-primary opacity-60 border-y border-x'} txt={`${btn} with Google`} />
                        </div>
                    </div>
                    <Link href={href} className='text-sm font-open-sans text-center text-primary font-normal'>{Plink} <span className='text-secondary'>{link}</span></Link>
                </form>
            </div>
        </section>
    )
}
