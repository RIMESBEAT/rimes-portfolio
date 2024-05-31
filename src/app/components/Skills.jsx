import { Tooltip } from '@nextui-org/react';
import Image from 'next/image';
import React from 'react';

const Skills = () => {
  const tools = [
    {
      tool: 'html-5',
      name: 'HTML',
    },
    {
      tool: 'css3',
      name: 'CSS',
    },
    {
      tool: 'javascript-logo',
      name: 'Javascript',
    },
    {
      tool: 'bootstrap',
      name: 'Bootstrap',
    },
    {
      tool: 'tailwind_css',
      name: 'TailwindCss',
    },
    {
      tool: 'react-native',
      name: 'Reactjs/ReactNative',
    },
    {
      tool: 'nextjs',
      name: 'NextJS',
    },
    {
      tool: 'node-js',
      name: 'NodeJS',
    },
    {
      tool: 'express-js',
      name: 'ExpressJs',
    },

    {
      tool: 'mongo-db',
      name: 'MongoDB',
    },
    {
      tool: 'github',
      name: 'Github',
    },
  ];
  return (
    <div className='flex flex-col justify-center items-center'>
      <h1 className='  bg-darkPurpleAccent/50 w-fit p-1 rounded-md font-bold text-sm text-whiteAccent my-4'>
        My Skills
      </h1>
      <p className='capitalize text-2xl font-bold w-full md:w-1/2 text-center  text-darkPurpleAccent'>
        The Skills, tools and technology i am really good at:
      </p>

      <div className='flex gap-2 w-full justify-center flex-wrap mt-10 items-center '>
        {tools.map((item, index) => (
          <div className=' p-1 rounded-md' key={index}>
            <Tooltip
              content={item.name}
              color='secondary'
              className='capitalize'
            >
              <Image
                className='w-20'
                width={200}
                height={200}
                src={`https://img.icons8.com/nolan/700/${item.tool}.png`}
              />
            </Tooltip>
          </div>
        ))}
        <div className='  p-4 rounded-md flex items-center gap-8'>
          <Tooltip
            content='Appwrite'
            color='secondary'
            className='capitalize  '
          >
            <Image
              className='w-[4rem]'
              width={200}
              height={200}
              src={`https://appwrite.io/assets/logomark/logo.png`}
            />
          </Tooltip>

          <Tooltip content='Sanity' color='secondary' className='capitalize  '>
            <Image
              className='w-[4rem]'
              width={200}
              height={200}
              src={`https://asset.brandfetch.io/id9jKycKu7/idBdbt2lT-.jpeg?updated=1709116177659`}
            />
          </Tooltip>
        </div>
      </div>
    </div>
  );
};

export default Skills;
