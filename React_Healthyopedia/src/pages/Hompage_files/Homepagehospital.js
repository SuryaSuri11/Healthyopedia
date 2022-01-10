import '../HomePage.css'
import { useHistory } from 'react-router';
import { useEffect } from 'react';
import Aos from "aos";
import "aos/dist/aos.css";


function Homepagehospital(){

    useEffect(()=> {
        Aos.init({duration:2000});
    },[]);
    const history=useHistory();
    return (
        <div className='entire-content'>
            <h1 className='cat-title'>LIST OF HEALTH CENTRES</h1>
            <div className='hos-container'>
                <div data-aos="fade-up" className='hos-cards'>
                    <img data-aos="fade-up"  src="https://thumbs.dreamstime.com/b/hospital-building-modern-parking-lot-59693686.jpg" className='hos-img'/>
                    <h4 data-aos="fade-up" className="hos-title">Hospital</h4>
                    <p data-aos="fade-up"  className='hos-desc'>Get Nearest Hospitals all over India</p>
                </div>
                <div data-aos="fade-up" className='hos-cards'>
                    <img data-aos="fade-up"  src="https://www.wphf.org/wp-content/uploads/2018/01/CHWB-Crosby-Interior-logo-1080p-1030x579.jpg"className='hos-img'/>
                    <h4 data-aos="fade-up"  className="hos-title">Wellness Center</h4>
                    <p data-aos="fade-up"  className='hos-desc'>Get Nearest Wellness Centers all over India</p>
                </div>
                <div data-aos="fade-up" className='hos-cards'>
                    <img data-aos="fade-up"  src="https://www.3hcare.in/Content/Images/uploaded/blog/Consider-Before-Choosing-A-Good-Diagnostic-Center.jpg" className='hos-img'/>
                    <h4 data-aos="fade-up"  className="hos-title">Diagnostic Center</h4>
                    <p data-aos="fade-up" className='hos-desc'>Get Nearest Diagnostic Centers all over India</p>
            </div>
            </div>
            <button className='health-list-button' onClick={()=>
                    history.push('/health_list')
                    }>
                        View all data...
                </button>
        </div>
    )
}

export default Homepagehospital
