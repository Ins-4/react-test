import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './NewsDetail.css'


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

const NewsDetail = (props) =>{
    const result = useFetch();
    const zero = (num) => {
      if (num > 0 && num < 10) return '0' + num;
      return num;
  }
  const thisDate =(x)=>{
    let date = new Date(x)
    return(
      <div class="news_date">
          <span class="news_day">
          {zero(date.getDay())}
          </span>
        /
          <span class="news_mouth">
          {zero(date.getMonth())}
          </span>
    </div>
    )
  }
    return result  && (
      <section className = "news_item">
        <div className = "news_item_page_content">
            <div className="news_sidebar">
            <div className="news_sidebar_content">
                <h1 className="news_title">{result[props.match.params.name].title}</h1>
                <div className="news_detail">
                  <div className="news_site">
                      <a href="" className="news_site_link">
                      {result[props.match.params.name].source.name}
                      </a>
                  </div>
                  {thisDate(result[props.match.params.name].publishedAt)}
                </div>
            </div>
          </div>
            <div className="news_description">
              <div className="news_img"><img src={result[props.match.params.name].urlToImage}/></div>
              <div>
                <p>
                  {result[props.match.params.name].description}
                </p>
              </div> 
            </div>
        </div>
      </section>
    )
}
export default NewsDetail;
