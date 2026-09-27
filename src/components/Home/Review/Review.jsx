"use client";
import Sectionheading from '@/components/Sectionheading';
import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import ReviewCard from './ReviewCard';
import { userReviewData } from '@/constant/constant';
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1324 },
    items: 3,
    slidesToSlide: 1 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1324, min: 764 },
    items: 2,
    slidesToSlide: 1 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 764, min: 0 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
};
const Review = () => {
  return (
    <div id='reviews' className='py-16 bg-white dark:bg-gray-800' >
        <div>
            <Sectionheading clr={"text-green-700"} heading={"Client Reviews"} subheading={"Don’t Just Take Our Words For It"} />
        </div>
        <div className='mt-14'>
<Carousel  
arrows={true}
responsive={responsive}
  infinite={true}
  autoPlay={true}
  autoPlaySpeed={5000} 
>
  {userReviewData.map((item)=>{
    return (
        <div key={item.id}  >
            <ReviewCard item={item}/>
        </div>
    )
  })}
</Carousel>
        </div>
    </div>
  )
}

export default Review