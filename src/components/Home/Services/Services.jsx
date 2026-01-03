import Sectionheading from '@/components/Sectionheading'
import React from 'react'
import ServiceCard from './ServiceCard'


const Services = () => {
  return (
    <div className='py-30 bg-gray-300'>
        <div>
         <div>
            <Sectionheading clr="text-red-600" heading="Our Services" subheading=" Provided Features" />
         </div>
         <div className='w-[80%] mx-auto mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
            <div>
                <ServiceCard title="Design and Deploy" icon="/images/s1.png"/>
            </div>
            <div>
                <ServiceCard title="Account Settings" icon="/images/s2.png"/>
            </div>
            <div>
                <ServiceCard title="Notification Manage" icon="/images/s3.png"/>
            </div>
            <div>
                <ServiceCard title="Customer Support" icon="/images/s4.png"/>
            </div>
            <div>
                <ServiceCard title="Email Marketing" icon="/images/s5.png"/>
            </div>
            <div>
                <ServiceCard title="Digital Agency" icon="/images/s6.png"/>
            </div>
         </div>
        </div>
    </div>
  )
}

export default Services