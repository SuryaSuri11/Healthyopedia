import {useState,useEffect} from 'react';
import './Doctors.css';
import { Link } from 'react-router-dom';

import {useLocation} from 'react-router';

function Doctor(){
  const location = useLocation();

  // console.log(location.state.doctors)

return(
  <div className="doctor-container">
    {location.state.doctors.map((doctor) => (
    <div className="doctor-card">
         <img src={"http://localhost:8000"+doctor.doctorimage} className='doctorimg'/>
         <div className='details'>
          <h4 className='doctorname'>{doctor.doctorname}</h4>
          <h6 className='coctor-category'>{doctor.category}</h6>
          <h6 className='fees'>{doctor.fees}</h6>
          <p className='edudetails'>{doctor.educationdetails}</p>
          <button className='appointmentbutton'>
          <Link  to='./appoint' className='appoint'>
            Book Appointment
          </Link>
          </button>
         </div>
    </div>
    ))}  
</div>
)
}
export default Doctor;