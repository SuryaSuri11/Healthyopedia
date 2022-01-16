import { useState, useEffect } from "react";
import Cards from "./Cards";
import "./Onlineconsultation.css";
function Onlineappoint(props) {
  const [onlineopen, setonlineopen] = useState(false);
  function Onlineappointment() {
    if (onlineopen == true)
      setonlineopen(false);
    else
      setonlineopen(true);
  }

  const [onlineappoint, setonlineappoint] = useState([])

  useEffect(() => {
    fetch("http://localhost:8000/api/consult-list/").then(
      response => response.json()).then(
        data => setonlineappoint(data)
      )
  }, [])
  return (
    <div className="onlineconsult">
      <h2 className='sidebarheadings1' onClick={Onlineappointment}>
        Online-Appointment
      </h2>

      {onlineopen && <div className='onlinecards'>
        {onlineappoint.map((appoint) => {
          return <Cards title={appoint.category} img={"http://localhost:8000" + appoint.categoryimage} desc={appoint.categorydescription} 
          ex={appoint.categorydiseases} showSideBar={props.showSideBar} onlineappoint={appoint}
          />
        })}
      </div>}
    </div>
  );
}
export default Onlineappoint;