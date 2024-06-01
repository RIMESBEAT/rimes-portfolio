'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Header from './components/Header';
import Profile from './components/Profile';
import About from './components/About';
import MyProject from './components/MyProject';
import Skills from './components/Skills';

export default function Home() {
  return (
    <main className='  bg-grayAccent px-3 '>
      <section>
        <div className='block md:flex'>
          <Profile />
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
          </div>
        </div>
      </section>
    </main>
  );
}
