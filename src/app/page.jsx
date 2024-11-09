import HeroComponent from "@/components/HeroComponent"
import NavBar from "@/components/NavBar"
import img from '../images/HomeHero.png'
import PopularSec from "@/components/PopularSec"
import Offers from "@/components/Offers"
import CardsSec from "@/components/CardsSec"
import BookSec from "@/components/BookSec"
import PackagesSec from "@/components/PackagesSec"
import SaysSec from "@/components/SaysSec"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <>
      <NavBar />
      <HeroComponent 
                  image={img}
                  title={'Enjoy in the best way!'}
                  desc={'Enjoy our services for your trip anytime'}
                  existSearch={true}
                  existBTN={false}
      />
      <PopularSec />
      <Offers />
      <CardsSec />
      <BookSec />
      <PackagesSec />
      <SaysSec />
      <Footer />
    </>
  )
}
