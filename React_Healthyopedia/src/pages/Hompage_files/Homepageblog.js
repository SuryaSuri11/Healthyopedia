import {useState,useEffect} from 'react'
import '../HomePage.css';


function Homepageblog(){

const [cardnews,setcardnews]=useState([{status:null,totalResults:null,articles:null}]);


    useEffect(()=>{
        fetch("http://localhost:8000/api/health-news/").then(
          response=>response.json()).then(
            data=>setcardnews(data)
            // data=>console.log(data)
         )
       },[])

    return (
        <div className='blog-content'>
         <h1 className='cat-title'>TOP TRENDING HEALTH NEWS</h1>
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
    )
}

export default Homepageblog;
