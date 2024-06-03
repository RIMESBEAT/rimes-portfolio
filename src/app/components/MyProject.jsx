'use client';
import { Button, Card, CardFooter, CardHeader, link } from '@nextui-org/react';
import Image from 'next/image';
import React from 'react';

import Link from 'next/link';
import { FaAtom } from 'react-icons/fa';
import { motion } from 'framer-motion';
import FadeInSection from './animation/FadeInOut';

const MyProject = () => {
  const project = [
    {
      id: 1,
      title: 'Shineway Healthcare',
      tools: ['Nextjs', 'TailwindCss', 'Aceternity UI', 'Sanity', 'I18next'],
      imgUrl: require('../../../public/shineway.png'),
      link: 'https://www.shineway.health',
    },
    {
      id: 2,
      title: 'fasthelpme loan app',
      tools: ['ReactNative', 'Nativewind', 'Appwrite'],
      imgUrl: require('../../../public/fastapp.jpg'),
      link: 'https://bit.ly/fasthelpme-apk',
    },
    {
      id: 3,
      title: 'fasthelpme',
      tools: ['Nextjs', 'TailwindCss', 'Sanity'],
      imgUrl: require('../../../public/fasthelp.png'),

      link: 'https://www.fasthelpme.com',
    },
  ];
  return (
    <div className='flex flex-col  '>
      <FadeInSection>
           <div className='flex gap-2 flex-row items-center mx-auto md:mx-0  bg-redAccent w-fit p-1 rounded-md font-bold text-sm text-whiteAccent mt-10'>
        <FaAtom />
        <h1 className=' '>My Projects</h1>
      </div>
      <p className='font-bold mt-10 text-2xl w-full    text-darkPurpleAccent my-4 capitalize'>
        Some of my projects:
      </p>  
      </FadeInSection>
 
      <FadeInSection>
        {' '}
        <div className='grid my-10 grid-cols-2 xs:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-4'>
          {project.map((item, index) => (
            <div
              key={index}
              rounded='rounded-2xl'
              className='  bg-white/70 rounded-[22px] dark:bg-zinc-900'
            >
              <Link href={item.link} className=' ' key={item.id}>
                <Card
                  whileHover={{ scale: 1.2 }}
                  isFooterBlurred
                  className='w-full h-[300px] col-span-12 sm:col-span-7'
                >
                  <CardHeader className='absolute z-10 top-1 flex-col items-start'>
                    <h4 className='text-whiteAccent bg-redAccent rounded-md p-1 font-medium text-md'>
                      {item.title}
                    </h4>
                  </CardHeader>
                  <motion.div
                    className='h-full'
                    whileHover={{ scale: 1.2, animationDelay: '.5s' }}
                    whileTap={{ scale: 1.1 }}
                    drag='x'
                    dragConstraints={{ left: -100, right: 100 }}
                  >
                    <Image
                      width={750}
                      height={1000}
                      removeWrapper
                      alt={item.title}
                      className='z-0 w-full h-full object-cover'
                      src={item.imgUrl}
                    />
                  </motion.div>

                  <CardFooter className='absolute bg-black/70 bottom-0 z-10 border-t-1 border-default-600 '>
                    <div className='gap-2 items-center'>
                      <p className='text-tiny text-white/60 mb-2'>
                        {item.description}
                      </p>
                      {item.tools && item.tools.length > 0 && (
                        <div className='flex  gap-1  text-whiteAccent text-tiny flex-wrap'>
                          {item.tools.map((tool, index) => (
                            <p
                              className='bg-purpleAccent p-1 rounded-md'
                              key={index}
                            >
                              {tool}
                            </p>
                          ))}
                        </div>
                      )}
                    </div>
                  </CardFooter>
                </Card>
              </Link>
            </div>
          ))}
        </div>
      </FadeInSection>
    </div>
  );
};

export default MyProject;
