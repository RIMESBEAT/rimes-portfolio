"use client"
import React from 'react';
import ProfileImge from '../../../public/profile.jpg';
import Image from 'next/image';
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
  FaDownload,
} from 'react-icons/fa';
import Link from 'next/link';
import { Tooltip } from '@nextui-org/react';
import {motion} from "framer-motion"

const Profile = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      className=' h-screen  '
    >
      <div className='  border  rounded-xl hover:border-redAccent  backdrop:blur-lg bg-white/10 w-max flex justify-center items-start'>
        <div className='p-4 overflow-y-auto'>
          <p className='text-2xl mb-8 font-black'>Elijah Isaiah</p>

          <Image
            className='w-64 h-44 object-cover object-top rounded-xl'
            src={ProfileImge}
            alt='Elijah Image'
          />

          <div className='mt-2'>
            <p className=''>Specialization:</p>
            <p className='font-bold text-xl'>Software Engineering</p>
            <p className=' mt-2'>Based In:</p>
            <p className='font-bold text-xl'>Ikeja, Lagos</p>
          </div>

          <div className='flex flex-row gap-3 mt-3 justify-center'>
            <Tooltip color='danger' content='X (Twitter)'>
              <Link href=''>
                <FaTwitter className='size-10 hover:border-redAccent   delay-100 transition-all hover:text-redAccent  rounded-md  border p-2 ' />
              </Link>
            </Tooltip>
            <Tooltip color='danger' content='Linked-In'>
              <Link href=''>
                <FaLinkedin className='size-10 hover:border-redAccent   rounded-md hover:text-redAccent  delay-100 transition-all border p-2 ' />
              </Link>
            </Tooltip>
            <Tooltip color='danger' content='GitHub'>
              <Link href=''>
                <FaGithub className='size-10 border hover:border-redAccent hover:text-redAccent rounded-md   delay-100 transition-all p-2 ' />
              </Link>
            </Tooltip>
            <Tooltip color='danger' content='Instagram'>
              <Link href=''>
                <FaInstagram className='size-10 border hover:border-redAccent hover:text-redAccent  rounded-md    delay-100 transition-all  p-2 ' />
              </Link>
            </Tooltip>
          </div>
          <div className='mt-4'>
            <Link
              className=' flex w-full items-center rounded-md bg-primary hover:bg-redAccent justify-center gap-4'
              href=''
            >
              <FaDownload className=' text-whiteAccent' />
              <p className='   text-whiteAccent py-2 '> Download CV</p>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Profile;
