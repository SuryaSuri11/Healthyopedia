import React from 'react';
import '../HomePage.css';
import Item from './Item';
import Carousel from "react-elastic-carousel"

const breakPoints=[
    {width:1,itemsToShow:1},
    {width:550,itemsToShow:2},
    {width:768,itemsToShow:3},
    {width:1200,itemsToShow:4},
];
function Homepagedoctorconsultation(){
    return (
        <>
        <h1 className='cat-title'>BOOK APPOINTMENTS BASED ON CATEGORYS</h1>
        <div className='slides'>
            <Carousel breakPoints={breakPoints} className='carousel'>
                <Item>
                    <img src='http://localhost:8000/files/images/image1.jpg' className='doctor-img'/>
                    <p className='cat-des'>
                       Dermatology
                    </p>
                </Item>
                <Item>
                <img src='http://localhost:8000/files/images/image2.jpg' className='doctor-img'/>
                    <p className='cat-des'>
                        General Physician
                    </p>
                </Item>
                <Item>
                <img src='http://localhost:8000/files/images/image3.jpg' className='doctor-img'/>
                    <p className='cat-des'>
                        Paediatrica
                    </p>
                </Item>
                <Item>
                <img src='http://localhost:8000/files/images/image4.jpg' className='doctor-img'/>
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
