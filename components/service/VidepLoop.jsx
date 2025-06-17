'use client';
import React, { useEffect, useState } from 'react';
import addGsap from '@/utils/addGsap';

export default function VideoLoop({
  desktopVideoUrl,
  mobileVideoUrl,
  imageUrl,
}) {
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
  );
}
