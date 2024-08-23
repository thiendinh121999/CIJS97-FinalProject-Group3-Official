import React, {useState} from "react";
import { Link } from 'react-router-dom';
import Login from "../LoginSignup/login";
import "./header.css"



const Header = () => {
  const [currentUser, setCurrentUser] = useState(JSON.parse(localStorage.getItem("user")) || null);

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("CartListNew");
    localStorage.removeItem("CartListRun");
    localStorage.removeItem("CartListSeasonal");
    window.location.href = "/";
    };
    
    const isAdmin = currentUser?.username === "Admin"; //check xem co phai Admin dang nhap khong

    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    

  };
    return (
        <div id="navbar">
            <div class="logo">
                <Link to="/" onClick={scrollToTop}><img src={require('../../../img/Logo 1.png')} alt="Ricky Men Wears"/></Link>
            </div>
        <ul className="nav-links">
            <li><Link to="/" class="navitem" onClick={scrollToTop}>TRANG CHỦ</Link></li>
            <li><a onClick={() => window.location.replace("/#footer")}  class="navitem">LIÊN HỆ</a></li>
            {isAdmin && ( // NHỚ THÊM ROUTE ADMIN VÀO LINK
                <Link to="/shop-management" className="navitem"> 
                  QUẢN LÝ SHOP
                </Link>
              )}
            <li>
            {currentUser ? (
            <div className="logedin-wrap">
            <span> XIN CHÀO,
              {currentUser.username} | {" "}
              <a
                className="fa-solid logout-btn"
                id="logout"
                onClick={handleLogout}
              >ĐĂNG XUẤT</a>
            </span>
            </div>
          ) : ( 
            <Link to="/login" id="login">
              ĐĂNG NHẬP
            </Link>
          )}
            </li>
        </ul>
        </div>
    )
}
export default Header
