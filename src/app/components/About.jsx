import { Tooltip } from '@nextui-org/react';
import Image from 'next/image';
import React from 'react';
import { FaAtom } from 'react-icons/fa';
import FadeInSection from './animation/FadeInOut';

const About = () => {
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
      tool: 'mongo-db',
      name: 'MongoDB',
    },
    {
      tool: 'github',
      name: 'Github',
    },
  ];
  return (
    <section id='about'>
      <div>
        <div className='py-20 flex flex-col justify-center  md:mx-auto w-full    '>
          <FadeInSection>
            <div className='bg-yellowAccent text-purpleAccent flex gap-2 flex-row items-center mx-auto md:mx-0  w-fit p-1 rounded-md font-bold text-sm   mt-10'>
              <FaAtom />
              <h1 className=' '>About Me</h1>
            </div>
          </FadeInSection>

          <FadeInSection>
            {' '}
            <p className=' font-bold text-2xl w-full  text-center md:text-left  text-darkPurpleAccent my-4 capitalize'>
              Transforming Vissions into an exeptional reality
            </p>
            <p className='w-full text-lg  text-center md:text-left'>
              Full-Stack Software Engineer specializing in React.js, React
              Native, Next.js, Node.js, Appwrite, and MongoDB. Adept at building
              dynamic, high-performing applications and robust backend systems.
            </p>
            <p className='w-full text-lg  text-center md:text-left'>
              {' '}
              Proven track record in developing scalable web and mobile
              applications, creating efficient APIs, and optimizing database
              performance. Passionate about continuous learning and exploring
              new technologies. Demonstrated ability to lead cross-functional
              teams and deliver high-quality projects on time.
            </p>
          </FadeInSection>
        </div>

        <FadeInSection>
          <section className='  py-2 block  mt-6 w-full  lg:flex  items-center justify-between'>
            <div className='  flex  xs:gap-2 gap-4 justify-center md:justify-between'>
              <div className='flex items-center gap-3 '>
                <p className='  text-yellowAccent text-6xl inline-block font-bold text-redAccent'>
                  3
                </p>
                <p className='text-md font-bold'>Years of Experience</p>
              </div>
              <div className='flex items-center gap-3'>
                <p className='text-6xl font-bold text-yellowAccent'>5</p>
                <p className='text-lg   font-bold'>Projects completed</p>
              </div>
            </div>
            {/* <div className='flex mt-2 md:mt-0 gap-4 '>
            {tools.map((item, index) => (
              <div key={index}>
                <Tooltip
                  content={item.name}
                  color='danger'
                  className='capitalize'
                >
                  <Image
                    className='w-10'
                    width={200}
                    height={200}
                    src={`https://img.icons8.com/nolan/700/${item.tool}.png`}
                  />
                </Tooltip>
              </div>
            ))}
          </div> */}
          </section>
        </FadeInSection>
      </div>
    </section>
  );
};

export default About;
