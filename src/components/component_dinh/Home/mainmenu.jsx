import React from "react";
import './mainmenu.css'
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import CartPayment from "../cart-payment/cartpayment";

const MainMenu = () => {
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

        //ĐẾM ITEM GIỎ HÀNG (WIP)
 const [totalCartCount, setTotalCartCount] = useState(0);
  const [cartListNew, setcartListNew] = useState([]);
  const [cartListRun, setcartListRun] = useState([]);
  const [cartListSeasonal, setcartListSeasonal] = useState([]);

      useEffect(() => {
        const updateCartCounts = () => {
          setcartListNew(JSON.parse(localStorage.getItem("CartListNew")))
          setcartListRun(JSON.parse(localStorage.getItem("CartListRun")))
          setcartListSeasonal(JSON.parse(localStorage.getItem("CartListSeasonal")))

          console.log("cartListNew",cartListNew)
          console.log("cartListRun",cartListRun)
          console.log("cartListSeasonal",cartListSeasonal)
            const countNew = cartListNew.length;
            const countRun = cartListRun.length;
            const countSeasonal = cartListSeasonal.length;

            setTotalCartCount(countNew + countRun + countSeasonal);
            return;
        };
                    // Call the function initially
                    updateCartCounts();

                    // Set up a listener for storage changes
                    window.addEventListener('localstorage', () => {
                      updateCartCounts()
                      console.log("Storage changed!")
                    });

    }, []);


    return(
        <div>
  <div className="mainmenu">
    <div className="mainmenu-logo">
    <Link to="/" onClick={scrollToTop}><img src={require('../../../img/Logo 2.png')}/></Link>
    </div>
    <div className="mainmenu-link">
      <a onClick={() => window.location.replace("/#newproduct-header")}>
        <div className="mainmenu-link-product">SẢN PHẨM MỚI</div>
      </a>
      <a onClick={() => window.location.replace("/#seasonal")}>
        <div className="mainmenu-link-item">ĐỒ THEO MÙA</div>
      </a>
      <a onClick={() => window.location.replace("/#running")}>
        <div className="mainmenu-link-item">ĐỒ CHẠY BỘ</div>
      </a>
      <a onClick={() => window.location.replace("/#thun")}>
        <div className="mainmenu-link-item">ĐỒ THUN NAM</div>
      </a>
      <a onClick={() => window.location.replace("#container-request")}>
        <div className="mainmenu-link-item">SẢN XUẤT RIÊNG</div>
      </a>
    </div>
    <div className="search-cart">
      <div className="searchbar">
        <div className="search-icon">
          <img src={require('../../../img/768px-Search_Icon.svg.png')}/>
        </div>
        <div className="search-input">
          <input type="text" placeholder="Tìm sản phẩm..."/>
        </div>
      </div>
      <div className="img-cart">
        <Link to="/cart&payment">
        <img src={require('../../../img/bag.jpg')} height="30px"/>
        <div className="counter-wrap">
          <div className="cart-counter">{totalCartCount}</div>
        </div>
        </Link>
      </div>
    </div>
  </div>
        </div>
    )
}

export default MainMenu