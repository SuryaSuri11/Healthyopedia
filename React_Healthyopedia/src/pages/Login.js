import './Login.css';
import React,{useState} from 'react';
import ReactDom from 'react-dom';
function LoginPage({loginopen,onClose}){
    const[login,setloginform]=useState("loginpage");
 if(!loginopen) return null
    return ReactDom.createPortal(
        <>
      <div className='overlay_styles' onClick={onClose}/>
        <div className='login-card'>
         {login === "loginpage" && <form className='loginform'>
            <div className='row100'>
                <div className='col'>
                    <div className='inputbox'>
                        <input type="text" name="" required='required'/>
                        <span className='text'>Email</span>
                        <span className='line'></span>
                    </div>
                </div>
                <div className='col'>
                    <div className='inputbox'>
                        <input type="password" name="" required='required'/>
                        <span className='text'>Password</span>
                        <span className='line'></span>
                    </div>
                </div>
                <div>
                    <input type='submit' value='Submit' className='submit'/>
                    <p className='signin'onClick={()=>setloginform("signin")}>Dont have a account? Sign up</p>
                </div>
            </div>
        </form>}
       {login === "signin" && <div className='login'>
        <div className='row100'>
                <div className='col'>
                    <div className='inputbox'>
                        <input type="text" name="" required='required'/>
                        <span className='text'>First name</span>
                        <span className='line'></span>
                    </div>
                </div>
                <div className='col'>
                    <div className='inputbox'>
                        <input type="text" name="" required='required'/>
                        <span className='text'>Last name</span>
                        <span className='line'></span>
                    </div>
                </div>
                <div className='col'>
                    <div className='inputbox'>
                        <input type="text" name="" required='required'/>
                        <span className='text'>Email</span>
                        <span className='line'></span>
                    </div>
                </div>
                <div className='col'>
                    <div className='inputbox'>
                        <input type="password" name="" required='required'/>
                        <span className='text'>Password</span>
                        <span className='line'></span>
                    </div>
                </div>
                <div>
                    <input type='submit' value='Submit' className='submit'/>
                    <p className='signin' onClick={() => setloginform("loginpage")}>Already have an account? Login</p>
                </div>
            </div>
        </div> }
    </div>
        </>,
document.getElementById('portal')
    )
    }
export default LoginPage;