import './Doctors.css';
import {useState,useEffect} from "react"
import axios from 'axios';
import {useLocation} from 'react-router';
function Appoint(props){
   const location=useLocation();
   const initialValues = { username: "", age: "",email:"" ,phoneno: "" ,message:""};
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
     setIsSubmit(true)
     axios({
         method:'POST',
         url:"http://localhost:8000/api/user-create/",
         data:{
         username:formValues.username,
         Age:formValues.age,
         doctorid:location.state.doctorid,
         useremail:formValues.email,
         phoneno:formValues.phoneno,
         message:formValues.message
        }
     }).then(res =>{
         console.log(res.data)
     })
     setFormValues(({
     username:"",
     age:"",
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
     if (!values.username) {
       errors.username = "Username is required!";
     }
     if (!values.age) {
         errors.age = "Age is required!";
       }
     if (!values.email) {
       errors.email = "Email is required!";
     } else if (!regex.test(values.email)) {
       errors.email = "Email is Invalid!";
     }
     if (!values.phoneno) {
       errors.phoneno= "Phoneno is required";
     }
     else if(isNaN(values.phoneno)){
       errors.phoneno="Phoneno is invalid"
     }
     return errors;
   };
      return(
<div className='overlay_styles1'>
    <div className='appoint-form'>
    <form onSubmit={handleSubmit}>
        <div className="ui form">
          <div className="field">
            <label className='appoint-label'>Username</label>
            <input
              type="text"
              name="username"
              value={formValues.username}
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
              value={formValues.age}
              onChange={handleChange}
              className='appoint-input'
              placeholder='Age'
            />
          </div>
          <p className='errors'>{formErrors.age}</p>
          <div className="field">
            <label  className='appoint-label'>E-mail</label>
            <input
              type="text"
              name="email"
              value={formValues.email}
              onChange={handleChange}
              className='appoint-input'
              placeholder='Email'
            />
          </div>
          <p className='errors'>{formErrors.email}</p>
          <div className="field">
            <label  className='appoint-label'>Phone-no</label>
            <input
              type="text"
              name="phoneno"
              value={formValues.phoneno}
              onChange={handleChange}
              className='appoint-input'
              placeholder='Phone-no'
            />
          </div>
          <p className='errors'>{formErrors.phoneno}</p>
          <div>
          <label  className='appoint-label-textarea'>Write your message...</label>
            <textarea className='appoint-textarea' value={formValues.message}  onChange={handleChange}name="message"></textarea>
          </div>
          <button className="appoint-submit">Submit</button>
        </div>
      </form>
    </div>
</div>
      )
  }
export default Appoint;
  