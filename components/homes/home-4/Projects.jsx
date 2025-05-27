import { portfolioData } from '@/data/portfolio';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function Projects() {
  return (
    <div className='project-area-4 space overflow-hidden'>
      <div className='container'>
        <div className='row justify-content-center'>
          <div className='col-xl-7 col-lg-8'>
            <div className='title-area text-center'>
              <h2 className='sec-title'>Recent Projects</h2>
            </div>
          </div>
        </div>
        <div className='row gy-4 justify-content-center masonary-active'>
          {portfolioData.slice(0, 4).map((elm, i) => (
            <div key={i} className={elm.parentClass}>
              <Link
                scroll={false}
                href={`/project-details/${elm.slug}`}
                className='portfolio-wrap style3'
              >
                <div className='portfolio-thumb'>
                  <Image
                    width={746}
                    height={540}
                    src={elm.imageUrl}
                    alt='portfolio'
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
          ))}
        </div>
        <div className='btn-wrap mt-50 justify-content-center'>
          <Link scroll={false} href='/work' className='btn'>
            <span className='link-effect'>
              <span className='effect-1'>VIEW ALL PROJECTS</span>
              <span className='effect-1'>VIEW ALL PROJECTS</span>
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
