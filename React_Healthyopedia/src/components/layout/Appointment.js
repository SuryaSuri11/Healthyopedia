import React, { useState } from 'react';
import Appoint from "./AppointmentForm";
import AppointSucces from './AppointSucces';
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
          <Appoint  submitForm={submitForm}/>
        ) : (
          <AppointSucces/>
        )}
      </div>
    </>
  );
};

export default Form;