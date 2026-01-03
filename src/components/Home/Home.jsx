
"use client";
import { useEffect } from 'react';
import ScrollToTop from '../Helper/ScrollToTop'
import Booking from './Booking/Booking'
import Contact from './Contact/Contact'
import Feature from './Feature/Feature'
import Footer from './Footer/Footer'
import Hero from './Hero/Hero'
import Pricing from './Pricing/Pricing'
import Review from './Review/Review'
import Services from './Services/Services'
import WhyChoice from './WhyChoice/WhyChoice'
import AOS from 'aos';
import 'aos/dist/aos.css';
const Home = () => {
 useEffect(()=>{
  const initAos= async ()=>{
    await import ("aos");
    AOS.init({
      duration:1000,
      easing:"ease",
      once:true,
      anchorPlacement:"top-bottom"

    })
  }
  initAos();
 },[])
  return (
    <div className='overflow-hidden '>
     <Hero/>
     <Feature/>
     <Services/>
     <WhyChoice/>
     <Pricing/>
     <Review/>
     <Booking/>
     <Contact/>
     <Footer/>
     <ScrollToTop/>
    </div>
  )
}

export default Home
