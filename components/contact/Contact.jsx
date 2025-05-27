'use client';

import { useState } from 'react';

export default function Contact() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

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
    <div className='contact-area-1 space bg-theme shape-mockup-wrap'>
      <div
        className='contact-map shape-mockup wow img-custom-anim-left animated'
        data-wow-duration='1.5s'
        data-wow-delay='0.2s'
        style={{ top: '-100px', left: 0, bottom: '140px' }}
      >
        <iframe
          src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2378.9370249024623!2d-2.3591518!3d53.3980664!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487a52aab012bf3b%3A0x8c1bf9cbe1b0a0e5!2sDG%20Visual%20Media%20-%20Design%20-%20Sign%20%26%20Display!5e0!3m2!1sen!2suk!4v1742945726340!5m2!1sen!2suk'
          allowFullScreen=''
          loading='lazy'
        ></iframe>
      </div>

      <div className='container'>
        <div className='row align-items-center justify-content-end'>
          <div className='col-lg-6'>
            <div className='contact-form-wrap'>
              <div className='title-area mb-30'>
                <h2 className='sec-title'>Want To Work Together?</h2>
                <p>
                  Great! We're excited to hear from you and let's start
                  something
                </p>
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
