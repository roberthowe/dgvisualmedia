'use client';
import Socials from './component/Socials';
import Image from 'next/image';
import FooterLinks from './component/FooterLinks';

export default function Footer() {
  return (
    <footer className='footer-wrapper footer-layout2 bg-white overflow-hidden'>
      <div className='container'>
        <div className='widget-area space-top'>
          <div className='row justify-content-between'>
            <div className='col-md-6'>
              <div className='widget widget_nav_menu footer-widget'>
                <h3 className='widget_title'>DG Visual Media</h3>
                <div className='menu-all-pages-container list-column2'>
                  <ul className='menu'>
                    <FooterLinks />
                  </ul>
                </div>
              </div>
            </div>
            <div className='col-md-6'>
              <div className='widget footer-widget widget-contact'>
                <h3 className='widget_title'>Contact</h3>
                <ul className='contact-info-list'>
                  <li>
                    <a href='tel:07722508634'>07722508634</a>
                    <br />
                    <a href='mailto:info@dgvisualmedia.com'>
                      info@dgvisualmedia.com
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='container'>
        <div className='copyright-wrap'>
          <div className='row gy-3 justify-content-between align-items-center'>
            <div className='col-md-6'>
              <p className='copyright-text'>
                Copyright © {new Date().getFullYear()}{' '}
                <a href='https://themeforest.net/user/DG Visual Media/portfolio'>
                  DG Visual Media
                </a>
              </p>
            </div>
            <div className='col-md-6 align-self-center'>
              <div className='social-btn style3 justify-content-md-end'>
                <Socials />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
