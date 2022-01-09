import React from 'react'
import '../HomePage.css'

function Homepagehospital(){
    return (
        <div>
            <h1 className='cat-title'>LIST OF HOSPITALS</h1>
            <div className='hos-container'>
                <div className='hos-cards1'>
                    <img className='hos-img'/>
                    <h4 className="hos-title"></h4>
                    <p className='hos-desc'></p>
                </div>
                <div className='hos-cards2'>
                    <img className='hos-img'/>
                    <h4 className="hos-title"></h4>
                    <p className='hos-desc'></p>
                </div>
                <div className='hos-cards3'>
                    <img className='hos-img'/>
                    <h4 className="hos-title"></h4>
                    <p className='hos-desc'></p>
                </div>
            </div>
        </div>
    )
}

export default Homepagehospital
