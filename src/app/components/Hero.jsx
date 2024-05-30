import React from 'react';
import ProfileImge from '../../../public/profile.jpg';
import Image from 'next/image';
import { FaGithub } from 'react-icons/fa';

const Hero = () => {
  return (
    <div className='my-4'>
      <div className='h-screen mt-10 py-10 border  rounded-xl border-red-700  max-w-96 flex flex-col justify-center items-center'>
        <div className=''>
          <p className='text-4xl mb-8 font-black'>Elijah Isaiah</p>

          <Image
            className='w-80 h-80 object-cover object-top rounded-xl'
            src={ProfileImge}
            alt='Elijah Image'
          />

          <div className='mt-6'>
            <p className=''>Specialization:</p>
            <p className='font-bold text-xl'>Software Engineering</p>
            <p className=' mt-4'>Based In:</p>
            <p className='font-bold text-xl'>Ikeja, Lagos</p>
          </div>

          <div>
            <FaGithub />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
