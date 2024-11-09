import Image from "next/image"
import links from '../images/links.png'
import icon1 from '../images/ci_location.png'
import icon2 from '../images/clarity_phone-handset-solid.png'
import icon3 from '../images/fluent_mail-16-filled.png'

export const FooterServices = [
    {
        p: 'Bike and Rickshaw rental'
    },
    {
        p: 'Guided Tours of Lucca'
    },
    {
        p: 'Guided Bike Tour of Lucca'
    },
    {
        p: 'Trip In The Tuscan Hills'
    },
    {
        p: 'Transportation With Luxury Cars'
    },
    {
        p: 'Wine Tours By Bus With Guide'
    },
]

export const FooterHome = [
    {
        title: 'Home',
        content: [
            {
                href: '/',
                p: 'Home'
            },
            {
                href: '/about',
                p: 'About Us'
            },
            {
                href: '/tour',
                p: 'Tour Packages'
            }
        ]
    },
    {
        title: 'Help',
        content: [
            {
                href: '/use',
                p: 'Terms of Use'
            },
            {
                href: '/policy',
                p: 'Provicy Policy'
            }
        ]
    },
    {
        title: 'Contacts',
        content: [
            {
                href: '/',
                p: (<><Image className="me-2" src={icon1} alt="icon" /><span>Piazza Napoleone, Lucca, Tuscany</span></>)
            },
            {
                href: '/',
                p: (<><Image className="me-2" src={icon2} alt="icon" /><span>+39 346 368 5708</span></>)
            },
            {
                href: '/',
                p: (<><Image className="me-2" src={icon3} alt="icon" /><span>italiainlimo@gmail.com</span></>)
            },
        ]
    },
    {
        title: 'Social Media',
        content: [
            {
                href: '/',
                p: <Image className="me-2" src={links} alt="icon" />
            }
        ]
    }
    
]