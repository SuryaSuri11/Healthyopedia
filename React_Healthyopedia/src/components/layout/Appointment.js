import './Doctors.css';
function Appoint(){
      return(
        <div className='overlay_styles1'>
          <div className='appoint-card'>
              <form className='appoint-form'>
                    <div className='appoint-user'>
                      <div className='appoint-details'>
                          <div className='appoint-inputbox'>
                              <input type="text" name="" required='required'/>
                              <span className='appoint-text'>Name</span>
                              <span className='appoint-line'></span>
                          </div>
                          </div>
                      </div>
                      <div className='appoint-user'>
                      <div className='appoint-details'>
                          <div className='appoint-inputbox'>
                              <input type="text" name="" required='required'/>
                              <span className='appoint-text'>Age</span>
                              <span className='appoint-line'></span>
                          </div>
                          </div>
                      </div>
                      <div className='appoint-user'>
                      <div className='appoint-details'>
                          <div className='appoint-inputbox'>
                              <input type="email" name="" required='required'/>
                              <span className='appoint-text'>E-mail</span>
                              <span className='appoint-line'></span>
                          </div>
                          </div>
                      </div>
                      <div className='appoint-user'>
                      <div className='appoint-details'>
                          <div className='appoint-inputbox'>
                              <input type="text" name="" required='required'/>
                              <span className='appoint-text'>Phone no.</span>
                              <span className='appoint-line'></span>
                          </div>
                          </div>
                      </div>
                      <div className='appoint-user'>
                      <div className='appoint-details'>
                         <div className='textarea-inputbox1'>
                         <textarea className='textarea-box1'></textarea>
                         <span className='appoint-text'>Type your message here</span>
                         <span className='appoint-line'></span>
                         </div>
                         </div>
                      </div>
                      <div>
                          <input type='submit' value='Fix Appoinment' className='appoint-submit'/>
                      </div>
                    </form> 
                    </div>
</div>
      )
  }
export default Appoint;
  