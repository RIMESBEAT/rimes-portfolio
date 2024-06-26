'use client';
import { Tooltip } from '@nextui-org/react';
import Image from 'next/image';
import React from 'react';
import {
  FaAtom,
  FaBootstrap,
  FaCss3Alt,
  FaHtml5,
  FaNodeJs,
  FaReact,
} from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io5';
import {
  SiAppwrite,
  SiExpress,
  SiMongodb,
  SiNextui,
  SiSanity,
  SiTailwindcss,
} from 'react-icons/si';
import { TbBrandNextjs, TbBrandReactNative } from 'react-icons/tb';
import { motion, useAnimation } from 'framer-motion';

import { useInView } from 'react-intersection-observer';
import { useEffect, useState } from 'react';
import FadeInSection from './animation/FadeInOut';

const Skills = () => {
  const skillSet = [
    {
      title: 'HTML',
      icon: (
        <FaHtml5 className='p-1 border hover:border-redAccent size-20 rounded-md hover:text-redAccent' />
      ),
    },
    {
      title: 'CSS',
      icon: (
        <FaCss3Alt className='p-1 border hover:border-redAccent size-20 rounded-md hover:text-redAccent' />
      ),
    },
    {
      title: 'Javascript',
      icon: (
        <IoLogoJavascript className='p-1 border hover:border-redAccent size-20 rounded-md hover:text-redAccent' />
      ),
    },
    {
      title: 'Boostrap',
      icon: (
        <FaBootstrap className='p-1 border hover:border-redAccent size-20 rounded-md hover:text-redAccent' />
      ),
    },
    {
      title: 'NodeJS',
      icon: (
        <FaNodeJs className='p-1 border hover:border-redAccent size-20 rounded-md hover:text-redAccent' />
      ),
    },
    {
      title: 'ExpressJS',
      icon: (
        <SiExpress className='p-1 border hover:border-redAccent size-20 rounded-md hover:text-redAccent' />
      ),
    },
    {
      title: 'MongoDB',
      icon: (
        <SiMongodb className='p-1 border hover:border-redAccent size-20 rounded-md hover:text-redAccent' />
      ),
    },
    {
      title: 'ReactJS',
      icon: (
        <FaReact className='p-1 border hover:border-redAccent size-20 rounded-md hover:text-redAccent' />
      ),
    },
    {
      title: 'ReactNative',
      icon: (
        <TbBrandReactNative className='p-1 border hover:border-redAccent size-20 rounded-md hover:text-redAccent' />
      ),
    },
    {
      title: 'NextJS',
      icon: (
        <TbBrandNextjs className='p-1 border hover:border-redAccent size-20 rounded-md hover:text-redAccent' />
      ),
    },
    {
      title: 'TailwindCSS',
      icon: (
        <SiTailwindcss className='p-1 border hover:border-redAccent size-20 rounded-md hover:text-redAccent' />
      ),
    },
    {
      title: 'Sanity',
      icon: (
        <SiSanity className='p-1 border hover:border-redAccent size-20 rounded-md hover:text-redAccent' />
      ),
    },
    {
      title: 'Appwrite',
      icon: (
        <SiAppwrite className='p-1 border hover:border-redAccent size-20 rounded-md hover:text-redAccent' />
      ),
    },
    {
      title: 'NextUI',
      icon: (
        <SiNextui className='p-1 border hover:border-redAccent size-20 rounded-md hover:text-redAccen hover:text-redAccent' />
      ),
    },
  ];

  return (
    <div className='h-full grid-cols-1 py-20' id='skills'>
      <FadeInSection>
        <div className='flex gap-2 bg-yellowAccent text-purpleAccent  flex-row items-center mx-auto md:mx-0   w-fit p-1 rounded-md font-bold text-sm mt-10'>
          <FaAtom />

          <h1 className=' '>Skills</h1>
        </div>
        <p className='capitalize text-2xl  mt-10 font-bold w-full  '>
          The Skills, tools and technology i am really good at:
        </p>
      </FadeInSection>

      <FadeInSection>
        <div className='flex gap-2 w-full justify-center flex-wrap py-10 items-center '>
          {skillSet.map((item) => {
            return (
              <div key={item.title}>
                <Tooltip content={item.title}>
                  <p>{item.icon}</p>
                </Tooltip>
              </div>
            );
          })}
        </div>
      </FadeInSection>
    </div>
  );
};

export default Skills;
