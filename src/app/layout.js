import { Roboto, Fraunces } from 'next/font/google';
import './globals.css';
import { NextUIProvider } from '@nextui-org/react';
import Profile from './components/Profile';
import Header from './components/Header';
import SubNav from './components/SubNav';

const queenFont = Fraunces({
  weight: ['100', '300', '400', '500', '700', '900'],
  subsets: ['latin'],
});

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className={queenFont.className}>
        <NextUIProvider>
          <div className=' xs:px-5 px-10 md:px-14 lg:px-20 bg-grayAccent   min-w-full'>
            <Header />

            <main className=''>{children}</main>
          </div>
        </NextUIProvider>
      </body>
    </html>
  );
}
