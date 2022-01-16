import {useState} from 'react';
import '../HomePage.css';
import Item from './Item';
import Carousel from "react-elastic-carousel"
import { useHistory } from 'react-router';

const breakPoints=[
    {width:1,itemsToShow:1},
    {width:550,itemsToShow:2},
    {width:768,itemsToShow:3},
    {width:1200,itemsToShow:4},
];
function Homepagedoctorconsultation(){
    const history=useHistory();
    const [homedoctors,sethomedoctors]=useState([])
    function Doctor(category){
        fetch("http://localhost:8000/api/doctordetails-category/"+category).then(
          response=>response.json()).then(
            data=>sethomedoctors(data) 
         )
    }
    return (
        <>
        <h1 className='cat-title'>BOOK APPOINTMENTS BASED ON CATEGORYS</h1>
        <div className='slides'>z
            <Carousel breakPoints={breakPoints} className='carousel'>
                <Item onClick={()=> {
                    Doctor('Dermatology')
                    // console.log(homedoctors)
                    history.push('/doctor',{doctors:homedoctors})
                }}>
                    <img src='http://localhost:8000/files/images/image1.jpg' className='doctor-img' alt="images"/>
                    <p className='cat-des'>
                       Dermatology
                    </p>
                </Item>
                <Item>
                <img src='http://localhost:8000/files/images/image2.jpg' className='doctor-img' alt="images"/>
                    <p className='cat-des'>
                        General Physician
                    </p>
                </Item>
                <Item>
                <img src='http://localhost:8000/files/images/image3.jpg' className='doctor-img' alt="images"/>
                    <p className='cat-des'>
                        Paediatrica
                    </p>
                </Item>
                <Item>
                <img src='http://localhost:8000/files/images/image4.jpg' className='doctor-img' alt="images"/>
                    <p className='cat-des'>
                       Psychiatry
                    </p>
                </Item>
                <Item>
                <img src='http://localhost:8000/files/images/image_13.jpg' className='doctor-img'/>
                    <p className='cat-des'>
                        Cardiologist
                    </p>
                </Item>
                <Item>
                <img src='http://localhost:8000/files/images/images17.jpg' className='doctor-img'/>
                    <p className='cat-des'>
                       Neurologist
                    </p>
                </Item>
               </Carousel>
         </div>
        </>
    );
}

export default Homepagedoctorconsultation
