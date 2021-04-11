import React, { useState, useEffect } from 'react';
import {Route} from 'react-router-dom';
import './App.css';
import Header from './components/Header/header.js';
import AllNews from './components/AllNews/AllNews.js';
import Contacts from './components/Contacts/Contacts.js'
import NewsDetail from './components/NewsDetail/NewsDetail.js'
import HomePage from './components/homePage/homePage.js'
import Footer from './components/Footer/Footer.js'



const App = () => {
  
  return (
    <div className="App">
      <Header/>
        <Route
          path='/'
          exact
          component={HomePage}
        />
        <Route
          path='/news'
          exact
          component={AllNews}
        />
        <Route
          path='/contacts'
          exact
          component={Contacts}
        />
        <Route
          path='/news/:name'
          exact
          component={NewsDetail}
        />
      <Footer/>
    </div>
  )
}

export default App;  