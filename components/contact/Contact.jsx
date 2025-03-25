'use client';

export default function Contact() {
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
              <form
                onSubmit={(e) => e.preventDefault()}
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
                        id='name'
                        placeholder='Full name*'
                      />
                    </div>
                  </div>
                  <div className='col-md-6'>
                    <div className='form-group'>
                      <input
                        required
                        type='text'
                        className='form-control style-border'
                        name='email'
                        id='email'
                        placeholder='Email address*'
                      />
                    </div>
                  </div>
                  <div className='col-lg-12'>
                    <div className='form-group'>
                      <input
                        required
                        type='text'
                        className='form-control style-border'
                        name='website'
                        id='website'
                        placeholder='Website link'
                      />
                    </div>
                  </div>
                  <div className='col-lg-12'>
                    <div className='form-group'>
                      <textarea
                        required
                        name='message'
                        placeholder='How Can We Help You*'
                        id='contactForm'
                        className='form-control style-border'
                      ></textarea>
                    </div>
                  </div>
                </div>
                <div className='form-btn col-12'>
                  <button type='submit' className='btn mt-20'>
                    <span className='link-effect'>
                      <span className='effect-1'>SEND MESSAGE</span>
                      <span className='effect-1'>SEND MESSAGE</span>
                    </span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
