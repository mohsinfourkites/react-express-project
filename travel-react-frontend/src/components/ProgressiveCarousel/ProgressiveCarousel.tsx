'use client';
import { useState, useRef, useEffect } from 'react';
import  { StaticImageData } from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';

import { Home } from 'lucide-react';

import { ProgressSlider, SliderBtnGroup, SliderBtn, SliderContent, SliderWrapper } from './progress-slider';

import img1 from '../../assets/images/Kashmir/pexels-amjed-wani-1355393378-26110235.jpg';
import img2 from '../../assets/images/Kashmir/pexels-imadclicks-6780256.jpg';
import img3 from '../../assets/images/Kashmir/pexels-photonova-2907578.jpg';
import img4 from '../../assets/images/Kashmir/pexels-shubhendu-singh-1278012-2439787.jpg';

    const imgPreview = {
        img1,
        img2,
        img3,
        img4,
    };


const items = [
  {
    icon: <Home />,
    img: imgPreview.img1,
    title: 'Bridge',
    desc: 'A breathtaking view of a city illuminated by countless lights, showcasing the vibrant and bustling nightlife.',
    sliderName: 'bbridge',
  },
  {
    icon: <Home />,
    img: imgPreview.img2,
    title: 'Mountains View',
    desc: 'A serene lake reflecting the surrounding mountains and trees, creating a mirror-like surface.',
    sliderName: 'bmountains',
  },
  {
    icon: <Home />,
    img: imgPreview.img3,
    title: 'Autumn',
    desc: 'A picturesque path winding through a dense forest adorned with vibrant autumn foliage.',
    sliderName: 'bautumn',
  },
  {
    icon: <Home />,
    img: imgPreview.img4,
    title: 'Foggy',
    sliderName: 'bfoggy',
    desc: 'A stunning foggy view over the foresh, with the sun casting a golden glow across the forest. ',
  },
];
export default function ProgressiveCarousel() {
  const isMobile = useMediaQuery('(min-width: 640px)');
  return (
    <>
      <ProgressSlider
        vertical={isMobile ? true : false}
        fastDuration={300}
        duration={4000}
        activeSlider='bbridge'
        className='sm:flex '
      >
        <SliderBtnGroup className='sm:relative absolute bottom-0 lg:w-[28rem] sm:w-96 w-full z-10 sm:flex sm:flex-col grid grid-cols-2 sm:h-[500px] h-fit sm:dark:bg-black sm:bg-white dark:bg-black/80 bg-white/80 backdrop-blur-md overflow-hidden '>
          {items.map((item, index) => (
            <SliderBtn
              key={index}
              value={item?.sliderName}
              className='text-left  p-3 sm:border-b border sm:pl-5 sm:pb-0 pb-6 sm:flex-1'
              progressBarClass='left-0 sm:top-0 bottom-0 dark:bg-white bg-black sm:w-3 sm:h-full h-4  before:h-full before:w-4 before:'
            >
              <h2 className='relative px-4 rounded w-fit dark:bg-blue-500 bg-black text-white mb-2'>
                {item.title}
              </h2>
              <p className='text-sm font-medium dark:text-slate-200 text-slate-900 line-clamp-2'>
                {item.desc}
              </p>
            </SliderBtn>
          ))}
        </SliderBtnGroup>
        <SliderContent className='w-full'>
          {items.map((item, index) => (
            <SliderWrapper
              className='h-full'
              key={index}
              value={item?.sliderName}
            >
              <img
                className=' h-[500px] object-cover'
                src={item.img}
                width={1900}
                height={1080}
                alt={item.desc}
              />
            </SliderWrapper>
          ))}
        </SliderContent>
      </ProgressSlider>
    </>
  );
}

function useMediaQuery(query: string): boolean {
    const [matches, setMatches] = useState(false);

    useEffect(() => {
        const mediaQuery = window.matchMedia(query);
        const handleChange = () => setMatches(mediaQuery.matches);

        handleChange();
        mediaQuery.addEventListener('change', handleChange);

        return () => {
            mediaQuery.removeEventListener('change', handleChange);
        };
    }, [query]);

    return matches;
}
