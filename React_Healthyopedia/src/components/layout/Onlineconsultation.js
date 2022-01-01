import React,{useState} from "react";
import "./Onlineconsultation.css";
import OnlineCard from "./OnlineCard";
function Consultation(){
    const[onlineopen,setonlineopen]=useState(false);
    function Onlineconsent(){
        if(onlineopen==true)
        setonlineopen(false);
        else
        setonlineopen(true);
    }
    const cards=[["Dermetology",'','Tharun']]

  return(
      <div>
              <h2 className="online-consent" onClick={Onlineconsent}>
                 Online-Consultation
              </h2>
          {onlineopen && <div className='cards'>
              {cards.map((items)=>{
                  return <OnlineCard title={items[0]} img={items[1]} description={items[2]}/>
              })}
                     
               </div>}
      </div>
  );
}
export default Consultation;