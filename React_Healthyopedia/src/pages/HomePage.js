import './HomePage.css';
import Navbarvideo from "./Navbarvideo.mp4";
import Homeproduct from './Hompage_files/Homeproduct';
import Homepageblog from './Hompage_files/Homepageblog';
import Homepagedoctorconsultation from './Hompage_files/Homepagedoctorconsultation';
import Homepagehospital from './Hompage_files/Homepagehospital';


function HomePage() {
return(
    <div>
        <div className='navbarvideo'>
    <video autoPlay loop muted>
      <source src={Navbarvideo} type="video/mp4"/>
    </video>
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
</div>  
);
}
export default HomePage;