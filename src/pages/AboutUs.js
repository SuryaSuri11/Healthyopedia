import React,{useEffect} from "react";
import "./AboutUs.css";
import Aos from "aos";
import "aos/dist/aos.css";

function AboutUs(){
    useEffect(()=>{
        Aos.init({duration:2000});
    },[]);
return(
    <div className='aboutcontainer'>
        <div className='aboutdescription'>
           <h1 className='abouttitle'>About Us</h1>
           <p className='abouttitlecontent'>
           Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever 
           since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only 
           five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
           </p>
        </div>
        <div className='imgcontainer'>
            <img className='aboutimage' src="https://www.healthnewsreview.org/wp-content/uploads/2018/06/GettyImages-691562544.jpg" alt=""/>
            <p data-aos="fade-up" className='imgtext'>
               Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text
            </p>
        </div>
    </div>
);
}
export default AboutUs;