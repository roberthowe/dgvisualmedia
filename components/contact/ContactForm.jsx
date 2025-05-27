'use client';

import Image from 'next/image';
import { useState, useMemo } from 'react';

export default function ContactForm() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  const images = [
    '/assets/img/dg/dg-workshop-1.webp',
    '/assets/img/dg/dg-workshop-2.webp',
    '/assets/img/dg/dg-workshop-3.webp',
  ];

  // Select a random image once per component load
  const randomImage = useMemo(() => {
    const index = Math.floor(Math.random() * images.length);
    return images[index];
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    const form = e.target;
    const formData = new FormData(form);

    try {
      const response = await fetch('https://usebasin.com/f/7df42150367c', {
        method: 'POST',
        body: formData,
        headers: {
          Accept: 'application/json',
        },
      });

      if (response.ok) {
        setFormSubmitted(true);
        form.reset();
      } else {
        setError('Something went wrong. Please try again.');
      }
    } catch (err) {
      console.error(err);
      setError('An error occurred. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

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
        {/* // TODO make this random could be 1 of 3 or 4 images */}
        <Image width={838} height={788} src={randomImage} alt='img' />
      </div>
      <div className='container'>
        <div className='row align-items-center justify-content-end'>
          <div className='col-lg-6'>
            <div className='contact-form-wrap'>
              <div className='title-area mb-30'>
                <h2 className='sec-title'>Want To Work Together?</h2>
                <p>Great, We're excited to hear from you!</p>
              </div>

              {formSubmitted ? (
                <div className='alert alert-success'>
                  Thanks for your message! We'll be in touch soon.
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className='contact-form ajax-contact'
                >
                  <div className='row'>
                    <div className='col-md-6'>
                      <div className='form-group'>
                        <input
                          required
                          type='text'
                          className='form-control style-border'
                          name='name'
                          placeholder='Full name*'
                        />
                      </div>
                    </div>
                    <div className='col-md-6'>
                      <div className='form-group'>
                        <input
                          required
                          type='email'
                          className='form-control style-border'
                          name='email'
                          placeholder='Email address*'
                        />
                      </div>
                    </div>
                    <div className='col-lg-12'>
                      <div className='form-group'>
                        <select
                          name='service'
                          className='form-control style-border'
                          required
                          defaultValue=''
                        >
                          <option value='' disabled>
                            Service of interest
                          </option>
                          <option value='Branding'>Branding</option>
                          <option value='Sign & Display'>Sign & Display</option>
                          <option value='Vehicle Graphic Wraps & Decals'>
                            Vehicle Graphic Wraps & Decals
                          </option>
                          <option value='Wall Art'>Wall Art</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  {error && <div className='alert alert-danger'>{error}</div>}

                  <div className='form-btn col-12'>
                    <button
                      type='submit'
                      className='btn mt-20'
                      disabled={isSubmitting}
                    >
                      <span className='link-effect'>
                        <span className='effect-1'>
                          {isSubmitting ? 'Sending...' : 'SEND MESSAGE'}
                        </span>
                        <span className='effect-1'>
                          {isSubmitting ? 'Sending...' : 'SEND MESSAGE'}
                        </span>
                      </span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
