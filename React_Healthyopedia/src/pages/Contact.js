import './ContactPage.css';
import * as FaIcons from 'react-icons/fa'
function ContactPage(){
    return(
       <div className='contact-container'>
          <div className='contact-div'>
              <div className='contact-contents'>
             <h2 className='contact-title'>Contact Us</h2>
             <div className='wrapper'>
                  <div className='contact-box'>
                  <div className='contactus-text'>
                         <h3 className='details'>
                         <FaIcons.FaAddressBook className='address'/>
                         Address
                         </h3>
                         <p className='info'>New Horizon College Of Engineering, Marathalli</p>
                  </div>
              </div>
              <div className='contact-box'>
                  <div className='contactus-text'>
                         <h3 className='details'>
                            <FaIcons.FaPhone className='phone'/>
                            Phone no.
                         </h3>
                         <p className='info'>123456789</p>
                  </div>
              </div>
              <div className='contact-box'>
                  <div className='contactus-text'>
                         <h3 className='details'>
                            <FaIcons.FaEnvelopeSquare/>
                            E-mail
                         </h3>
                         <p className='info'>Newhorizon@gmail.com</p>
                  </div>                  
              </div>
              </div>
              </div>
              <div className='contact-form'>
              <div className='contact-user'>
                <div className='contact-details'>
                    <div className='contact-inputbox'>
                        <input type="text" name="" required='required'/>
                        <span className='contact-text'>First Name</span>
                        <span className='contact-line'></span>
                    </div>
                    </div>
                </div>
                <div className='contact-user'>
                <div className='contact-details'>
                    <div className='contact-inputbox'>
                        <input type="text" name="" required='required'/>
                        <span className='contact-text'>Last Name</span>
                        <span className='contact-line'></span>
                    </div>
                    </div>
                </div>
                <div className='contact-user'>
                <div className='contact-details'>
                    <div className='contact-inputbox'>
                        <input type="text" name="" required='required'/>
                        <span className='contact-text'>E-mail</span>
                        <span className='contact-line'></span>
                    </div>
                    </div>
                </div>
                <div className='contact-user'>
                <div className='contact-details'>
                    <div className='contact-inputbox'>
                        <input type="text" name="" required='required'/>
                        <span className='contact-text'>Phone no.</span>
                        <span className='contact-line'></span>
                    </div>
                    </div>
                </div>
                <div className='contact-user'>
                <div className='contact-details'>
                   <div className='textarea-inputbox'>
                   <textarea className='textarea-box'></textarea>
                   <span className='contact-text'>Type your message here</span>
                   <span className='contact-line'></span>
                   </div>
                   </div>
                </div>
                <div>
                    <input type='submit' value='Send' className='contact-submit'/>
                </div>
              </div>
          </div>
      </div>
    );
    }
    export default ContactPage;