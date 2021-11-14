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
                 <img  className='dropdownimages' src="https://d1ngtpnzesgfi7.cloudfront.net/app/uploads/2019/03/4-Copper-Bath-EDIT-360x420.jpg"alt=""/>
              </Link>
          </li>
          <li>
              <Link to='/' className='dropdownlist' onClick={()=>setDropdown(!dropdown)}>
                 Aboutus Contents
                 <a>
                 <img  className='dropdownimages' src="https://d1ngtpnzesgfi7.cloudfront.net/app/uploads/2019/03/4-Copper-Bath-EDIT-360x420.jpg"alt=""/>
                 </a>
              </Link>
          </li>
          <li>
              <Link to='/' className='dropdownlist' onClick={()=>setDropdown(!dropdown)}>
                 Aboutus Contents
                 <img  className='dropdownimages' src="https://d1ngtpnzesgfi7.cloudfront.net/app/uploads/2019/03/4-Copper-Bath-EDIT-360x420.jpg"alt=""/>
              </Link>
          </li>
          <li>
              <Link to='/' className='dropdownlist' onClick={()=>setDropdown(!dropdown)}>
                 Aboutus Contents
                 <img  className='dropdownimages' src="https://d1ngtpnzesgfi7.cloudfront.net/app/uploads/2019/03/4-Copper-Bath-EDIT-360x420.jpg"alt=""/>
              </Link>
          </li>
          <li>
              <Link to='/' className='dropdownlist' onClick={()=>setDropdown(!dropdown)}>
                 Aboutus Contents
                  <img  className='dropdownimages' src="https://d1ngtpnzesgfi7.cloudfront.net/app/uploads/2019/03/4-Copper-Bath-EDIT-360x420.jpg"alt=""/>
              </Link>
          </li>
      </ul>
   </div>
);
}
export default Dropdown;