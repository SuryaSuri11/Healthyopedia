import React from 'react';
import "./Symptom.css";
//import './Success.css';
//mport {useLocation,useHistory} from 'react-router';

function Symptom() {
  // let history=useHistory();
  //let location=useLocation();
  //console.log(location.state.time);
  return (
    <div>
      <h1 className='symptomheading'>Symptom Predictor</h1>
      <div className='symptom-div'>
        <div>
          <ul>
            <li className='symptoms'>
              Symptom 1
            </li>
            <li className='symptoms'>
              Symptom 2
            </li>
            <li className='symptoms'>
              Symptom 3
            </li>
            <li className='symptoms'>
              Symptom 4
            </li>
            <li className='symptoms'>
              Symptom 5
            </li>
          </ul>
        </div>
        <div>
          Suhas
        </div>
        <div>
          surya
        </div>
      </div>
    </div>
  )
}

export default Symptom;