import { socialMediaLinks } from '@/data/socials';
import React from 'react';
import Comments from './Comments';
import CommentReplay from './CommentReplay';
import BlogSerchbar from './BlogSerchbar';
import Categories from './Categories';
import RecentPosts from './RecentPosts';
import Tags from './Tags';
import Image from 'next/image';
import { allBlogs } from '@/data/blogs';

export default function BlogDetails({ blogSlug }) {
  const blogItem =
    allBlogs.filter((elm) => elm.slug == blogSlug)[0] || allBlogs[0];
  return (
    <section className='blog__details-area space'>
      <div className='container'>
        <div className='blog__inner-wrap'>
          <div className='row'>
            <div className='col-70'>
              <div className='blog__details-wrap'>
                <div className='blog__details-thumb'>
                  <Image
                    width={856}
                    height={600}
                    src={blogItem.image}
                    alt='img'
                  />
                </div>
                <div className='blog__details-content'>
                  <div className='blog-post-meta'>
                    <ul className='list-wrap'>
                      <li>{blogItem.date}</li>
                      <li>
                        <a href='#'>{blogItem.category}</a>
                      </li>
                      <li>
                        <a href='#'>by DG Visual</a>
                      </li>
                    </ul>
                  </div>
                  <h1 className='title'>{blogItem.title}</h1>
                  <div
                    dangerouslySetInnerHTML={{ __html: blogItem.htmlContent }}
                  />
                  {/* <div className='blog__details-bottom'>
                    <div className='row align-items-center'>
                      <div className='col-md-7'>
                        <div className='post-tags'>
                          <ul className='list-wrap'>
                            <li>
                              <a href='#'>Marketing</a>
                            </li>
                            <li>
                              <a href='#'>Brand</a>
                            </li>
                            <li>
                              <a href='#'>Contemporary</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className='col-md-5'>
                        <div className='post-share'>
                          <h5 className='title'>Share:</h5>
                          <div className='social-btn style3 justify-content-md-end'>
                            {socialMediaLinks.slice(0, 3).map((elm, i) => (
                              <a key={i} href={elm.href}>
                                <span className='link-effect'>
                                  <span className='effect-1'>
                                    <i className={elm.iconClass}></i>
                                  </span>
                                  <span className='effect-1'>
                                    <i className={elm.iconClass}></i>
                                  </span>
                                </span>
                              </a>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div> */}
                  {/* TODO add next previous navigation */}
                  {/* <div className='inner__page-nav mt-20 mb-n1'>
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
                  </div> */}
                </div>
                <div className='blog__avatar-wrap'>
                  <div className='blog__avatar-img'>
                    <a href='#'>
                      <Image
                        width={196}
                        height={180}
                        src='/assets/img/dg-logo.png'
                        alt='img'
                      />
                    </a>
                  </div>
                  <div className='blog__avatar-info'>
                    <h4 className='name'>
                      <a href='#'>Post By DG Visual</a>
                    </h4>
                    <p>
                      Manchester Based Branding & Signage Company also covering
                      Stockport, Cheadle, Wilmslow, Altrincham, Cheshire and
                      surrounding areas. We specialise in Shop Front Signage,
                      Sales Displays, Vehicle Graphics, Vehicle Wrapping,
                      Website Design, Logo Design & more.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-30'>
              <aside className='blog__sidebar'>
                {/* <Categories /> */}
                <RecentPosts />
                {/* <Tags /> */}
              </aside>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
