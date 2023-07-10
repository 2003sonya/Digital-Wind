import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import React from 'react';
import './App.css';
import MainPage from './pages/MainPage'
import {BrowserRouter, Route, Routes } from 'react-router-dom';
import PageNews from './pages/PageNews';
import RegionalStagePage from './pages/RegionalStagePage';
import CatalogWork from './pages/CatalogWork';
import PageWork from './pages/PageWork';
import Information from './pages/Information';
import MasterClasses from './pages/MasterClasses';
import { WorkContext } from './context/WorkContext';

function App() {

  const [work, setWork] = useState({});

  return (

    <>
    <BrowserRouter>
    <WorkContext.Provider value={{work, setWork}}>
      <Routes>
        <Route path='/' element={MainPage()}/>
        <Route path='/news' element={PageNews()}/>
        <Route path='/catalogWork' element={CatalogWork()}/>
        <Route path='/pageWork' element={<PageWork/>}/>
        <Route path='/information' element={<Information/>}/>
        <Route path='/masterClasses' element={<MasterClasses/>}/>
        <Route path='/regionalstagepage' element={RegionalStagePage()}/>

      </Routes>
      </WorkContext.Provider>
    </BrowserRouter>


    </>
  )
}

export default App
