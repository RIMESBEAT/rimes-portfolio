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
      className=' h-full xs:h-full w-full '
    >
      <div className='   border-none md:border xs:pt-10  rounded-xl hover:border-redAccent  backdrop:blur-lg xs:bg-transparent bg-white/10 w-ful md:w-max flex justify-center items-start'>
        <div className='p-4 flex md:block xs:block gap-4'>
          <p className='text-2xl hidden md:block xs:block  mb-8 xs:mb-4 font-black '>
            Elijah Isaiah
          </p>

          <Image
            className='w-64 xs:w-full h-full md:h-44 object-cover object-top rounded-xl'
            src={ProfileImge}
            alt='Elijah Image'
          />

          <div className='mt-2 flex flex-col justify-between'>
            <div>
 <p className='text-2xl md:hidden xs:hidden mb-8 font-black'>Elijah Isaiah</p>
            <p className=''>Specialization:</p>
            <p className='font-bold text-xl'>Software Engineering</p>
            <p className=' mt-2'>Based In:</p>
            <p className='font-bold text-xl'>Ikeja, Lagos</p>

            </div>
              
           
            <div className='flex flex-row gap-2 mt-3 justify-center'>
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
      </div>
    </motion.div>
  );
};

export default Profile;
