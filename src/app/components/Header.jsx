import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Header = () => {
  return (
    <nav className='md:flex justify-between sticky z-30 -top-1 hidden   py-5 w-full '>
      <div className=' text-balance '>
        <h1 className=' font-extrabold text-xl text-redAccent'>
          Elijah
          <span className='font-bold ml-2 text-md '>Isaiah</span>
        </h1>
      </div>

      <div className=' flex-row flex gap-4'>
        <div>
          <Link href='/'>Home</Link>
        </div>
        <div>
          <Link className=' text-redAccent' href='/'>
            About
          </Link>
        </div>
        <div>
          <Link href='/'>Work</Link>
        </div>
        <div>
          <Link href='/'>Services</Link>
        </div>
        <div>
          <Link href='/'>Contact</Link>
        </div>
      </div>

      <div>
        <Link
          className=' bg-blue p-2 uppercase rounded-md text-whiteAccent '
          href='/'
        >
          Resume
        </Link>
      </div>
    </nav>
  );
};

export default Header;
