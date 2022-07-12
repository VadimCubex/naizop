import React from 'react';
import { Route, Routes } from 'react-router-dom'
import MainLayout from '../layouts/MainLayout';
import ProfileLayout from '../layouts/ProfileLayout';
import FAQ from '../pages/FAQ/FAQ';
import Home from '../pages/Home/Home';
import TestComponents from '../pages/TestComponents';

const NaizopRoutes = () => {
  return (
    <Routes>
      <Route path='/test' element={<TestComponents />} />
      <Route path='' element={<MainLayout />} >
        <Route index element={<Home />} />
        <Route path='/service' element={<Home />} />
        <Route path='/faq' element={<FAQ className='faq-background'/>} />
        <Route path='/blog' element={<Home />} />
        <Route path='/about' element={<Home />} />
      </Route>
      <Route path='/profile' element={<ProfileLayout />} >

      </Route>
    </Routes>
  )
}

export default NaizopRoutes;
