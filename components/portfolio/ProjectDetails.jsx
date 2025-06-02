'use client';
import { allPortfolio } from '@/data/portfolio';
import Video from '@/components/homes/home-dg/Video';
import Image from 'next/image';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
export default function ProjectDetails({ portfolioItem }) {
  return (
    <div className='project-details-page-area space pt-0'>
      <div
        className='breadcumb-wrapper'
        style={{ backgroundImage: `url(${portfolioItem?.imageUrl})` }}
      >
        <div className='container'>
          <div className='breadcumb-content'>
            <h1 className='breadcumb-title'>{portfolioItem?.title}</h1>
          </div>
        </div>
      </div>
      <div className='container'>
        <div className='row justify-content-between flex-row-reverse'>
          <div className='col-xl-3 col-lg-4'>
            <div className='project-details-info mt-5 mb-40'>
              <ul className='list-wrap'>
                <li>
                  <span>Category:</span>
                  {portfolioItem.category}
                </li>
                <li>
                  <span>Service:</span>
                  {portfolioItem.service}
                </li>
                <li>
                  <span>Client:</span>
                  {portfolioItem.title}
                </li>
                {portfolioItem.date && (
                  <li>
                    <span>Date:</span>
                    {portfolioItem.date}
                  </li>
                )}
              </ul>
            </div>
          </div>
          <div className='col-lg-8 mt-5 mb-40'>
            {/* <h1 class='mt-35'>{portfolioItem.title}</h1> */}
            <div
              dangerouslySetInnerHTML={{ __html: portfolioItem.htmlContent }}
            />
          </div>
          {portfolioItem.portfolioVideo && (
            <div className='col-xl-12 mt-5 mb-40'>
              {/* <h2 class='sec-title mt-30'>Video</h2> */}
              <Video
                videoUrl={portfolioItem.portfolioVideo}
                imageUrl={portfolioItem.portfolioVideoImage}
              />
            </div>
          )}

          {/* Full Width Images */}
          {portfolioItem?.portfolioImagesFullWidth &&
            portfolioItem.portfolioImagesFullWidth.map((elm, i) => (
              <div key={i} className='col-xl-12 mb-20'>
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

          <ResponsiveMasonry
            columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
            gutterBreakpoints={{ 350: '12px', 750: '16px', 900: '24px' }}
          >
            <Masonry>
              {portfolioItem?.portfolioImages &&
                portfolioItem.portfolioImages.map((elm, i) => (
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
          {/* TODO ADD next and previoushide previous if ID = 1 hide next if ID is last item */}
          {/* <div className='col-lg-12'>
            <div className='inner__page-nav space-top mt-n1 mb-n1'>
              <a href='#' className='nav-btn'>
                <i className='fa fa-arrow-left'></i>
                <span>
                  <span className='link-effect'>
                    <span className='effect-1'>Previous Post</span>
                    <span className='effect-1'>Previous Post</span>
                  </span>
                </span>
              </a>
              <a href='#' className='nav-btn'>
                <span>
                  <span className='link-effect'>
                    <span className='effect-1'>Next Post</span>
                    <span className='effect-1'>Next Post</span>
                  </span>
                </span>
                <i className='fa fa-arrow-right'></i>
              </a>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}
