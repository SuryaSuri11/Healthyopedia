import './Cards.css';
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router';
import {useState,useEffect,useContext} from 'react';
import {appointContext} from "./Navbar.js";
import './Doctors.css';

function Cards(props,value){
  const history=useHistory();
  const [doctors,setdoctors]=useState([])
  const[appointopen,setappointopen]=useState(false);
  const setappointclose = () => setappointopen(!appointopen)


  useEffect(()=>{
    fetch("http://localhost:8000/api/doctordetails-category/"+props.title).then(
      response=>response.json()).then(
        data=>setdoctors(data) 
     )
   },[])
  return(
    <div>    
       <Link to='/doctor' className='underline' onClick={()=>{history.push('/doctor',{doctors:{name:'abc',age:19}})}}>
         <div className='cards' onClick={value}>
              <p className='onlinetitle'>{props.title}</p>
              <img src={props.img} alt='category' className="onlineimg"/>
              <p className='onlinedesc'>{props.desc}</p>
              <p className='diseases'>{props.ex}</p>
         </div>
         </Link>
         </div>
  );
}
export default Cards;