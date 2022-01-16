import React from 'react';
import './Success.css';
import {useLocation,useHistory} from 'react-router';
function Success() {
    let history=useHistory();
    let location=useLocation();
    console.log(location.state.images);
    return (
        <div className="success-container">
            <div className='success-contents'>
                <h1 className='sucess-title'>
                    {location.state.message}
                </h1>
                <img src={location.state.images} className='success-img'/>
                <p className='redirect' onClick={()=> history.push('/')}>Click Here to redirect to Homepage</p>
            </div>   
        </div>
    )
}

export default Success;