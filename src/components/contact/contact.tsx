import { useState } from 'react';
// import mailPhoto from '../../assets/images/mail.png';
import ContactForm from './contact-form/contact-form';

import '../../styles/components/contact.scss';

export default function Contact() {
  const [hasSubmitted, setHasSubmitted] = useState<boolean>(false);

  return (
    <section className='contact' id='contact'>
      <div className='container'>
        <div className='content'>
          <div>
            {!hasSubmitted ? (
              <>
                <h3>Contact</h3>
                <h4>Let&apos;s connect.</h4>
                <p>
                  If you want to know about me or my work, or if you would just like to say hello, send me a message.
                  I&apos;d love to hear from you.
                </p>
                <ContactForm setHasSubmitted={setHasSubmitted} />
              </>
            ) : (
              <>
                <h4>Thanks for reaching out!</h4>
                <p>I&apos;ll get back to you soon. </p>
              </>
            )}
          </div>
          <div className='image-container' />
        </div>
      </div>
    </section>
  );
}
