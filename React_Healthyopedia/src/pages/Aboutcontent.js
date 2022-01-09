import React,{useEffect} from "react";
import './Aboutcontent.css';
import Aos from "aos";
import "aos/dist/aos.css";
function Aboutcontent(props){
    useEffect(()=> {
        Aos.init({duration:2000});
    },[]);
   return(
       <div className="about-card">
             <div data-aos="fade-up" className='aboutcard-container'>
              <p className='about-icon'>{props.icon}</p>
              <h3  className='about-title'>{props.title}</h3>
              <p  className='about-description'>{props.desc}</p>
              <p  className='about-description'>{props.desc2}</p>
              <p  className='about-description'>{props.desc3}</p>
             </div>
       </div>
   );
}
export default Aboutcontent;