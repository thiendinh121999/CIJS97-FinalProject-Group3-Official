import '../Home/home.css'
import '../Home/header.css'
import '../Home/footer.css'
import './loginsignup.css'
import Header from '../Home/header'
import Footer from '../Home/footer'
import { Link } from 'react-router-dom'
import React, { useState } from "react";

const Signup = () => {
    
    const handleSignupSubmit = async (e) => {
        e.preventDefault();
        const username = document.getElementById("username").value;
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
    
        if (username.toLowerCase() === "admin") {
            alert("Tên người dùng không được là 'Admin'. Vui lòng chọn tên khác.");
            return;
          }
        
        const user = {
          username,
          email,
          password,
          priority: "2", // Default for every account that signed up
        };
    
        try {
          // Make a POST request to the mock API
          const response = await fetch(
            "https://66c4132cb026f3cc6cedf048.mockapi.io/user-account", // Corrected API endpoint
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(user),
            }
          );
    
          if (response.ok) {
            alert("Đăng ký thành công! Mời bạn đăng nhập");
            window.location.href = "/login"; // Redirect to login page
          } else {
            alert("Đăng ký thất bại. Vui lòng thử lại sau.");
          }
        } catch (error) {
          console.error("Error registering user:", error);
        }
      };
    
    return(
        <div className="background">
            <Header/>
            <div className="signup-container">
                <h1 className="form-head">Đăng ký</h1>
                <form className="login-form" onSubmit={handleSignupSubmit}>
                    <input id="username" type="text" placeholder="Tên người dùng" required/>
                    <input id="email" type="email" placeholder="Email" required/>
                    <input id="password" type="password" placeholder="Mật khẩu" required/>
                    <button id="btn-signup" type="submit">Đăng ký</button>
                </form>
                <hr />
                <p className="question">Bạn đã có tài khoản? <Link to="/login">Đăng nhập!</Link></p>
             </div>
             <Footer/>
        </div>
    )
    }
export default Signup