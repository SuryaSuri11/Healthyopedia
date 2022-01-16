import React from 'react'
import { useState,useEffect } from 'react';
import './Dashboard.css'
function EditProfile(props) {
   const [editValues, seteditValues] = useState({
         username: "",
         age: "",
         phoneno: "" ,
         address:""
   });
   const [formErrors, setFormErrors] = useState({});
   const [isSubmit, setIsSubmit] = useState(false);
 
   const handleChange = (e) => {
     const { name, value } = e.target;
     seteditValues({ ...editValues, [name]: value });
   };
 
   const handleSubmit = (e) => {
     e.preventDefault();
     setFormErrors(validate(editValues));
     setIsSubmit(true)
    //  axios({
    //      method:'POST',
    //      url:"http://localhost:8000/api/user-create/",
    //      data:{
    //      username:formValues.username,
    //      Age:formValues.age,
    //      doctorid:location.state.doctorid,
    //      useremail:formValues.email,
    //      phoneno:formValues.phoneno,
    //      message:formValues.message
    //     }
    //  }).then(res =>{
    //      console.log(res.data)
    //  })
    //  setFormValues(({
    //  username:"",
    //  age:"",
    //  phoneno:"",
    //  address:"",
    //  }))
   };
   useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
        props.submitForm(true);
    }
  }, [formErrors]);
   const validate = (values) => {
     const errors = {};
     if (!values.username) {
       errors.username = "Username is required!";
     }
     if (!values.age) {
         errors.age = "Age is required!";
     }
     else if(isNaN(values.age)){
       errors.age="Age is invalid"
     }
     if (!values.phoneno) {
       errors.phoneno= "Phoneno is required";
     }
     else if(isNaN(values.phoneno)){
       errors.phoneno="Phoneno is invalid"
     }
     if (!values.address) {
      errors.address = "Address is required!";
    }
     return errors;
   };
      return(
<div className='overlay_styles1'>
    <div className='appoint-form'>
    <form onSubmit={handleSubmit} autoComplete='off'>
        <div className="ui form">
          <div className="field">
            <label className='appoint-label'>Username</label>
            <input
              type="text"
              name="username"
              value={editValues.username}
              onChange={handleChange}
              className='appoint-input'
              placeholder='Username'
            />
          </div>
          <p className='errors'>{formErrors.username}</p>
          <div className="field">
            <label  className='appoint-label'>Age</label>
            <input
              type="text"
              name="age"
              value={editValues.age}
              onChange={handleChange}
              className='appoint-input'
              placeholder='Age'
            />
          </div>
          <p className='errors'>{formErrors.age}</p>
          <div className="field">
            <label  className='appoint-label'>Phone-no</label>
            <input
              type="text"
              name="phoneno"
              value={editValues.phoneno}
              onChange={handleChange}
              className='appoint-input'
              placeholder='Phone-no'
            />
          </div>
          <p className='errors'>{formErrors.phoneno}</p>
          <div className="field">
          <p className='appoint-label'>Sex</p>
            <label className='gender'>
            <input
              type="radio"
              name="sex"
              onChange={handleChange}
              className='radio'
              checked="checked"
            />
              Male</label>
            <label className='gender'>
            <input
              type="radio"
              name="sex"
              onChange={handleChange}
              className='radio'
            />Female</label>
          </div>
          <p className='errors'>{formErrors.phoneno}</p>
          <div>
          <label  className='appoint-label-textarea'>Enter our Address</label>
            <textarea className='appoint-textarea' value={editValues.address}  onChange={handleChange}name="address" autoComplete='off'></textarea>
          </div>
          <p className='errors'>{formErrors.address}</p>
          <button className="appoint-submit">Submit</button>
        </div>
      </form>
    </div>
</div>
      );
}
export default EditProfile;
