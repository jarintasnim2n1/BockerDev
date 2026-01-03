"use client";
import { FaArrowRightLong } from "react-icons/fa6";
import { GiSparkles } from "react-icons/gi";
import React, { useEffect, useRef } from 'react';
import { TypeAnimation } from "react-type-animation";
import Link from "next/link";
const Hero = () => {
     const canvasRef = useRef(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    
    // Canvas সাইজ সেট
    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    setCanvasSize();
    
    // Particles অ্যারে - useEffect এর ভিতরে রাখুন
    const particles = [];
    
    // Particles ইনিশিয়ালাইজেশন
    const initParticles = () => {
      particles.length = 0; // Clear existing particles
      for (let i = 0; i < 100; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 3 + 1,
          speedX: (Math.random() - 0.5) * 0.5,
          speedY: (Math.random() - 0.5) * 0.5,
          opacity: Math.random() * 0.5 + 0.2,
        });
      }
    };
    initParticles();
    
    // Animation function
    const animate = () => {
      if (!canvas || !ctx) return;
      
      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Update and draw particles
      particles.forEach((particle) => {
        // Update position
        particle.x += particle.speedX;
        particle.y += particle.speedY;
        
        // Boundary collision (bounce)
        if (particle.x < 0 || particle.x > canvas.width) {
          particle.speedX *= -1;
          // Ensure particle stays within bounds
          particle.x = particle.x < 0 ? 0 : canvas.width;
        }
        if (particle.y < 0 || particle.y > canvas.height) {
          particle.speedY *= -1;
          particle.y = particle.y < 0 ? 0 : canvas.height;
        }
        
        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${particle.opacity})`;
        ctx.fill();
      });
      
      // Continue animation loop
      requestAnimationFrame(animate);
    };
    
    // Start animation
    let animationId = requestAnimationFrame(animate);
    
    // Handle window resize
    const handleResize = () => {
      setCanvasSize();
      initParticles(); // Resize এ নতুন particles তৈরি
    };
    
    window.addEventListener("resize", handleResize);
    
    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationId);
    };
  }, []);
  return (
    <div className='relative min-h-screen flex items-center justify-center overflow-hidden'>
     <canvas ref={canvasRef} className='absolute inset-0 bg-linear-to-br from-blue-900 via-purple-900 to-pink-900 dark:from-gray-950 dark:via-gray-900 dark:to-gray-900' />
     <div className='relative max-w-7xl px-4 sm:px-6 lg:px-8 text-center mx-auto z-10 '>
       <div >
        <div data-aos="fade-down" className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md rounded-full px-8 py-4 mb-8 ">
          <GiSparkles className="text-yellow-300 h-8 w-8" />
         <span className="text-white sm:text-lg md:text-2xl text-3xl font-medium  " > Welcome to Blockerdev</span>
        </div>
       </div>
       {/* type write */}
       <h1 data-aos="fade-up" data-aos-delay="200" className="text-4xl sm:text-6xl mb-6 md:text-7xl lg:text-8xl font-bold text-white">
       <TypeAnimation
       sequence={[
        "We Create Magic", 2000, "We Build Dreams",2000, "We Design Future",2000
       ]}
       wrapper="span" speed={50} repeat={Infinity}
       />
       </h1>
       <p data-aos="fade-up" data-aos-delay="400" className="text-xl md:text-2xl lg:text-3xl text-white max-w-4xl leading-relaxed"> When, while lovely valley teems with vapour around meand meridian sun strikes the upper impenetroble. </p>
    <div data-aos="fade-up" data-aos-delay="600" className="flex flex-col sm:flex-row gap-4 justify-center">
      <Link href={"#"} className=" mt-6 group inline-flex justify-center space-x-2 items-center text-black  bg-white transform hover:bg-blue-600 hover:scale-105 py-4 px-6 rounded-full transition-all duration-300 shadow-lg hover:shadow-2xl">
      <span className="mr-2 sm:mr-1 font-medium text-lg md:text-xl ">Get Started </span> < FaArrowRightLong className="h-5 w-5 group-hover:tranlate-x-1 transition-transform"/>
      </Link> 
      <Link href={"#"} className=" mt-6  inline-flex justify-center items-center  text-white hover:text-black bg-transparent border-2 border-white hover:bg-white transform hover:scale-105 py-4 px-6 rounded-full transition-all duration-300 shadow-lg hover:shadow-2xl">
      <span className=" font-medium text-lg md:text-xl ">Contact Us </span> 
      </Link> 
    </div>
     </div>
     <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2  animate-bounce">
      <div className="w-6 h-10 border-2 border-white rounded-full flex items-center justify-center p-2">
        <div className="w-1 h-3 bg-white rounded-full "></div>
      </div>
     </div>
    </div>
  )
}

export default Hero