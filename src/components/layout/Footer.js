import {FaFacebookF,FaInstagram} from "react-icons/fa";
import {Link} from "react-router-dom";
import './Footer.css';
function Footer(){
 return(
     <div className='container'>
        <p className='footertop'>
            Got a Project that you would like to discuss?
        </p>
        <div className="footermain">
          <div className='footer-headingcontents'>
          <div className="description">
        <h1 className='websitename'>Our Website Name</h1>
        </div>
            </div>
              <div className='footer-contents'>
                  <h3 className='footerheadings'>Solution</h3>
              <ul>
             <li className="footerlist"><Link className='footeritems' to="">Medical Website</Link></li>
              <li className="footerlist"><Link className='footeritems' TO="">Live Chat Software</Link></li>
              <li className="footerlist"><Link className='footeritems' to="">DIY Website</Link></li>
               <li className="footerlist"><Link className='footeritems' to="">Privacy Policy</Link></li>
               <li className="footerlist"><Link className='footeritems' to="">Support</Link></li>
              </ul>
              </div>
              <div className='footer-contents'>
                  <h3 className='footerheadings'>
                      Melbourne
                  </h3>
                <ul>
                <li className="footerlist"><Link className='footeritems' to="">Surya</Link></li>
                <li className="footerlist"><Link className='footeritems' to="">Tharun Kumar</Link></li>
                <li className="footerlist"><Link className='footeritems' to="">Blog</Link></li>
                <li className="footerlist"><Link className='footeritems' to="">Terms and Conditions</Link></li>
                <li className="footerlist"><Link className='footeritems' to="">Contact Us</Link></li>
                </ul>
              </div>
          <div className='footer-contents'>
              <h3 className='footerheadings'>
                  Services
              </h3>
              <ul>
                <li className="footerlist">  <Link to="" className="footeritems">Web Development</Link></li>
                  <li className="footerlist"><Link className='footeritems' to="">Website Design</Link></li>
                 <li className="footerlist"> <Link className='footeritems' to="">Ecommerce Website</Link></li>
                  <li className="footerlist"><Link className='footeritems' to="">Mobile App Development</Link></li>
                  <li className="footerlist"><Link className='footeritems' to="">WordPress Development</Link></li>
              </ul>
            </div>
              </div>
              <p className='copyright-downpart'>
             Copyright &copy;{new Date().getFullYear()} Our Websitename
             </p>
             <div className='socialmedia'>
          <Link to="/">
            <FaFacebookF className= 'fabandinstaicons'/>
          </Link>
          <Link to="/">
            <FaInstagram className= 'fabandinstaicons'/>
          </Link>
          </div>
     </div>
 )
}
export default Footer;