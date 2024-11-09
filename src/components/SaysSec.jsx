import Image from "next/image"
import img from "../images/left & right arrows.png"
import avatar from "../images/avatar.png"
import asset from "../images/Asset-1.png"
import TitleComponent from "./TitleComponent"
import DescComponent from "./DescComponent"

export default function SaysSec() {
    return (
        <section className='px-250 py-29 max-[1366px]:px-14 max-[1366px]:py-14 max-[768px]:px-5'>
            <div className='flex w-full justify-between items-start max-[768px]:flex-col'>
                <TitleComponent title={'Happy Customers Says'} myclass={'mb-15'} />
                <Image className="max-[768px]:block max-[768px]:ms-auto max-[768px]:mb-15" src={img} alt='arrow' />
            </div>
            <div className='flex flex-wrap justify-between gap-y-6'>
            {Array(2).fill().map((_,index) => {
                return (
                    <div key={index} className="min-[1400px]:max-w-700 min-[992px]:w-1/2 max-[992px]:w-full text-center max-[992px]:text-start min-[992px]:p-8.5 ">
                        <Image className="block mx-auto" src={avatar} alt="avatar"/>
                        <Image className="block me-auto my-2.5" src={asset} alt="asset"/>
                        <DescComponent myclass={'min-[992px]:px-2'} desc={'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure'} />
                        <Image className="block ms-auto my-2.5" src={asset} alt="asset"/>
                    </div>
                )
            })}
            </div>
        </section>
    )
}
