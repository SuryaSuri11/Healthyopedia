import {FaFacebookF,FaInstagram} from "react-icons/fa";
import {Link} from "react-router-dom";
import './Footer.css';
function Footer(){
 return(
     <div className='footercontainer'>
        <p className='footertop'>
            Got a Project that you would like to discuss?
        </p>
        <div className="footermain">
          <div className="col">
          <div className='footer-headingcontents'>
          <div className="description">
        <h1 className='websitename'>HEALTHYOPEDIA</h1>
        <p className="quote">Keep your vitality. A life without health is like a river without water.Maxime Lagacé</p>
        </div>
        </div>
            </div>
            <div className="col">
              <div className='footer-contents'>
                  <h3 className='footerheadings'>
                      Quick Links
                  </h3>
                <ul>
                <li className="footerlist"><Link to="/"className='footeritems'>Home</Link></li>
                <li className="footerlist"><Link to="./aboutus"className='footeritems'>About</Link></li>
                <li className="footerlist"><Link to="./blogpage"className='footeritems' >Blog</Link></li>
                <li className="footerlist"><Link to="./contactpage"className='footeritems' >Contact Us</Link></li>
                </ul>
              </div>
              </div>
        <div className="col">
          <div className='footer-contents'>
              <h3 className='footerheadings'>
                 Our Services
              </h3>
              <ul>
                <li className="footerlist">  <Link to="./shoppage" className="footeritems">Products</Link></li>
                  <li className="footerlist"><Link to="/"className='footeritems'>Online Consultation</Link></li>
                 <li className="footerlist"> <Link to="./blogpage"className='footeritems'>Health News</Link></li>
                  <li className="footerlist"><Link to="./health_list"className='footeritems'>Health Lists</Link></li>
              </ul>
            </div>
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