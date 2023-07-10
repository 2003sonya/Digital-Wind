import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import './App.css';

import MainPage from './components/MainPage';
import Menu from './components/Menu';
import MainBanner from './components/MainBanner';
import TheEnd from './components/TheEnd';
import CatalogWork from './components/CatalogWork'; 
import PageWork from './components/PageWork';

import { WorkContext } from './context/WorkContext';
import Information from './components/Information';

function App() {

  const [work, setWork] = useState({});
  console.log(work)

  return (
    <>
      <div className="menu">
          <Menu/>
      </div>

      <div className='mainbanner'>
          <MainBanner/>
      </div>

      <WorkContext.Provider value={{work, setWork}}>
        <Routes>
          <Route path='/' element={<MainPage/>}/>
            <Route path='/catalogWork' element={<CatalogWork/>}/>
            <Route path='/pageWork' element={<PageWork/>}/>
            <Route path='/information' element={<Information/>}/>
            <Route path='*' element={<p>Страница не найдена</p>}/>
        </Routes>
      </WorkContext.Provider>

      <div className='theEnd'>
          <TheEnd/>
      </div>
    </>
  )
}

export default App
