import React from 'react'
import '../HomePage.css'
import { useHistory } from 'react-router';
function Homeabout() {
   const history =useHistory();
    return (
        <div className='abt-container'>
           <div className='abt-contents'>
               <div className='abt-left'>
                     <h1 className='welcome'>
                       WELCOME TO
                     </h1>
                     <h3 className='abt-name'>
                         HEALTHYOPEDIA
                     </h3>
                     <p className='abt-para'>
                     A freely 
                     accessible website that provides various health benefits to the users for 
                     the maintenance of their health.
                     </p>
                     <div className='about-us-button'>
                    <button className='view-all' onClick={()=> history.push('/aboutus')}>
                     Learn More
                     </button>
                </div>
               </div>
         <div className='abt-slider'>
           <div className='outerbox'>
            <div className='sliderimage'>
              <img
                src="https://media.istockphoto.com/photos/doctor-holding-digital-tablet-at-meeting-room-picture-id1189304032?k=20&m=1189304032&s=612x612&w=0&h=ovTNnR0JX2cRZkzMBed9exRO_PamZLlysLDFkXesr4Q="
                alt=""
              />
              <img
                src="https://img.freepik.com/free-photo/flat-lay-health-still-life-arrangement-with-copy-space_23-2148854064.jpg?size=626&ext=jpg"
                alt=""
              />
              <img
                src="https://thumbs.dreamstime.com/z/man-using-laptop-online-consultation-doctor-via-video-chat-table-man-using-laptop-online-consultation-doctor-148042436.jpg"
                alt=""
              />
              <img
                src="https://www.ishn.com/ext/resources/Generic/Responsive-default/HealthNews.jpg?1583412092"
                alt=""
              />
              <img
                src="https://www.conveyco.com/wp-content/uploads/2016/03/Pharma-and-Medical-2.jpg"
                alt=""
              />
            </div>
            </div>
               </div>
           </div> 
        </div>
    )
}

export default Homeabout
