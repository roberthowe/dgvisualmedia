'use client';
import addGsap from '@/utils/addGsap';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect } from 'react';
import Slider from 'react-slick';
import Typewriter from 'typewriter-effect';

export default function Hero() {
  useEffect(() => {
    addGsap();
  }, []);

  const sliderOptions = {
    fade: true,
    slidesToShow: 1,
    arrows: false,
    slidesToScroll: 1,
  };

  const sliderOptionsClient = {
    fade: true,
    slidesToShow: 1,
    arrows: false,
    slidesToScroll: 1,
    autoplay: true,
    cssEase: 'linear',
  };

  const clientLogos = [
    {
      imageUrl: '/assets/img/client/havas-lynx-logo.png',
    },
    {
      imageUrl: '/assets/img/client/ng-logo.png',
    },
    {
      imageUrl: '/assets/img/client/trilogy-logo.png',
    },
    {
      imageUrl: '/assets/img/client/chesire-basements-logo.png',
    },
    {
      imageUrl: '/assets/img/client/cargo-overseas-logo.png',
    },
    {
      imageUrl: '/assets/img/client/chesire-soilds-logo.png',
    },
    {
      imageUrl: '/assets/img/client/cummings-engineering-logo.png',
    },
    {
      imageUrl: '/assets/img/client/town-country-logo.png',
    },
  ];

  return (
    <div className='hero-wrapper hero-5' id='hero'>
      <Slider className='global-carousel' id='heroSlider5' {...sliderOptions}>
        <div>
          <div
            className='hero-slider background-image por'
            style={{
              backgroundImage: 'url(/assets/img/dg/DG_Hero.webp)',
            }}
          >
            <div
              className='hero-overlay'
              data-overlay='title'
              data-opacity='5'
            ></div>
            <div className='container'>
              <div className='row'>
                <div className='col-lg-7'>
                  <div className='hero-style5'>
                    <h1
                      className='hero-title'
                      data-ani='slideindown'
                      data-ani-delay='0.1s'
                    >
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
                    </h1>
                    <p
                      className='hero-text'
                      data-ani='slideindown'
                      data-ani-delay='0.2s'
                    >
                      DG Visual Media will assist in elevating your business to
                      assert your edge & set you apart from the competition.
                    </p>
                  </div>
                </div>
                <div className='col-lg-5 align-self-center position-relative'>
                  <div
                    className='text-center pb-5 pb-md-0'
                    data-ani='slideindown'
                    data-ani-delay='0.3s'
                  >
                    <Slider
                      {...sliderOptionsClient}
                      className='row client-carousel'
                    >
                      {clientLogos.map((elm, i) => (
                        <Image
                          key={i}
                          width={250}
                          height={250}
                          src={elm.imageUrl}
                          className='floating-image'
                        />
                      ))}
                    </Slider>
                    <Image
                      width={250}
                      height={250}
                      src='/assets/img/hero/dg-bee-mascot.png'
                      alt='img'
                      className='floating-image'
                    />
                    <div className='shadow'></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div
            className='hero-slider background-image por'
            style={{ backgroundImage: 'url(/assets/img/hero/hero-5-2.webp)' }}
          >
            <div
              className='hero-overlay'
              data-overlay='title'
              data-opacity='5'
            ></div>
            <div className='container'>
              <div className='row'>
                <div className='col-lg-7'>
                  <div className='hero-style5'>
                    <h1
                      className='hero-title'
                      data-ani='slideindown'
                      data-ani-delay='0.1s'
                    >
                      Modern Agency
                    </h1>
                    <p
                      className='hero-text'
                      data-ani='slideindown'
                      data-ani-delay='0.2s'
                    >
                      We are digital agency that helps immersive and engaging
                      user experiences that
                    </p>
                  </div>
                </div>
                <div className='col-lg-5 align-self-end text-lg-end'>
                  <div
                    className='text-lg-end'
                    data-ani='slideindown'
                    data-ani-delay='0.3s'
                  >
                    <Link
                      scroll={false}
                      className='circle-btn style2 btn bg-theme text-title gsap-magnetic'
                      href='/contact'
                    >
                      <span className='link-effect'>
                        <span className='effect-1'>
                          LET'S TALK <br /> WITH US
                        </span>
                        <span className='effect-1'>
                          LET'S TALK <br /> WITH US
                        </span>
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
}
