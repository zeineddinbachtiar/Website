import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AboutImg from '../public/assets/mypic1.jpg';

const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2'>
          <p className='uppercase text-xl tracking-widest text-[#5651e5]'>
            Who I Am ?
          </p>
          <h2 className='py-4'>Who I Am</h2>
          <p className='py-2 text-gray-800'>
            I've always interested in many things. Tech, is one of them. Computer has been always attract me since my childhood. I began my first step to learn more about computer by bought a used Dell Laptop back when i'm  13 using my own money. From there, i learned a lot about basic computing and stuff. From there, my dream is to go to college and take computer as my major.
          </p>
          <p className='py-2 text-gray-800'>
            I started to learn more about programming when covid pandemic. I started it by learning about Web Development, especially HTML and CSS, from Youtube's videos. Then in college, i learned about true programming, C language. Time goes by, they started to taught me about C++, while at the same time i taught myself about phyton language. Once, i made a simple 2D game using SFML Library for final task in Data Structures course.
          </p>
          <Link href='/#projects'>
            <p className='py-2 text-gray-600 underline cursor-pointer'>
              Check out some of my latest projects.
            </p>
          </Link>
        </div>
        <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
          <Image src={AboutImg} className='rounded-xl' alt='/' />
        </div>
      </div>
    </div>
  );
};

export default About;
