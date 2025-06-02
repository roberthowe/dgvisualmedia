'use client';
import addGsap from '@/utils/addGsap';
import React, { useEffect, useState } from 'react';

import ModalVideo from 'react-modal-video';
import { useParallax } from 'react-scroll-parallax';
export default function Video({ videoUrl, imageUrl }) {
  const [isOpen, setIsOpen] = useState(false);
  const parallax = useParallax({
    speed: -20,
  });
  useEffect(() => {
    addGsap();
  }, []);

  return (
    <>
      <div className='video-area-1 overflow-hidden'>
        <div className='container-fluid p-0'>
          <div className='row'>
            <div className='col-lg-12'>
              <div className='video-wrap'>
                <div
                  className='jarallax'
                  ref={parallax.ref}
                  style={{
                    backgroundImage: `url(${imageUrl})`,
                  }}
                ></div>
                <div
                  onClick={() => setIsOpen(true)}
                  className='play-btn circle-btn btn gsap-magnetic popup-video background-image'
                >
                  PLAY VIDEO
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ModalVideo
        channel='custom'
        url={videoUrl}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      />
    </>
  );
}
