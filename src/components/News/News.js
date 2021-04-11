import React, { useState, useEffect } from 'react';
import AllData from '../../AllData'
import axios from 'axios';


const useFetch = () => {
    const [data, updateData] = useState(null);
    const requestUrl = 'https://jsonplaceholder.typicode.com/posts';
    useEffect(()=> {
      const  fetchData = async ()=> {
        const response = await axios.get(requestUrl);
        updateData(response.data)
      }
      fetchData();
    },[]);
    return data;
  };


const QueryResult = () => {
    const result = useFetch();
    return result;
}
// let resultNews = '';
    // if(result) resultNews = result[(props.match.params.name)-1];
// 

export default QueryResult;