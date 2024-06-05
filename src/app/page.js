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

export default function Home() {
  return (
    <div className=' relative  bg-grayAccent px-3 '>
      <section>
        <div className='block md:flex  h-full'>
          <div className=' '>
            <Profile />
          </div>

          <div className='md:ml-10 min-h-screen'>
            
            <div>
              <About />
            </div>
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
