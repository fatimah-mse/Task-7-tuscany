import HeroComponent from '@/components/HeroComponent'
import NavBar from '@/components/NavBar'
import img from '../../images/AboutHero.png'
import about from '../../images/about.png'
import WelcomeSec from '@/components/WelcomeSec'
import AboutCards from '@/components/AboutCards'
import SaysSec from '@/components/SaysSec'
import Footer from '@/components/Footer'

export default function About() {
    return (
        <>
            <NavBar />
            <HeroComponent
                image={img}
                title={'Our team cares about your full relax'}
                desc={'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.'}
                existSearch={false}
                existBTN={true}
            />
            <WelcomeSec
                myclass={'px-250 max-[1366px]:px-14'}
                image={about}
                title={'We Are The Center Of Lucca To Offer You The Best'}
                desc={'We are right in the center of Lucca to offer you the real city life! With years of experience in practically every tourism sector, with us you can find complete packages at the lowest price, to travel and learn and have fun all without worries and without stress. What are you waiting for, book a bright evening, a trip to beautiful Tuscany or a personal tour for you!'}
            />
            <AboutCards />
            <SaysSec />
            <Footer />
        </>
    )
}
