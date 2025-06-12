'use client';
import React, { useEffect } from 'react';
import addGsap from '@/utils/addGsap';
import { useParallax } from 'react-scroll-parallax';

export default function VideoLoop({ videoUrl, imageUrl }) {
  const parallax = useParallax({ speed: -20 });

  useEffect(() => {
    addGsap();
  }, []);

  return (
    <div className='video-area-1 overflow-hidden'>
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
                  <source src={videoUrl} type='video/mp4' />
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
