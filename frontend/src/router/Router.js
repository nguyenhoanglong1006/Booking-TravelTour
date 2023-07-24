import React from "react";
import {Routes,Route,Navigate} from 'react-router-dom';
import Home from './../pages/Home'
import Contact from './../pages/Contact'
import Login from './../pages/Login'
import Register from './../pages/Register'
import SearchResult from './../pages/SearchResult'
import Tour from './../pages/Tour'
import TourDetail from './../pages/TourDetail'

const Router = () => {
    return ( 
        <Routes>
            <Route path="/" element={<Navigate to='/home'/>}/>
            <Route path="/home" element={<Home/>} />
            <Route path="/tour" element={<Tour/>} />
            <Route path="/contact" element={<Contact/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/register" element={<Register/>} />
            <Route path="/tour/search" element={<SearchResult/>} />
            <Route path="/tour/:id" element={<TourDetail/>} />
        </Routes>
     );
}

export default Router;