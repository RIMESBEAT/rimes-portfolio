import { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const FadeInSection = ({ children }) => {
  const controls = useAnimation();
  const [ref, inView, entry] = useInView({
    threshold: 0.1,
  });
  const [lastYPos, setLastYPos] = useState(0);
  const [scrollingDown, setScrollingDown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentYPos = window.scrollY;
      setScrollingDown(currentYPos > lastYPos);
      setLastYPos(currentYPos);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastYPos]);

  useEffect(() => {
    if (inView) {
      if (entry.boundingClientRect.top > 0) {
        // Content entering from the bottom
        controls.start('visible');
      } else {
        // Content entering from the top
        controls.set('visible');
      }
    } else if (scrollingDown) {
      // Content leaving towards the bottom
      controls.start('hidden');
    }
  }, [controls, inView, scrollingDown, entry]);

  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      ref={ref}
      initial='hidden'
      animate={controls}
      variants={variants}
      transition={{ duration: 0.6, ease: 'easeInOut' }}
    >
      {children}
    </motion.div>
  );
};

export default FadeInSection;
