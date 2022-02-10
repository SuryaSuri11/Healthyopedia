import { useEffect, useState } from 'react';
import './HealthList.css';
function HealthList(){
  const [category,setCategory]=useState("hospitals");

  const [hospitals,setHospitals]=useState({});
  const [curcity,setCurCity]=useState("all");
  
  const [wellness,setWellness]=useState({});
  const [curWellnessCity,setCurWellnessCity]=useState("all");

  const [diagnostic,setDiagnostic]=useState({});
  const [curDiagnosticCity,setCurDiagnosticCity]=useState("all");



  const hospcities=['all','Agartala','Ahmedabad','AJMER','AMBALA','AMRITSAR','Bangalore','Bhopal','Bhubaneswar','Chandigarh','Chennai','Dehradun','Delhi and NCR','GUNTUR',
    'Guwahati','Hyderabad','INDORE','Jabalpur','Jaipur','JALANDHAR','JAMMU','JODHPUR','Kanpur'];

  const wellnessCities=["all","DELHI/NCR","MEERUT","DHERADUN","JAIPUR","CHANDIGARH","SHIMLA","JAMMU","PUNE","MUMBAI","KOLKATA","GANGTOK","GUWAHATI","SHILLONG","AGARTALA","IMPHAL",
  "HYDERABAD","PONDICHERRY","CHENNAI","TRIVANDRUM","KANPUR","LUCKNOW","ALLAHABAD","PATNA","RANCHI","BHUBANESHWAR","NAGPUR","INDORE","BHOPAL","JABALPUR","AHMEDABAD","BENGALURU","VISAKHAPATNAM"]

  const diagnosticCities=["all","Agartala","Ahmedabad","AMBALA","Bangalore","Bhopal","Chandigarh","Chennai","Dehradun","Delhi and NCR","Guwahati","Hyderabad","Jabalpur","Jaipur",
  "Kanpur","Kolkata","Lucknow","Meerut","Mumbai"];
  
  function fetchWellNessCentre(val) {
    if (val != 'all') {
      fetch("https://api.data.gov.in/resource/8eede3a2-1652-49eb-bd7f-48ae3ea7a11e?api-key=579b464db66ec23bdd0000013649b0c1f5fd470c7f46023824517dfa&format=json&offset=0&limit=500&filters[cityname]=" + val).then(
        response => response.json()).then(
          data => setWellness(data)
        )
    }
    else {
      fetch("https://api.data.gov.in/resource/8eede3a2-1652-49eb-bd7f-48ae3ea7a11e?api-key=579b464db66ec23bdd0000013649b0c1f5fd470c7f46023824517dfa&format=json&offset=0&limit=500").then(
        response => response.json()).then(
          data => setWellness(data)
        )
    }
  }


  function fetchDiagnosticCentre(val) {
    if (val != 'all') {
      fetch("https://api.data.gov.in/resource/34e827e1-03e0-4193-a0e7-1fcc62e306b5?api-key=579b464db66ec23bdd0000017d0d88f6de35494644bbb539558708d8&format=json&offset=0&limit=190&filters[cityname]=" + val).then(
        response => response.json()).then(
          data => setDiagnostic(data)
        )
    }
    else {
      fetch("https://api.data.gov.in/resource/34e827e1-03e0-4193-a0e7-1fcc62e306b5?api-key=579b464db66ec23bdd0000017d0d88f6de35494644bbb539558708d8&format=json&offset=0&limit=190").then(
        response => response.json()).then(
          data => setDiagnostic(data)
        )
    }
  }

  function fetchHospitals(val) {
    if (val != 'all') {
      fetch("https://api.data.gov.in/resource/de59e770-2333-4eaf-9088-a3643de040c8?api-key=579b464db66ec23bdd0000017d0d88f6de35494644bbb539558708d8&format=json&offset=0&limit=1000&filters[cityname]=" + val).then(
        response => response.json()).then(
          // data => setHospitals(data)
          data => {
            console.log("hospitals")
            console.log(data)
          }
        )
    }
    else {
      fetch("https://api.data.gov.in/resource/de59e770-2333-4eaf-9088-a3643de040c8?api-key=579b464db66ec23bdd0000017d0d88f6de35494644bbb539558708d8&format=json&offset=0&limit=1000").then(
        response => response.json()).then(
          data => setHospitals(data)
        )
    }
  }

  useEffect(() => {
    fetchHospitals(curcity);
    fetchWellNessCentre(curWellnessCity);
    fetchDiagnosticCentre(curDiagnosticCity);
  }, [curcity,curWellnessCity,curDiagnosticCity])

  // console.log(hospitals)
  return(
    <div>
  <ul class="menu cf">
  <li onClick={()=>{setCategory("hospitals")}} id={category=="hospitals"?'curlstcategory':'notcurlstcategory'}>Hospitals</li>
  <li onClick={()=>{setCategory("wellness")}} id={category=="wellness"?'curlstcategory':'notcurlstcategory'}>Wellness Centre</li>
  <li onClick={()=>{setCategory("diagnostic")}} id={category=="diagnostic"?'curlstcategory':'notcurlstcategory'}>Diagnostic Centre</li>
  </ul>
 {category=='hospitals' && Object.keys(hospitals).length !== 0 && <div className='listwrapper'>
   <h2 className='listhead'>List of Hospitals</h2>
  <nav className='listnav'>
  <label for="touch" className='listnavhead'><span>{curcity}</span></label>               
  <input type="checkbox" id="touch"/> 
  <ul class="slide">
    {
      hospcities.map((city)=>{
  return <li onClick={()=>{setCurCity(city)}} className='citydropdown'>{city.toLowerCase()}</li>
      })
    }
  </ul>
</nav> 

  <div className="table-wrapper">
      <table className="fl-table">
          <thead>
          <tr>
              <th>Hospital Name</th>
              <th>City Name</th>
              <th>Address</th>
          </tr>
          </thead>
          <tbody>
          {
            hospitals.records.map((hospital)=>{
              return<tr>
              <td>{hospital.hospitalname}</td>
              <td>{hospital.cityname.toUpperCase()}</td>
              <td>{hospital.hospitaladdress}</td>
          </tr>
            })
          }
          </tbody>
      </table>
  </div>
  </div>}


  {category=='wellness' && Object.keys(wellness).length !== 0 && <div className='listwrapper'>
   <h2 className='listhead'>List of Wellness Centre</h2>
  <nav className='listnav'>
  <label for="touch" className='listnavhead'><span>{curWellnessCity}</span></label>               
  <input type="checkbox" id="touch"/> 
  <ul class="slide">
    {
      wellnessCities.map((city)=>{
  return <li onClick={()=>{setCurWellnessCity(city)}} className='citydropdown'>{city.toLowerCase()}</li>
      })
    }
  </ul>
</nav> 

  <div className="table-wrapper">
      <table className="fl-table">
          <thead>
          <tr>
              <th>Centre Name</th>
              <th>Category</th>
              <th>City</th>
              <th>Doctor Count</th>
              <th>Address</th>
              <th>Ph No</th>
          </tr>
          </thead>
          <tbody>
          {
            wellness.records.map((centre)=>{
              return<tr>
              <td>{centre.wellnesscentrename}</td>
              <td>{centre.category}</td>
              <td>{centre.cityname}</td>
              <td>{centre.doctorcount}</td>
              <td>{centre.wellnesscentreaddress}</td>
              <td>{centre.wellnesscentrecontactno}</td>
          </tr>
            })
          }
          </tbody>
      </table>
  </div>
  </div>}


  {category=='diagnostic' && Object.keys(diagnostic).length !== 0 && <div className='listwrapper'>
   <h2 className='listhead'>List of Diagnostic Centre</h2>
  <nav className='listnav'>
  <label for="touch" className='listnavhead'><span>{curDiagnosticCity}</span></label>               
  <input type="checkbox" id="touch"/> 
  <ul class="slide">
    {
      diagnosticCities.map((city)=>{
  return <li onClick={()=>{setCurDiagnosticCity(city)}} className='citydropdown'>{city.toLowerCase()}</li>
      })
    }
  </ul>
</nav> 

  <div className="table-wrapper">
      <table className="fl-table">
          <thead>
          <tr>
              <th>Centre Name</th>
              <th>City</th>
              <th>Address</th>
          </tr>
          </thead>
          <tbody>
          {
            diagnostic.records.map((centre)=>{
              return<tr>
              <td>{centre.diagnosticcentrename}</td>
              <td>{centre.cityname}</td>
              <td>{centre.diagnosticcentreaddress}</td>
          </tr>
            })
          }
          </tbody>
      </table>
  </div>
  </div>}


  </div>
  );
  }
export default HealthList;