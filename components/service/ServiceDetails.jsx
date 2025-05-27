'use client';

import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import { allFeatures } from '@/data/features';
import Image from 'next/image';
import Link from 'next/link';

export default function ServiceDetails({ serviceSlug }) {
  const service = allFeatures.filter((elm) => elm.slug === serviceSlug)[0];
  return (
    <div className='service-details-page-area space'>
      <div
        className='breadcumb-wrapper'
        style={{ backgroundImage: `url(${service?.headerImage})` }}
      >
        <div className='container'>
          <div className='breadcumb-content'>
            <h1 className='breadcumb-title'>{service?.title}</h1>
          </div>
        </div>
      </div>
      <div className='container'>
        <div className='row align-items-center justify-content-center'>
          <div className='col-xl-8 mt-30 mb-60'>
            <div dangerouslySetInnerHTML={{ __html: service.htmlContent }} />
          </div>
          <ResponsiveMasonry
            columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
            gutterBreakpoints={{ 350: '12px', 750: '16px', 900: '24px' }}
          >
            <Masonry>
              {service?.galleryImages &&
                service.galleryImages.map((elm, i) => (
                  <div key={i} className='col-xl-12'>
                    <div className='project-inner-thumb wow img-custom-anim-top animated'>
                      <Image
                        width={1296}
                        height={700}
                        className='w-100'
                        src={elm}
                        alt='img'
                      />
                    </div>
                  </div>
                ))}
            </Masonry>
          </ResponsiveMasonry>
        </div>
      </div>
    </div>
  );
}
