import { Tab, Tabs } from '@nextui-org/react';
import React from 'react';
import { FaHome } from 'react-icons/fa';
import { SiOnlyoffice } from 'react-icons/si';
import { IoCodeWorkingSharp } from 'react-icons/io5';
import { GiSkills } from 'react-icons/gi';
import { MdContactPhone } from 'react-icons/md';
const SubNav = () => {
  return (
    <div className='fixed z-30 bottom-2  left-0 mx-auto       w-full'>
      <div className=' flex justify-center w-full items-center'>
        <Tabs
          radius='full'
          size='sm'
          fullWidth='false'
          color='danger'
          variant='light'
          className='bg-primary rounded-md'
        >
          <Tab
            key='home'
            href='#'
            title={
              <div className='flex flex-col items-center justify-center '>
                <FaHome />
                <span>Home</span>
              </div>
            }
          />
          <Tab
            key='about'
            href='#about'
            title={
              <div className='flex flex-col items-center justify-center '>
                <SiOnlyoffice />
                <span>About</span>
              </div>
            }
          />
          <Tab
            key='work'
            href='#work'
            title={
              <div className='flex flex-col items-center justify-center '>
                <IoCodeWorkingSharp />
                <span>Work</span>
              </div>
            }
          />
          <Tab
            key='skills'
            href='#skills'
            title={
              <div className='flex flex-col items-center justify-center '>
                <GiSkills />

                <span>Skills</span>
              </div>
            }
          />
          <Tab
            key='contact'
            href='/#about'
            title={
              <div className='flex flex-col items-center justify-center space-x-2'>
                <MdContactPhone />
                <span>Contact</span>
              </div>
            }
          />
        </Tabs>
      </div>
    </div>
  );
};

export default SubNav;
