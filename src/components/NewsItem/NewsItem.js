import React from 'react';
import {withRouter} from 'react-router-dom';
import './NewsItem.css'

const NewsItem = (props) => {
    const zero = (num) => {
        if (num > 0 && num < 10) return '0' + num;
        return num;
    }
    const date = (new Date(props.date));

    return (
        <div className="news_item"
            onClick = {
                () =>{
                    props.history.push('/news/' + props.index)
                }
            }>
            <div className="news_title" >
                <h2>{props.title}</h2>
            </div>
            {/* <p>{props.source}</p>
            <p>{zero(date.getDay())}/{zero(date.getMonth())}</p> */}
            <div className="news_item_content">
                    <div className="news_site">
                        <p>{props.source}</p>
                    </div>
                    <div className="news_date">
                        <span className="news_day">
                            {zero(date.getDay())}
                        </span>
                        /
                        <span className="news_mouth">
                            {zero(date.getMonth())}
                        </span>
                    </div>
                </div>
        </div>
    )
}

export default withRouter(NewsItem);


