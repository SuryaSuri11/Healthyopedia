import './ContactPage.css';
import * as FaIcons from 'react-icons/fa'
import {useState,useEffect} from "react"
import axios from 'axios';
import { useHistory } from 'react-router';
function ContactPage(props){
  const initialValues = { firstname: "", lastname: "",email:"" ,phoneno: "" ,message:""};
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
    axios({
        method:'POST',
        url:"http://localhost:8000/api/contact-create/",
        data:{
        firstname:formValues.firstname,
        lastname:formValues.lastname,
        email_id:formValues.email,
        phone_no:formValues.phoneno,
        message:formValues.message
       }
    }).then(res =>{
        console.log(res.data)
    })
    setFormValues(({
    firstname:"",
    lastname:"",
    email:"",
    phoneno:"",
    message:"",
    }))
  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
        props.submitForm(true);
    }
  }, [formErrors]);
  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.firstname) {
      errors.firstname = "Fistname is required!";
    }
    if (!values.lastname) {
        errors.lastname = "Lastname is required!";
      }
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "Email is Invalid!";
    }
    if (!values.phoneno) {
      errors.phoneno= "Phoneno is required";
    }
    else if(isNaN(values.phoneno) && values.phoneno.length<10 && values.length>10){
      errors.phoneno="Phoneno is invalid"
    }
    return errors;
  };
    return(
       <div className='contact-container'>
          <div className='contact-div'>
              <div className='contact-contents'>
             <h2 className='contact-title'>Contact Us</h2>
             <div className='wrapper'>
                  <div className='contact-box'>
                  <div className='contactus-text'>
                         <h3 className='details'>
                         <FaIcons.FaAddressBook className='address'/>
                         Address
                         </h3>
                         <p className='info'>New Horizon College Of Engineering, Marathalli</p>
                  </div>
              </div>
              <div className='contact-box'>
                  <div className='contactus-text'>
                         <h3 className='details'>
                            <FaIcons.FaPhone className='phone'/>
                            Phone no.
                         </h3>
                         <p className='info'>123456789</p>
                  </div>
              </div>
              <div className='contact-box'>
                  <div className='contactus-text'>
                         <h3 className='details'>
                            <FaIcons.FaEnvelopeSquare/>
                            E-mail
                         </h3>
                         <p className='info'>Newhorizon@gmail.com</p>
                  </div>                  
              </div>
              </div>
              </div>
              <div className="contact-form">
              <form onSubmit={handleSubmit}>
        <div className="ui form">
          <div className="field">
            <label className='label'>Firstname</label>
            <input
              type="text"
              name="firstname"
              value={formValues.firstname}
              onChange={handleChange}
              className='contact-input'
              placeholder='Firstname'
            />
          </div>
          <p className='errors'>{formErrors.firstname}</p>
          <div className="field">
            <label  className='label'>Lastname</label>
            <input
              type="text"
              name="lastname"
              value={formValues.lastname}
              onChange={handleChange}
              className='contact-input'
              placeholder='Lastname'
            />
          </div>
          <p className='errors'>{formErrors.lastname}</p>
          <div className="field">
            <label  className='label'>E-mail</label>
            <input
              type="text"
              name="email"
              value={formValues.email}
              onChange={handleChange}
              className='contact-input'
              placeholder='Email'
            />
          </div>
          <p className='errors'>{formErrors.email}</p>
          <div className="field">
            <label  className='label'>Phone-no</label>
            <input
              type="text"
              name="phoneno"
              value={formValues.phoneno}
              onChange={handleChange}
              className='contact-input'
              placeholder='Phone-no'
            />
          </div>
          <p className='errors'>{formErrors.phoneno}</p>
          <div>
          <label  className='label-textarea'>Write your message...</label>
            <textarea className='textarea' value={formValues.message}  onChange={handleChange}name="message"></textarea>
          </div>
          <button className="contact-submit">Submit</button>
        </div>
      </form>
          </div>
      </div>
      </div>
    );
    }
    export default ContactPage;