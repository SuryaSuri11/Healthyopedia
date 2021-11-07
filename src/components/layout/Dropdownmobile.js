import React,{useState} from "react";
import { Link } from "react-router-dom";
import './Dropdownmobile.css';
function Dropdownmobile(){
    const[dropdown,setDropdown]=useState(false);
return(
   <div>
      <ul className={dropdown ? "about-submenu active" : "about-submenu"} onClick={()=> setDropdown(!dropdown)}>
          <li>
              <Link to='/' className='dropdownlist' onClick={()=> setDropdown(false)}>
                 Aboutus Contents
              </Link>
          </li>
          <li>
              <Link to='/' className='dropdownlist'>
                 Aboutus Contents
              </Link>
          </li>
          <li>
              <Link to='/' className='dropdownlist'>
                 Aboutus Contents
              </Link>
          </li>
          <li>
              <Link to='/' className='dropdownlist'>
                 Aboutus Contents
              </Link>
          </li>
          <li>
              <Link to='/' className='dropdownlist'>
                 Aboutus Contents
              </Link>
          </li>
      </ul>
   </div>
);
}
export default Dropdownmobile;