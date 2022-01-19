import './Cards.css';
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router';
import {useState,useEffect} from 'react';
import './Doctors.css';
function Cards(props){
  const history=useHistory();
  const [doctors,setdoctors]=useState([])

  // var filterDoctor=async()=>{
  // }
  // var doct=async()=>{
  //   const status=await filterDoctor();
  //   return status
  // }

  useEffect(()=>{
    fetch("http://localhost:8000/api/doctordetails-category/"+props.title
    ).then(
      response=>response.json()).then(
        data=>setdoctors(data) 
     )
   },[])
  return(
    <div>    
       <div className='underline' onClick={()=>{
         props.showSideBar()
        //  history.push('/doctor',{doctors:doctors,onlineappoint:props.onlineappoint})
         history.push('/doctor',{doctors:doctors})
         }}>
         <div className='cards'>
              <p className='onlinetitle'>{props.title}</p>
              <img src={props.img} alt='category' className="onlineimg"/>
              <p className='onlinedesc'>{props.desc}</p>
              <p className='diseases'>{props.ex}</p>
         </div>
         </div>
         </div>
  );
}
export default Cards;