"use client";
import Sectionheading from '@/components/Sectionheading';
import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import ReviewCard from './ReviewCard';
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
export const userReviewData = [
  {
    id: 1,
    name: "John Doe",
    profession: "Real Estate Agent",
    userImage: "/images/u1.jpg",
    review:
      "A wonderful experience! The platform made it easy to find exactly what I needed. lorem ipsum dolor sit ame",
  },
  {
    id: 2,
    name: "Mike Smith",
    profession: "Business Owner",
    userImage: "/images/u2.jpg",
    review:
      "Great selection of properties and seamless process. Highly recommended for anyone looking to invest.",
  },
  {
    id: 3,
    name: "Alex Johnson",
    profession: "Web developer",
    userImage: "/images/u3.jpg",
    review:
      "The website helped me find my dream home quickly and hassle-free. Exceptional service!",
  },
  {
    id: 4,
    name: "Emily Clark",
    profession: "Interior Designer",
    userImage: "/images/u4.jpg",
    review:
      "Fantastic range of properties with clear details. The best platform for home and design inspiration!",
  },
];
const Review = () => {
  return (
    <div className='py-16 bg-white dark:bg-gray-800' >
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