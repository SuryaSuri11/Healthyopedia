import './HomePage.css';
import Navbarvideo from "./Navbarvideo.mp4";
import Homeproduct from './Hompage_files/Homeproduct';
import Homepageblog from './Hompage_files/Homepageblog';
import Homepagedoctorconsultation from './Hompage_files/Homepagedoctorconsultation';
import Homepagehospital from './Hompage_files/Homepagehospital';
import Homeabout from './Hompage_files/Homeabout';
import { useEffect, useContext } from 'react';
import ProductFilterContext from '../components/shop_page/ProductFilterContext';



function HomePage() {

  const filterctx = useContext(ProductFilterContext);

//   var loginInfo=async()=>{
//     const response=await fetch('http://localhost:8000/api/user',{
//       headers:{'Content-Type':'application/json'},
//       credentials:'include'
//   });
//   const content =await response.json();
//   console.log(content.username)
//   console.log(content)
// }

  // var  loginInfo=async()=>{
  //   const headers = { 
  //       'Content-Type':'application/json' 
  //   };
  //   try{
  //   const response=await axios.get("http://localhost:8000/api/user",{headers},{credentials:'include'})
  //   console.log(response)
  //   }
  //   catch(err)
  //   {
  //       console.log("login error "+err)
  //   }
  // }


  // useEffect(()=>{
  //   loginInfo()
  // },[filterctx.logIn])

  //   var loginInfo={
  //     const response=await axios.get("")

  //     const content=await response.json();

  //     console.log(content)
  //   }

  // useEffect(()=>{
  //    axios.get("http://localhost:8000/api/user").then(
  //      response=>{
  //       //  JSON.stringify(response.data);
  //       console.log("homepage "+response)
  //      }
  //    ).catch(err=>{
  //      console.log(err);
  //    })
  // },[filterctx.logIn])

  // useEffect(() => {
  //   fetch("http://localhost:8000/api/user").then(
  //     response => console.log(response)).catch(err=>{
  //       console.log(err)
  //     })
  // }, [filterctx.logIn])

  return (
    <div>
        <div className='navbarvideo'>
    <video autoPlay loop muted>
      <source src={Navbarvideo} type="video/mp4"/>
    </video>
    <h1 className='video-text'>
      Do not let illness make you realize <br/>
      the value of health
    </h1>
</div>
     <div>
       <Homeproduct/>
     </div>
     <div>
         <Homepageblog/>
     </div>
     <div>
         <Homepagedoctorconsultation/>
     </div>
     <div>
       <Homepagehospital/>
     </div>
     <div>
       <Homeabout/>
     </div>
</div>  
  );
}
export default HomePage;