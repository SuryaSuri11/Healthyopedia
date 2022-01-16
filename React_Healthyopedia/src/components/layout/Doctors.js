import './Doctors.css';
import { Link } from 'react-router-dom';
import {FaPlus,FaMinus} from 'react-icons/fa';
import {useLocation} from 'react-router';
import { useState } from 'react';
import { useHistory } from 'react-router';

function Doctor(){
  const history=useHistory();
  const location = useLocation();
  // console.log(location.state.doctors)
  console.log(location.state.onlineappoint)
  const[faq,setfaq]=useState(false);
  const[faq1,setfaq1]=useState(false);
  const[faq2,setfaq2]=useState(false);

  function Toogle(){
    if(faq==true){
      setfaq(false);
  }
  else{
    setfaq(true);
  }
}
  function Toogle1(){
    if(faq1==true){
      setfaq1(false);
  }
  else{
    setfaq1(true);
  }
  }
  function Toogle2(){
    if(faq2==true){
      setfaq2(false);
  }
  else{
    setfaq2(true);
  }
  }
return(
  <div className="doctor-container">
     <div className='doctor-div'>
    {location.state.doctors.map((doctor) => (
    <div className="doctor-card">
         <img src={"http://localhost:8000"+doctor.doctorimage} className='doctorimg'/>
         <div className='details'>
          <h4 className='doctorname'>{doctor.doctorname}</h4>
          <h6 className='coctor-category'>{doctor.category}</h6>
          <h6 className='fees'>₹ {doctor.fees}</h6>
          <h6>Doctor_id: {doctor.doctorid}</h6>
          <p className='edudetails'>{doctor.educationdetails}</p>
          <button className='appointmentbutton'>
          <div  onClick={()=>{
         history.push('/appoint',{doctorid:doctor.doctorid})
         }}className='appoint'>
            Book Appointment
          </div>
          </button>
         </div>
        </div>
    ))}  
    </div>
        <div className='faq-container'>
          <div className='faq-content'>
          <div className='questions'>
          <h2 className='faqquestions'>{location.state.onlineappoint.faqquestion1}</h2>
          <span onClick={Toogle}>{faq ?<FaMinus className='faminus' size="1.3rem"/>: <FaPlus className='faplus' size="1.3rem" />}</span>
          </div>
          {faq ?
          <div>
          <p className='faqanswers'>{location.state.onlineappoint.faqanswer1}</p>
          </div>: null
          }
          </div>
          <div className='faq-content'>
          <div className='questions'>
          <h2 className='faqquestions'>{location.state.onlineappoint.faqquestion2}</h2>
          <span onClick={Toogle1}>{faq1 ?<FaMinus className='faminus' size="1.3rem"/>: <FaPlus className='faplus' size="1.3rem" />}</span>
          </div>
          {faq1 ?
          <div>
          <p className='faqanswers'>{location.state.onlineappoint.faqanswer2}</p>
          </div>: null
          }
          </div>
          <div className='faq-content'>
          <div className='questions'>
          <h2 className='faqquestions'>{location.state.onlineappoint.faqquestion3}</h2>
          <span  onClick={Toogle2}>{faq2 ?<FaMinus className='faminus' size="1.3rem"/>: <FaPlus className='faplus' size="1.3rem" />}</span>
          </div>
          {faq2 ?
          <div>
          <p className='faqanswers'>{location.state.onlineappoint.faqanswer3}</p>
          </div>: null
          }
          </div>
</div>
</div>
)
}
export default Doctor;