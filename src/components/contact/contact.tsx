import { useState } from 'react';
import ContactForm from './contact-form/contact-form';

import './contact.scss';

export default function Contact() {
  const [hasBeenSubmitted, setHasBeenSubmitted] = useState<boolean>(false);

  return (
    <section className='contact' id='contact'>
      <div className='contact-container'>
        <div className='contact-content'>
          <div>
            {!hasBeenSubmitted ? (
              <>
                <h2>Contact</h2>
                <h4>Let&apos;s connect.</h4>
                <p>
                  If you want to know about me or my work, or if you would just like to say hello, send me a message.
                  I&apos;d love to hear from you.
                </p>
                <ContactForm setHasBeenSubmitted={setHasBeenSubmitted} />
              </>
            ) : (
              <>
                <h4>Thanks for reaching out!</h4>
                <p>I&apos;ll get back to you soon. </p>
              </>
            )}
          </div>
          <div className='image-container' aria-label='mail and balloons' />
        </div>
      </div>
    </section>
  );
}
