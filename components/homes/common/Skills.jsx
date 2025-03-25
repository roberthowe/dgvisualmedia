import Image from 'next/image';
import React from 'react';
import Link from 'next/link';

export default function Skills() {
  return (
    <div className='service-area-1 space bg-theme shape-mockup-wrap'>
      <div
        className='service-img-1-1 shape-mockup wow img-custom-anim-left animated'
        data-wow-duration='1.5s'
        data-wow-delay='0.2s'
        style={{ top: '-100px', left: '0px', bottom: '140px' }}
        data-left='0'
        data-top='-100px'
        data-bottom='140px'
      >
        <Image
          width={838}
          height={788}
          src='/assets/img/normal/service_2-1.jpg'
          alt='img'
        />
      </div>
      <div className='container'>
        <div className='row align-items-center justify-content-end'>
          <div className='col-lg-6'>
            <div className='about-content-wrap'>
              <div className='title-area mb-0'>
                <h2 className='sec-title'>Our Values</h2>
                <p className='sec-text mt-35 mb-40'>
                  Are we the right git for you?
                </p>
                <p className='sec-text mt-35 mb-40'>
                  We believe Potential is realised through pushing boundaries.
                </p>
                <p className='sec-text mt-35 mb-40'>
                  We seek to work with clients who share the belief that
                  realising true potential is to push boundaries & break away
                  from the status quo.
                </p>
                <div className='btn-wrap mt-50 justify-content-left'>
                  <Link scroll={false} href='/project' className='btn'>
                    <span className='link-effect'>
                      <span className='effect-1'>Find Out More</span>
                      <span className='effect-1'>Find Out More</span>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
