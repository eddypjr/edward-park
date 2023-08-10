import { useState, useRef, FormEvent } from 'react';
import './contact-form.scss';

interface ContactFormProps {
  setHasBeenSubmitted: (arg0: boolean) => void;
}

export default function ContactForm({ setHasBeenSubmitted }: ContactFormProps) {
  const emailRef = useRef<HTMLInputElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const [errors, setErrors] = useState();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const encode = (data: any) => {
    return Object.keys(data)
      .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
      .join('&');
  };

  const handleSubmit = (e: FormEvent) => {
    const controller = new AbortController();
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'Contact Form', ...e }),
      signal: controller.signal,
    })
      .then(() => setHasBeenSubmitted(true))
      .catch((err) => {
        setErrors(err.message);
      });

    return () => {
      controller.abort();
    };
  };

  return (
    <div className='contact-form'>
      <form
        name='Contact Form'
        onSubmit={handleSubmit}
        method='POST'
        data-netlify='true'
        data-netlify-honeypot='bot-field'
      >
        <div>
          <label htmlFor='email'>
            Email
            <input type='email' id='email' ref={emailRef} placeholder='Email' required />
          </label>
          {errors && <span className='error'>{errors}</span>}
        </div>
        <div>
          <label htmlFor='contact-me-textarea'>
            TextArea
            <textarea id='contact-me-textarea' ref={textareaRef} placeholder="Hey, how's it going?" required />
          </label>
          {errors && <span className='error'>{errors}</span>}
        </div>
        <div style={{ display: 'none' }}>
          <label htmlFor='bot'>
            Leave blank.
            <input type='text' name='bot-field' defaultValue='' />
          </label>
        </div>
        <button className='button-btn' type='submit' aria-label='Submit form'>
          Send &gt;
        </button>
      </form>
    </div>
  );
}
