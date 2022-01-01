import React,{useState} from "react";
import Cards from "./Cards";
import "./Onlineconsultation.css";
function Onlineappoint(props){
    const[onlineopen,setonlineopen]=useState(false);
    function Onlineappointment(){
        if(onlineopen==true)
        setonlineopen(false);
        else
        setonlineopen(true);
    }
    const items=[["Dermatology","https://neyyarmedicity.com/wp-content/uploads/2020/09/Dermatologist.jpg","Specialists for skin and hair treatments","Rashes,Pimples,Acne,Hairfall,Dandruff"],
    ["General Physician/Internal Medicine","https://images.hindustantimes.com/rf/image_size_640x362/HT/p2/2016/07/01/Pictures/_04695dbe-3f6d-11e6-86cd-639e2418d1d4.jpg","Managing medical conditions","Typhoid,Abdominal,Pain,Migraine,..."],
    ["Paediatrics","https://tinyphysician.com/wp-content/uploads/2021/07/considering-pediatrics-1109x675-1.jpg","Specialists to care and treat children","Constipation,Puberty,Nutrition,Autism"],
    ["Psychiatry","https://nycpsychiatricassociates.com/wp-content/uploads/psychiatrist-1912b.jpg","Specialists to help treat mental health","Anxiety,Depression,Stress,OCD,Bipolar"]
]

  return(
      <div className="onlineconsult">
              <h2 className='sidebarheadings1' onClick={Onlineappointment}>
                 Online-Appiontment
              </h2>
          {onlineopen && <div className='onlinecards'>
              {items.map((item)=>{
                  return <Cards title={item[0]} imgsrc={item[1]} desc={item[2]} ex={item[3]}/>
              })}
                     
               </div>}
      </div>
  );
}
export default Onlineappoint;