import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function Hero() {
  return (
    <div className='hero-wrapper hero-2' id='hero'>
      <div className='hero-2-thumb wow img-custom-anim-right animated'>
        <Image
          width={1082}
          height={728}
          src='/assets/img/hero/pure-padel-2.webp'
          alt='img'
        />
      </div>
      <div className='container'>
        <div className='hero-style2'>
          <div className='row'>
            <div className='col-lg-9'>
              <h1 className='hero-title wow img-custom-anim-right animated text-white'>
                We Make
              </h1>
              <h1 className='hero-title wow img-custom-anim-left animated text-white'>
                Creative Things
              </h1>
            </div>
            <div className='col-lg-10 offset-lg-2'>
              <h1 className='hero-title wow img-custom-anim-right animated text-white'>
                Everyday
              </h1>
            </div>
            <div className='col-xxl-4 col-xl-5 col-lg-6'>
              <p className='hero-text wow img-custom-anim-left animated text-white'>
                We are digital agency that helps immersive and engaging user
                experiences that
              </p>
              <div className='btn-group fade_left'>
                <Link
                  scroll={false}
                  href='/project'
                  className='btn style2 wow img-custom-anim-left animated'
                >
                  <span className='link-effect'>
                    <span className='effect-1'>VIEW OUR WORKS</span>
                    <span className='effect-1'>VIEW OUR WORKS</span>
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
