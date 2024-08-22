import React, { useState } from "react";
import '../Home/home.css'
import '../Home/header.css'
import '../Home/footer.css'
import './loginsignup.css'
import Header from '../Home/header'
import Footer from '../Home/footer'
import { Link } from 'react-router-dom'

const Login = () => {
    const handleLoginSubmit = async (e) => {
        e.preventDefault();
        const userName = document.getElementById("username").value;
        const eMail = document.getElementById("email").value;
        const passWord = document.getElementById("password").value;
    
        try {
          // Make a GET request to fetch user data
          const response = await fetch(
            "https://66c4132cb026f3cc6cedf048.mockapi.io/user-account"
          );
          if (response.ok) {
            const userData = await response.json();
            const foundUser = userData.find(
              (user) => user.username === userName && user.email === eMail && user.password === passWord
            );
    
            if (foundUser) {
              if (foundUser.priority === "1") {
                alert("Xin chào quản trị viên!");
                localStorage.setItem("user", JSON.stringify(foundUser));
                window.location.href = "/";// Redirect to admin page
              } else {
                alert(`Xin chào ${userName}!`);
                localStorage.setItem("user", JSON.stringify(foundUser));
                window.location.href = "/";// Redirect to home page
              }
            } else {
              alert("Sai tên tài khoản hoặc mật khẩu");
            }
          } else {
            alert("Lỗi kết nối máy chủ. Xin vui lòng thử lại sau.");
          }
        } catch (error) {
          console.error("Error logging in:", error);
        }
      };
    return(
        <div className="background">
            <Header/>
            <div class="login-container">
                <h1 class="form-head">Đăng nhập</h1>
                <form class="login-form" onSubmit={handleLoginSubmit}>
                    <input id="username" type="text" placeholder="Tên người dùng" required/>
                    <input id="email" type="email" placeholder="Email" required/>
                    <input id="password" type="password" placeholder="Mật khẩu" required/>
                    <button id="btn-login" type="submit">Đăng nhập</button>
                </form>
                <hr />
                <p class="question">Bạn chưa là thành viên? <Link to="/signup">Đăng ký ngay!</Link></p>
            </div>
            <Footer/>
        </div>

    )
}
export default Login