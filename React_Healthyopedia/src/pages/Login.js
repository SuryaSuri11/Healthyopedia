import './Login.css';
import React, { useState,useContext } from 'react';
import ReactDom from 'react-dom';
import axios from 'axios';
import { useHistory } from 'react-router';
import ProductFilterContext from '../components/shop_page/ProductFilterContext';


function LoginPage({ loginopen, onClose }) {
  const filterctx=useContext(ProductFilterContext);

    const history=useHistory();
    const [login, setloginform] = useState("loginpage");
    //register
    const [username, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    //login
    const [loginemail,setLoginEmail]=useState("");
    const [loginpassword,setLoginPassword]=useState("");

    const[loginError,setLoginError]=useState(false);
    const[registerError,setRegisterError]=useState(false);

    const registerSubmit=async(e)=>{
        e.preventDefault()

        const response=await fetch('http://localhost:8000/api/register',{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify({
                username,
                email,
                password
            })
        });

        const content =await response.json();

        // console.log("......")
        // console.log(username)
        // console.log(content.username)
        // console.log(typeof(username))
        // console.log(typeof(content.username))
        // console.log("......")

        if(username==content.username && email==content.email)
        {
        setRegisterError(false)
        setUserName("")
        setEmail("")
        setPassword("")
        setloginform("loginpage")
        }
        else
        {
            setRegisterError(true)
        }
   }  

//  const loginInfo=async()=>{
//     try{
//         const response=await axios.get('http://localhost:8000/api/user',{credentials:'include'})
//           console.log(JSON.stringify(response))
//         }
//         catch(err)
//         {
//             console.log("login error "+err)
//         }
//  }



//   var loginInfo=async()=>{
//     const response=await fetch('http://localhost:8000/api/user',{
//       headers:{'Content-Type':'application/json'},
//       credentials:'include'
//   });
//   const content =await response.json();
//   console.log(content.username)
//   console.log(content)
// }




   const loginSubmit=async(e)=>{
        e.preventDefault()
        const info={
            email:loginemail,
            password:loginpassword
        }
        const headers = { 
            'Content-Type':'application/json' 
        };
        try{
        const response=await axios.post("http://localhost:8000/api/login",info,{withCredentials:true})
        console.log("login response ")
        console.log(JSON.stringify(response))
        filterctx.setLoggedIn(true)
        setLoginError(false)
        setLoginEmail("")
        setLoginPassword("")
        // history.push("/")
        onClose();
        }
        catch(err)
        {
            setLoginError(true);
            console.log("login error "+err)
        }
        

        // const content =await response.json();
    }


    
 /*const loginSubmit=async(e)=>{
        e.preventDefault()
        const info={
            email:loginemail,
            password:loginpassword
        }
        const headers = { 
            'Content-Type':'application/json' 
        };
        try{
        const response=await fetch("http://localhost:8000/api/login",{
          method:"POST",
          headers:{'Content-Type': 'application/json'},
          credentials:'include',
          body:JSON.stringify({
              email:loginemail,
              password:loginpassword
          })
        }
        );
        
        console.log("login response ")
        console.log(JSON.stringify(response))
        loginInfo()
        setLoginError(false)
        setLoginEmail("")
        setLoginPassword("")
        history.push("/")
        onClose();
        }
        catch(err)
        {
            setLoginError(true);
            console.log("login error "+err)
        }
        

        // const content =await response.json();
    }*/



    if (!loginopen) return null
    return ReactDom.createPortal(
        <>
            <div className='overlay_styles' onClick={onClose} />
            <div className='login-card'>
                {login === "loginpage" && <form className='loginform' onSubmit={loginSubmit}>
                    {loginError && <div className="errormsg">User does not exist</div>}
                    <div className='row100'>
                        <div className='col'>
                            <div className='inputbox'>
                                <input type="email" name="" required='required' onChange={e =>{setLoginEmail(e.target.value);setLoginError(false)}}/>
                                <span className='text'>Email</span>
                                <span className='line'></span>
                            </div>
                        </div>
                        <div className='col'>
                            <div className='inputbox'>
                                <input type="password" name="" required='required' onChange={e => {setLoginPassword(e.target.value);setLoginError(false)}}/>
                                <span className='text'>Password</span>
                                <span className='line'></span>
                            </div>
                        </div>
                        <div>
                            <input type='submit' value='Submit' className='submit' />
                            <p className='signin' onClick={() => setloginform("signin")}>Dont have a account? Sign up</p>
                        </div>
                    </div>
                </form>}
                {login === "signin" && <form className='login' onSubmit={registerSubmit}>
                        {registerError && <div className='errormsg'>username/email already exists</div>}
                        <div className='row100'>
                            <div className='col'>
                                <div className='inputbox'>
                                    <input type="text" name="" required='required' onChange={e => {setUserName(e.target.value);setRegisterError(false)}} />
                                    <span className='text'>User name</span>
                                    <span className='line'></span>
                                </div>
                            </div>
                            <div className='col'>
                                <div className='inputbox'>
                                    <input type="email" name="" required='required' onChange={e => {setEmail(e.target.value);setRegisterError(false)}}/>
                                    <span className='text'>Email</span>
                                    <span className='line'></span>
                                </div>
                            </div>
                            <div className='col'>
                                <div className='inputbox'>
                                    <input type="password" name="" required='required' onChange={e => {setPassword(e.target.value);setRegisterError(false)}} />
                                    <span className='text'>Password</span>
                                    <span className='line'></span>
                                </div>
                            </div>
                            <div>
                                <input type='submit' value='Submit' className='submit' />
                                <p className='signin' onClick={() => setloginform("loginpage")}>Already have an account? Login</p>
                            </div>
                        </div>
                    </form>
                }
            </div>
        </>,
        document.getElementById('portal')
    )
}
export default LoginPage;