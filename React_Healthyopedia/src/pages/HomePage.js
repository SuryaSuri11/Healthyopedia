import './HomePage.css';
import Navbarvideo from "./Navbarvideo.mp4";
import { Link } from 'react-router-dom';
import { useState,useEffect } from 'react';


const category=[
    {
        img:"https://zeelabpharmacy.com/public/uploads/healthconcern/EMCEE5eb8fab9e4d68-120X.png",
        title:"Respiratory Care"
    },
    {
        img:"https://zeelabpharmacy.com/public/uploads/healthconcern/EMCEE5eb8fc084a228-120X.png",
        title:"Bone and Joint Pains"
    },
    {
        img:"https://zeelabpharmacy.com/public/uploads/healthconcern/EMCEE5eb8fc235a78b-120X.png",
        title:"Pain Relief"
    },
    {
        img:"https://zeelabpharmacy.com/public/uploads/healthconcern/EMCEE5eb8fc44c6981-120X.png",
        title:"Cardiac Care"
    },
    {
        img:"https://zeelabpharmacy.com/public/uploads/healthconcern/EMCEE5eb8fe5234c50-120X.png",
        title:"Kidney Care"
    },
    {
        img:"https://zeelabpharmacy.com/public/uploads/healthconcern/EMCEE5eb8ff511094b-120X.png",
        title:"Diabetic Care"
    },
    {
        img:"https://zeelabpharmacy.com/public/uploads/healthconcern/EMCEE5eb8fea163257-120X.png",
        title:"Liver Care"
    },
]
function HomePage() {
    const [cardnews,setcardnews]=useState([{status:null,totalResults:null,articles:null}]);


    useEffect(()=>{
        fetch("http://localhost:8000/api/health-news/").then(
          response=>response.json()).then(
            data=>setcardnews(data)
         )
       },[])

return(
    <div>
        <div className='navbarvideo'>
    <video autoPlay loop muted>
      <source src={Navbarvideo} type="video/mp4"/>
    </video>
</div>
   <div>
   <h1 className='pro'>SHOP BY HEALTH CONCERN</h1>
     <div className='product-slider'>
          {category.map((categorys)=> {
                  return  <Link to='/' className='cat'>
                        <img src={categorys.img} alt="image" className='cat-img'/>
                        <p className='cat-title'>{categorys.title}</p>
                    </Link>
          })}
     </div>
     </div>
     {/* <div className='blog-content'>
         <h1 className='news-title'>TOP TREANDING HEALTH NEWS</h1>
            {cardnews['articles']!=null && cardnews['articles'].map((article)=>{
             return   <div className='new-card'>
                    <img src={article['urlToImage']}/>
                    <h1>{article['title']}</h1>
                    <p>{article['description']}</p>
                 </div>
            })}
         </div> */}
     </div>
);
}
export default HomePage;
