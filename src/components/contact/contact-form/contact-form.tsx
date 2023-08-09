/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
// import colorPalette from '../../../styles/global/colors.scss';
import { useState, useRef, FormEvent } from 'react';
// import '../../../styles/components/contact-form.scss';
import './contact-form.scss';

interface ContactFormProps {
  setHasSubmitted: (arg0: boolean) => void;
}

export default function ContactForm({ setHasSubmitted }: ContactFormProps) {
  const emailRef = useRef<HTMLInputElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const [errors, setErrors] = useState();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (emailRef.current && textareaRef.current && e.target) {
      console.log(emailRef.current.value);
      console.log(textareaRef.current.value);
      setHasSubmitted(true);
    }
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
            <input type='text' name='bot-field' value='' />
          </label>
        </div>
        <button className='button-btn' type='submit'>
          Send &gt;
        </button>
      </form>
    </div>
  );
}
