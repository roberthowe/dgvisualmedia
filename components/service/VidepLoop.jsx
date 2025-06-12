'use client';
import React, { useEffect, useState } from 'react';
import addGsap from '@/utils/addGsap';
import { useParallax } from 'react-scroll-parallax';

export default function VideoLoop({
  desktopVideoUrl,
  mobileVideoUrl,
  imageUrl,
}) {
  const parallax = useParallax({ speed: -20 });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    addGsap();

    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768); // Bootstrap breakpoint for mobile
    };

    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);
    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  return (
    <div className='video-area-1 overflow-hidden mt-0 mt-md-60'>
      <div className='container-fluid p-0'>
        <div className='row'>
          <div className='col-lg-12'>
            <div className='video-wrap'>
              <div className='jarallax' ref={parallax.ref}>
                <video
                  className='w-100 h-100 object-cover'
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload='auto'
                  poster={imageUrl}
                >
                  <source
                    src={isMobile ? mobileVideoUrl : desktopVideoUrl}
                    type='video/mp4'
                  />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
