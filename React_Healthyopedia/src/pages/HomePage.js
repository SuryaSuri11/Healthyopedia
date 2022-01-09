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
            // data=>console.log(data)
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
   <div className='slides'>
          {category.map((categorys)=> (
                  <div className='slider-container'>
                    <Link to='/' className='images'>
                        <img src={categorys.img} alt="image" className='cat-img'/>
                        {/* <p className='cat-title'>{categorys.title}</p> */}
                    </Link>
               </div>
          ))}
     </div>
     </div>
     <div className='blog-content'>
         <h1 className='news-head'>TOP TRENDING HEALTH NEWS</h1>
            {cardnews['articles']!=null &&
            <div className='news-container'>
            <div className='news-card'>
                    <img src={cardnews['articles'][0]['urlToImage']} className='news-img'/>
                    <div className='news-content'>
                    <h1 className='news-title'>{cardnews['articles'][0]['title']}</h1>
                    <p className='news-body'>{cardnews['articles'][0]['description']}</p>
                    <button className='read-more'>
                        <a href={cardnews['articles'][0]['url']} className='news-link'>
                            Read more...
                        </a>
                    </button>
                    </div>
                    </div>
                <div  className='news-card'>
                    <img src={cardnews['articles'][1]['urlToImage']} className='news-img' alt="images"/>
                    <div className='news-content'>
                    <h1 className='news-title'>{cardnews['articles'][1]['title']}</h1>
                    <p className='news-body'>{cardnews['articles'][1]['description']}</p>
                    <button className='read-more'>
                        <a href={cardnews['articles'][1]['url']} className='news-link'>
                            Read more...
                        </a>
                    </button>
                    </div>
                 </div>
                 <div className='news-card'>
                    <img src={cardnews['articles'][2]['urlToImage']} className='news-img'/>
                    <div className='news-content'>
                    <h1 className='news-title'>{cardnews['articles'][2]['title']}</h1>
                    <p className='news-body'>{cardnews['articles'][2]['description']}</p>
                    <button className='read-more'>
                        <a href={cardnews['articles'][2]['url']} className='news-link'>
                            Read more...
                        </a>
                    </button>
                    </div>
                 </div>
                 </div>
} 
                <div href="" className='all-news'>
                    <button className='all-news-button'>
                     View all News
                     </button>
                </div>
</div>
     </div>
);
}
export default HomePage;
