import './Login.css';
import React,{useState} from 'react';
function LoginPage(){
    const[login,setloginform]=useState("loginpage");
    function Form() {
        if (login == true)
           setloginform(false);
        else
           setloginform(true);
     };
    return(
       <div className='logincontainer'>
        <div className='login-card'>
         {login === "loginpage" && <div className='loginform'>
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
                    <input type='submit' value='Submit'/>
                    <p className='signin' onClick={() => setloginform("signin")}>Dont have a account Sign up?</p>
                </div>
            </div>
        </div>}
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
                    <input type='submit' value='Submit'/>
                    <p className='signin' onClick={() => setloginform("loginpage")}>Already have an account Login?</p>
                </div>
            </div>
        </div> }
    </div>
        </div>

    );
    }
export default LoginPage;