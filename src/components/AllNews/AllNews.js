import React, { useState, useEffect } from 'react';
import NewsItem from '../NewsItem/NewsItem.js';
import axios from 'axios';
import './AllNews.css'
import Title from '../Title/Title.js'


const useFetch = () => {
    const [data, updateData] = useState(null);
    const requestUrl = 'http://newsapi.org/v2/top-headlines?' +
    'country=us&' +
    'apiKey=1f30e8e312cb4f2a83ff4b42b7153d6b';
    useEffect(()=> {
      const  fetchData = async ()=> {
        const response = await axios.get(requestUrl);
        updateData(response.data.articles)
      }
      fetchData();
    },[]);
    return data;
  };

const AllNews = () =>{
    
    const result = useFetch();
    const queryResult = ()=>{
            return result && result.map((item,index) =>(
                <div>
                    <NewsItem 
                        index = {index}
                        title = {item.title}    
                        source = {item.source.name}
                        date = {item.publishedAt}/>
                </div> 
    ))}
    const allNews = queryResult();

    return (
        <div className = "allNews">
          
          <Title
                title = 'Быть в курсе событий'/>

            <div className='news_items'>
                {allNews}
            </div>
        </div>
    )

}


export default AllNews;