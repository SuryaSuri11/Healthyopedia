import './HomePage.css';
import Navbarvideo from "./Navbarvideo.mp4";
function HomePage() {
return(
    <div>
        <div className='navbarvideo'>
    <video autoPlay loop muted>
      <source src={Navbarvideo} type="video/mp4"/>
    </video>
</div>
    <h1>
        HomePage
    </h1>
    </div>
);
}
export default HomePage;