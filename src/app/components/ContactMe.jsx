import { Button, Input, Textarea } from '@nextui-org/react';
import React from 'react';
import FadeInSection from './animation/FadeInOut';
import { FaAtom } from 'react-icons/fa';

const ContactMe = () => {
  return (
    <div className='xs:block flex gap-4 lg:block justify-center items-center my-10'>
      <FadeInSection>
        <div className='flex gap-2 flex-row items-center mx-auto md:mx-0  bg-redAccent w-fit p-1 rounded-md font-bold text-sm text-whiteAccent mt-10'>
          <FaAtom />
          <h1 className=' '>Contact Me</h1>
        </div>
        <div className='flex-1'>
          <p className=' font-bold text-2xl w-full  text-center lg:text-left  text-darkredAccent mb-10 capitalize'>
            Let&rsquo;s discuss on something cool together
          </p>
        </div>
      </FadeInSection>
      <FadeInSection>
        <div className='flex-1 md:w-full'>
          <form>
            <Input
              isRequired
              color='danger'
              size='sm'
              type='text'
              variant='bordered'
              label='Name'
            />
            <Input
              isRequired
              size='sm'
              type='email'
              color='danger'
              variant='bordered'
              label='Email'
              className='my-2'
            />
            <Textarea
              isRequired
              color='danger'
              label='Message'
              labelPlacement='inside'
              placeholder='Enter your message'
              className=' my-2  placeholder-black'
              variant='bordered'
            />
            <Button
              size='md'
              className='w-full'
              color='danger'
              variant='ghost'
              type='submit'
              startContent={
                <svg
                  aria-hidden='true'
                  fill='none'
                  focusable='false'
                  height='1em'
                  role='presentation'
                  viewBox='0 0 24 24'
                  width='1em'
                >
                  <path
                    d='M17 3.5H7C4 3.5 2 5 2 8.5V15.5C2 19 4 20.5 7 20.5H17C20 20.5 22 19 22 15.5V8.5C22 5 20 3.5 17 3.5ZM17.47 9.59L14.34 12.09C13.68 12.62 12.84 12.88 12 12.88C11.16 12.88 10.31 12.62 9.66 12.09L6.53 9.59C6.21 9.33 6.16 8.85 6.41 8.53C6.67 8.21 7.14 8.15 7.46 8.41L10.59 10.91C11.35 11.52 12.64 11.52 13.4 10.91L16.53 8.41C16.85 8.15 17.33 8.2 17.58 8.53C17.84 8.85 17.79 9.33 17.47 9.59Z'
                    fill='currentColor'
                  />
                </svg>
              }
            >
              Send
            </Button>
          </form>
        </div>
      </FadeInSection>
    </div>
  );
};

export default ContactMe;
