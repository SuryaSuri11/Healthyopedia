import React,{useEffect} from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import "./AboutUs.css";
import * as FaIcons from 'react-icons/fa'
import Aboutcontent from "./Aboutcontent";
const aboutset=[[<FaIcons.FaThumbsUp size={30}/>,"Easy Set Up","Your team works from our","headquaters and is ready to go","within weeks."],
[<FaIcons.FaUserFriends size={30}/>,"Scaleable","Start nimble grow your team as","your company does."],
[<FaIcons.FaThumbsUp size={30}/>,"Easy Set Up","Your team works from our","headquaters and is ready to go","within weeks."],
[<FaIcons.FaUserFriends size={30}/>,"Scaleable","Start nimble grow your team as","your company does."],
]

function AboutUs(props){
    useEffect(()=> {
        Aos.init({duration:2000});
    },[]);
return(
    <div className='aboutcontainer'>
     <div className="text-div">
       <h1 className="top-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit</h1>
       <h1 className="top-text">sed do eiusmod tempor incididunt ut labore et dolore</h1>
       <h1 className="top-text">magna aliqua.</h1>
       </div>
       <div className="anim-img">
           <div className="img-container">
                  <img className="aboutimg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5tVVBowERx2Dqpljy3CA9Zj0xTiRbXTChrA&usqp=CAU" alt="images"/>
                  <img className="aboutimg" src="https://i.ytimg.com/vi/g424_Vsn-Zo/maxresdefault.jpg" alt="images"/>
                  <img className="aboutimg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSH2o9GX4dKBfLg_Ux1aRawIxaxr02bnAG_VQ&usqp=CAU" alt="images"/>
                  <img className="aboutimg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEH23fl4Ch8_-sHp1Gw-r9HQPacFkFb7IS-w&usqp=CAU" alt="images"/>
           </div>
       </div>
       <div className="bottom-container">
           <div className="bottom-text">
               <h2 data-aos="fade-up" className="bold-text">Lorem ipsum dolor sit amet. A dolorum quibusdam obcaecati neque ab cupiditate omnis et dolore fugiat.</h2>
               <p data-aos="fade-up" className="bold-bottom">Lorem ipsum dolor sit amet. A dolorum quibusdam obcaecati neque ab cupiditate omnis et dolore fugiat. Eos aliquam inventore ut aliquam sint et natus tempore eum perferendis rerum qui quam aperiam qui aliquam quis eum distinctio quia.</p>
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
             <p className="below-title">
             Lorem ipsum dolor sit amet, consectetur adipiscing elit
             </p>
             <p className="below-title">
             sed do eiusmod tempor incididunt ut labore et dolore
             </p>
             </div>
             </div>
      </div>
);
}
export default AboutUs;