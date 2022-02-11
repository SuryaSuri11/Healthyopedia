import React,{useEffect} from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import "./AboutUs.css";
import * as FaIcons from 'react-icons/fa'
import Aboutcontent from "./Aboutcontent";
const aboutset=[[<FaIcons.FaCapsules size="4rem"/>,"Product Sales","Generic Medicine"],
[<FaIcons.FaCalendar size="4rem"/>,"Online Consultation","Booking Appointments"],
[<FaIcons.FaClinicMedical size="4rem"/>,"Health Centres","Get Nearest Hospital and Diagnostic centres list"],
[<FaIcons.FaNewspaper size="4rem"/>,"Blog News","Get Latest News Related to Health"],
]

function AboutUs(props){
    useEffect(()=> {
        Aos.init({duration:2000});
    },[]);
return(
    <div className='aboutcontainer'>
     <div className="text-div">
       <h1 className="top-text">DO NOT LET ILLNESS</h1>
       <h1 className="top-text">MAKE YOU REALIZE</h1>
       <h1 className="top-text">THE VALUE OF HEALTH</h1>
       </div>
       <div className="anim-img">
                  <img className="aboutimg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5tVVBowERx2Dqpljy3CA9Zj0xTiRbXTChrA&usqp=CAU" alt="images"/>
                  <img className="aboutimg" src="https://i.ytimg.com/vi/g424_Vsn-Zo/maxresdefault.jpg" alt="images"/>
                  <img className="aboutimg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSH2o9GX4dKBfLg_Ux1aRawIxaxr02bnAG_VQ&usqp=CAU" alt="images"/>
                  <img className="aboutimg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEH23fl4Ch8_-sHp1Gw-r9HQPacFkFb7IS-w&usqp=CAU" alt="images"/>
       </div>
       <div className="bottom-container">
           <div className="bottom-text">
               <h2 data-aos="fade-up" className="bold-text">
                   A freely accessible website which provides various health benefits to the users for the maintenance of their health.
               </h2>
               <p data-aos="fade-up" className="bold-bottom">The various health benefits which is  provided in the webites:.</p>
           </div>
       </div>
       <div className="our-contents">
           {aboutset.map((about)=>{
          return <Aboutcontent icon={about[0]} title={about[1]} desc={about[2]} desc2={about[3]} desc3={about[4]}/>
        })}
       </div>
       <div className="gradient-content">
             <h1 className="gradient-text">
                 Our Website Values 
             </h1>
             <div className="below-texts"> 
        <ul className="values">
           <li className="below-title">
                Provides Consultation based on Category
            </li> 
             <li className="below-title">
                 Generic Medicine Sales
             </li>
             <li className="below-title">
                  Latest Health News
             </li>
             <li className="below-title">
                  Provides Free Consultation
             </li>
             <li className="below-title">
                  User Health Repository to store Reports
             </li>
             <li className="below-title">
                  List of Hospital, Wellness and Diagnostic centres
             </li>
             </ul>
             </div>
             </div>
      </div>
);
}
export default AboutUs;