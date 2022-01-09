import './HomePage.css';
import Navbarvideo from "./Navbarvideo.mp4";
<<<<<<< HEAD
import Homeproduct from './Hompage_files/Homeproduct';
import Homepageblog from './Hompage_files/Homepageblog';
import Homepagedoctorconsultation from './Hompage_files/Homepagedoctorconsultation';
import Homepagehospital from './Hompage_files/Homepagehospital';


=======
>>>>>>> d44fa641007c8c0b065ee3c61a928798cecdf687
function HomePage() {
return(
    <div>
        <div className='navbarvideo'>
    <video autoPlay loop muted>
      <source src={Navbarvideo} type="video/mp4"/>
    </video>
</div>
<<<<<<< HEAD
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
)
=======
    <h1>
        HomePage
    </h1>
    </div>
);
>>>>>>> d44fa641007c8c0b065ee3c61a928798cecdf687
}
export default HomePage;