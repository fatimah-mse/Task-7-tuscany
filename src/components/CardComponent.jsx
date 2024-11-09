import Image from 'next/image'
import React from 'react'
import users from '../images/users-or.png'
import calendar from '../images/system-uicons_calendar-month.png'
import DescComponent from './DescComponent'

export default function CardComponent({ image, title, desc, exist, user, cal , myclass}) {
    return (
        <div className={`w-82 max-[992px]:w-83 max-[576px]:w-full ${myclass}`}>
            <Image className='w-full mb-4' src={image} alt='card-img' />
            <h3 className='font-open-sans text-2xl font-bold max-[768px]:text-xl mb-3 text-primary'>{title}</h3>
            {exist &&
                <div>
                    <p className='font-open-sans text-lg font-semibold text-primary mb-3'>from <span className='ms-2.5 font-open-sans text-2xl font-extrabold max-[768px]:text-xl text-secondary'>34 €</span></p>
                    <div className='flex justify-between w-full mb-3'>
                        <div className='flex'>
                            <Image className='me-1.5' src={calendar} alt='calendar-icon' />
                            <span className='uppercase text-base font-semibold text-secondary font-open-sans'>{cal}</span>
                        </div>
                        <div className='flex'>
                            <Image className='me-1.5' src={users} alt='users-icon' />
                            <span className='uppercase text-base font-semibold text-secondary font-open-sans'>{user}</span>
                        </div>
                    </div>
                </div>
            }
            <DescComponent desc={desc} />
        </div>
    )
}
