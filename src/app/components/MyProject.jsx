'use client';
import { Button, Card, CardFooter, CardHeader, link } from '@nextui-org/react';
import Image from 'next/image';
import React from 'react';

import Link from 'next/link';

const MyProject = () => {
  const project = [
    {
      id: 1,
      title: 'Shineway Healthcare',
      description:
        'I created this simple website for Shineway Healthcare with translation features.',
      tools: ['Nextjs', 'TailwindCss', 'Aceternity UI', 'Sanity', 'I18next'],
      imgUrl: require('../../public/shineway.png'),
      link: 'https://www.shineway.health',
    },
    {
      id: 2,
      title: 'fasthelpme loan app',
      imgUrl: require('../../public/fastapp.jpg'),
      link: 'https://bit.ly/fasthelpme-apk',
    },
    {
      id: 2,
      title: 'fasthelpme',
      imgUrl: require('../../public/fasthelp.png'),
      link: 'https://www.fasthelpme.com',
    },
  ];
  return (
    <div className='flex flex-col justify-center items-center'>
      <h1 className='mx-auto md:mx-0  bg-darkPurpleAccent/50 w-fit p-1 rounded-md font-bold text-sm text-whiteAccent mt-10'>
        Work
      </h1>
      <p className='font-bold text-2xl w-full  text-center   text-darkPurpleAccent my-4 capitalize'>
        Project i have created so far:
      </p>

      <div className='grid my-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {project.map((item) => (
          <div
            rounded='rounded-2xl'
            className='  bg-white/70 rounded-[22px] dark:bg-zinc-900'
          >
            <Link href={item.link} className=' ' key={item.id}>
              <Card
                isFooterBlurred
                className='w-full h-[300px] col-span-12 sm:col-span-7'
              >
                <CardHeader className='absolute z-10 top-1 flex-col items-start'>
                  <h4 className='text-white/90 bg-purpleAccent rounded-md p-1 font-medium text-md'>
                    {item.title}
                  </h4>
                </CardHeader>
                <Image
                  width={750}
                  height={1000}
                  removeWrapper
                  alt='Relaxing app background'
                  className='z-0 w-full h-full object-cover'
                  src={item.imgUrl}
                />
                <CardFooter className='absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100'>
                  <div className='gap-2 items-center'>
                    <p className='text-tiny text-white/60 mb-2'>
                      {item.description}
                    </p>
                    {item.tools && item.tools.length > 0 && (
                      <div className='flex gap-1  text-whiteAccent text-tiny flex-wrap'>
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
    </div>
  );
};

export default MyProject;
