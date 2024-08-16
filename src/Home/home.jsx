import React from "react";
import MainMenu from "./mainmenu";
import HomeBanner from "./home-banner";
import SaleBanner from "./salesbanner";
import NewProductList from "./newproductlist";
import ProductRequest from "./productrequest";
import './home.css'

const HomePage = () => {
    return (
        <div className="homepage">
            <MainMenu/>
            <HomeBanner/>
            <SaleBanner/>
            {/*KHU VỰC SẢN PHẨM MỚI*/}
            <div id="newproduct-header">Sản phẩm mới</div>
            {/*Chèn list sản phẩm mới ở đây*/}
           
            {/*KHU VỰC SẢN PHẨN THEO MÙA*/}
            <div class="category-banner">
                 <img id="seasonal" src={require('../img/Carousel03.jpg')} width="100%"/>
            </div>
            {/*Chèn list sản phẩm theo mùa ở đây*/}

            {/*KHU VỰC SẢN PHẨM ĐỒ CHẠY BỘ*/}
            <div id="category-banner">
                <img id="running" src={require('../img/Carousel02.jpg')} width="100%"/>
            </div>
            {/*Chèn list sản phẩm chạy bộ ở đây*/}

            {/*KHU VỰC SẢN PHẨM ĐỒ THUN*/}
            <div id="category-banner">
                <img id="thun" src={require('../img/Carousel01.jpg')} width="100%"/>
            </div>
            {/*Chèn list sản phẩm đồ thun ở đây*/}

            {/*KHU VỰC REQUEST RIÊNG*/}
            <ProductRequest/>
        </div>
    )
}
export default HomePage