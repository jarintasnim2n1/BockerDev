import Sectionheading from '@/components/Sectionheading'
import React from 'react'
import PricingCard from './PricingCard'

const Pricing = () => {
  return (
    <div className='py-20 bg-gray-300 dark:bg-gray-200'>
        <div data-aos="fade-down">
         <Sectionheading clr={"text-red-600"} heading={"Pricing Table"} subheading={"Live Chat 24/7 Support"} />
        </div>
        {/* card */}
        <div  data-aos="fade-up"  className='w-[80%] mt-18 mx-auto grid grid-cols-1  md:grid-2 lg:grid-cols-3 xl:grid-cols-4 items-center gap-10'>
           <PricingCard price="20" title="Optimized &SEO" />
           <PricingCard price="50" title="Designing " />
           <PricingCard price="60" title="Development" />
           <PricingCard price="80" title="Supporting" />
        </div>
    </div>
  )
}

export default Pricing