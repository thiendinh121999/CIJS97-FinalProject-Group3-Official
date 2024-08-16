import React from "react";
import "./header.css"



const Header = () => {
   /* const controlLogin = () => {
        let loginHtml = document.getElementById("control-login");
        let currentUser = JSON.parse(localStorage.getItem("user")) || '';
        let logout = document.getElementById("logout");
        if (currentUser && currentUser.username) {
          loginHtml.innerHTML = `${currentUser.username} / <i class="fa-solid fa-arrow-right-from-bracket" id="logout" style={{ cursor: "pointer" }}></i>`;
        } else {
          loginHtml.innerHTML = `<a href="login.html" id="login">ĐĂNG NHẬP</a>`;
        }
      };*/ /*FOR LATER*/
    return (
        <div id="navbar">
            <div class="logo">
                <a><img src={require('../img/Logo 1.png')} alt="Ricky Men Wears"/></a>
            </div>
        <ul className="nav-links">
            <li><a class="navitem">TRANG CHỦ</a></li>
            <li><a class="navitem">LIÊN HỆ</a></li>
            <li><span id="control-login" style={{color: 'brown'}}>{/*controlLogin()*/}</span></li>
        </ul>
        </div>
    )
}
export default Header
