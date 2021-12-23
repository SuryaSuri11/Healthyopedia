import React,{useState} from "react";
import { Link } from "react-router-dom";
import './Dropdown.css';
function Dropdown(){
    const[dropdown,setDropdown]=useState(false);
return(
   <div className='dropdownitems'>
      <ul className={dropdown ? "about-submenu active" :"about-submenu"} onClick={()=>setDropdown(!dropdown)}>
          <li>
              <Link to='/' className="dropdownlist" onClick={()=>setDropdown(!dropdown)}>
                 Aboutus Contents
              </Link>
          </li>
          <li>
              <Link to='/' className='dropdownlist' onClick={()=>setDropdown(!dropdown)}>
                 Aboutus Contents
              </Link>
          </li>
          <li>
              <Link to='/' className='dropdownlist' onClick={()=>setDropdown(!dropdown)}>
                 Aboutus Contents
              </Link>
          </li>
          <li>
              <Link to='/' className='dropdownlist' onClick={()=>setDropdown(!dropdown)}>
                 Aboutus Contents
              </Link>
          </li>
          <li>
              <Link to='/' className='dropdownlist' onClick={()=>setDropdown(!dropdown)}>
                 Aboutus Contents
              </Link>
          </li>
      </ul>
   </div>
);
}
export default Dropdown;