import React from 'react';
import Image from 'next/image';
import img from '@/assets/pic01.jpg'


const Hero = () => {
    return (
     <>
       
          
      <div className='relative'>
      <div  >
          <video
            src="https://res.cloudinary.com/showkot/video/upload/v1696431921/640x248_1.03MB_fzqfgn.mp4"
            autoPlay
            loop
            muted
           className='w-[100vw] inline '
          />
         
        </div>
        <div className='absolute top-[40%] lg:top-[40%] md:top-[35%] left-[5%]'>
            <p className='font-semibold text-lg text-white lg:text-5xl md:text-3xl sm:text-2xl p-1'>The Finest Adventure In Bangladesh</p>
            <p className='font-bold text-amber-700 text-xl lg:text-6xl md:text-4xl p-1'>Since: 2006</p>
        </div>
      </div>
       
      
     </>
    );
};

export default Hero;