'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Header from './components/Header';
import Profile from './components/Profile';
import About from './components/About';
import MyProject from './components/MyProject';
import Skills from './components/Skills';
import ContactMe from './components/ContactMe';
import SubNav from './components/SubNav';
import AnimatedBackground from './components/AnimatedBg';

export default function Home() {
  return (
    <div id='#' className=' relative gradient-conic gradient-radial  w-full h-full  '>
      <div className=' overflow-hidden w-full'>
        <div className='fixed w-full  top-20 right-4 inset-0 flex items-center justify-center'>
          {/* <div className='w-64 h-64 bg-gradient-to-r  from-red-600 via-pink-500 to-red-500 opacity-70 rounded-full  blur-3xl'></div> */}
        </div>
        <div className='relative z-10 flex items-center justify-center h-full'></div>
      </div>
      <section>
        <div className='block md:flex  h-full'>
          <div className=' '>
            <Profile />
          </div>

          <div className='md:ml-10 min-h-screen'>
            {' '}
            <AnimatedBackground>
              <div>
                <About />
              </div>
            </AnimatedBackground>
            <div>
              <MyProject />
            </div>
            <div>
              <Skills />
            </div>
            <div>
              <ContactMe />
            </div>
          </div>
        </div>
      </section>{' '}
      <div className='w-full  flex items-center relative justify-center bg-black'>
        <div className='relative border   bg-black'>
          <SubNav />
        </div>
      </div>
    </div>
  );
}
