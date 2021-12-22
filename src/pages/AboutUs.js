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
        <h1>About Page</h1>
    </div>
);
}
export default AboutUs;