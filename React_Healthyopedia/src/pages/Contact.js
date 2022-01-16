import React, { useState } from 'react';
import ContactPage from './ContactForm';
import FormSuccess from './ContactSucess';

const Form = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <>
      <div className='form-container'>
        <div className='form-content-left'>
        </div>
        {!isSubmitted ? (
          <ContactPage submitForm={submitForm} />
        ) : (
          <FormSuccess/>
        )}
      </div>
    </>
  );
};

export default Form;