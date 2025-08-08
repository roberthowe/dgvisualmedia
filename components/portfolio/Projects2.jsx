import { portfolioData } from '@/data/portfolio';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function Projects2() {
  return (
    <div className='portfolio-area-1 space overflow-hidden'>
      <div className='container'>
        <div className='row gy-4 justify-content-start masonary-active d-flex align-items-stretch'>
          {portfolioData.slice(0, 6).map((elm, i) => (
            <div key={i} className={elm.parentClass}>
              <div className='portfolio-card h-100'>
                <Link
                  scroll={false}
                  href={`/project-details/${elm.slug}`}
                  className='portfolio-wrap style3 h-100 w-100'
                >
                  <div className='portfolio-thumb h-100 w-100'>
                    <Image
                      width={746}
                      height={540}
                      src={elm.imageUrl}
                      alt='portfolio'
                      className='img-fluid h-100 w-100 object-fit-cover'
                    />
                  </div>
                  <div className='portfolio-details'>
                    <ul className='portfolio-meta'>
                      <li>{elm.category}</li>
                    </ul>
                    <h3 className='portfolio-title'>{elm.title}</h3>
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* TODO if lazy loading needed for future  */}
        {/* <div className='btn-wrap justify-content-center mt-60'>
          <Link scroll={false} className='btn' href={`/project`}>
            <span className='link-effect'>
              <span className='effect-1'>LOAD MORE</span>
              <span className='effect-1'>LOAD MORE</span>
            </span>
          </Link>
        </div> */}
      </div>
    </div>
  );
}
