import React from 'react'
import { Routes, Route, Outlet } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import data from '../../data/data.json';
import newtag from "../../data/assets/Resource/NewTag.png";
import MainMenu from '../component_dinh/Home/mainmenu';
import HomeBanner from '../component_dinh/Home/home-banner';
import SaleBanner from '../component_dinh/Home/salesbanner';
import ProductRequest from '../component_dinh/Home/productrequest';
import Header from '../component_dinh/Home/header';
import Footer from '../component_dinh/Home/footer';

function Product() {

 

    return (
        <div className="homepage">
            <Header/>
            <MainMenu/>
            <Outlet></Outlet>
            <SaleBanner/>
            {/*KHU VỰC REQUEST RIÊNG*/}
            <ProductRequest/>
            <Footer/>
        </div>
    )
}

export default Product