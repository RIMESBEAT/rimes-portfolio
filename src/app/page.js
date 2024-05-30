'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Header from './components/Header';
import Hero from './components/Hero';

export default function Home() {
  return (
    <main className=' min-h-screen bg-grayAccent px-20'>
      <section>
        <Header />

        <div>
          <Hero />
        </div>
      </section>
    </main>
  );
}
