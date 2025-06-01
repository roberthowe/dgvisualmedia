'use client';

import Link from 'next/link';
import React from 'react';
import Typewriter from 'typewriter-effect';

export default function Cta() {
  return (
    <div className='cta-area-1 overflow-hidden bg-theme space'>
      <div className='container'>
        <div className='row justify-content-center'>
          <div className='col-xl-8 col-lg-10'>
            <div className='title-area text-center mb-0'>
              <h2 className='sec-title'>
                We{' '}
                <Typewriter
                  options={{
                    strings: ['Create', 'Innovate', 'Collaborate'],
                    autoStart: true,
                    loop: true,
                    cursor: '',
                  }}
                />
                To Elevate
                <br />
                Your Business
              </h2>
              <p className='sec-text mt-30 mb-40'>
                We're here for the people who think big
              </p>
              <div className='btn-group justify-content-center'>
                <Link scroll={false} href='/contact' className='btn mt-0'>
                  <span className='link-effect'>
                    <span className='effect-1'>Get In Touch Now</span>
                    <span className='effect-1'>Get In Touch Now</span>
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
