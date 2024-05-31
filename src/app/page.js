'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Header from './components/Header';
import Profile from './components/Profile';
import About from './components/About';
import MyProject from './components/MyProject';

export default function Home() {
  return (
    <main className=' min-h-screen bg-grayAccent px-20'>
      <section>
        <Header />

        <div className='flex flex-row gap-10'>
          <div>
            <Profile />
          </div>
          <div>
            <About />
          </div>
        </div>

        <div>
          <MyProject />
        </div>
      </section>
    </main>
  );
}
