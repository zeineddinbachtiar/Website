import Link from 'next/link';
import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

const Main = () => {
  return (
    <div id='home' className='w-full h-screen text-left'>
      <div className='max-w-[1280px] w-full h-full mx-auto p-2 flex justify-center items-center'>
        <div>
          <p className='uppercase text-sm tracking-widest text-gray-600'>
            JUST A REGULAR PERSON WITH AN AMAZING DREAM
          </p>
          <h1 className='py-4 text-black-700'>
            Hi there, you can call me <span className='text-[#5651e5]'>Zein </span>
          </h1>
          <h2 className='py-2 text-gray-500'>A Fresh Graduate from Computer Engineering of Institut Teknologi Sepuluh Nopember</h2>
          <p className='py-4 text-gray-800 sm:max-w-[80%] m-auto text-right'>
            People usually call me Zein. That's stands for Zeineddin Ahmad Bachtiar, which is my full name. Currently, i'm a Fresh Graduate from Computer Engineering in Institut Teknologi Sepuluh Nopember (ITS) Surabaya. I'm a person of curious, active, energetic, and willing to adapt and learn new things. I'm also interested in a lot of things, and technology is one of them. 
          </p>
          <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
            <a
              href='https://www.linkedin.com/in/zeineddin-bachtiar-8095241a5/'
              target='_blank'
              rel='noreferrer'
            >
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <FaLinkedinIn />
              </div>
            </a>
            <a
              href='https://github.com/zeineddinbachtiar'
              target='_blank'
              rel='noreferrer'
            >
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <FaGithub />
              </div>
            </a>
            <a
              href='https://mail.google.com/mail/u/0/?fs=1&to=zeineddinbachtiar@gmail.com&su=Hello%20Zein&body=%27%27&bcc=%27%27&tf=cm'
              target='_blank'
              rel='noreferrer'
            >
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <AiOutlineMail />
              </div>
            </a>
            <a
              href='https://drive.google.com/file/d/1Yrp5_zb94x30jlok_6yeFN0a8iLq1imT/view?usp=sharing'
              target='_blank'
              rel='noreferrer'
            >
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <BsFillPersonLinesFill />
              </div>
            </a>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
