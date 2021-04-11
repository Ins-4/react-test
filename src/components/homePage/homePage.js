import React, { useState, useEffect } from 'react';
import Title from '../Title/Title.js'
import './homePage.css'

import NewsItem from '../NewsItem/NewsItem.js'
import {NavLink} from 'react-router-dom';
import axios from 'axios';

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

const HomePage = ()=>{
    const result = useFetch();

    const queryResult = ()=>{
        return result && result.map((item,index) => (index<6) &&(
            <div>
                <NewsItem 
                  index = {index}
                  title = {item.title}    
                  source = {item.source.name}
                  date = {item.publishedAt}/>
            </div> 
    ))}
  const newsItems = queryResult();
  return result && (
      <div className = 'news_wrapper container'>
        <div className = "news_content ">
          <Title
                title = 'Всегда свежие новости'/>
            <div className='news_items'>
              
                    {newsItems}
             
            </div>
            <div className="news_subscribe">
                  <NavLink 
                    to='/news'
                    exact
                    >Быть в курсе событий</NavLink>
            </div>

        </div>
      </div>
    )
}


export default HomePage;