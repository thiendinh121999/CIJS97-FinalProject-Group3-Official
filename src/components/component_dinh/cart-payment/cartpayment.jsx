import React, { useState } from "react";
import '../Home/home.css'
import '../Home/header.css'
import '../Home/footer.css'
import './cartpayment.css'
import Header from '../Home/header'
import Footer from '../Home/footer'
import { Link } from 'react-router-dom'

const CartPayment = () => {
    return (
        <div className="background">
            <Header/>
            <div className="cart-payment-wrap">
                <div className="cart-wrap">
                    <h1 className="cart-payment-header">1. Kiểm tra giỏ hàng của bạn</h1>
                    <div className="cartlist-wrap">
                        <div className="cartlist-header">
                            <div className="cartlist-header-product">Sản phẩm</div>
                            <div className="cart-payment-header-price">Đơn giá</div>
                        </div>
                    </div>
                    <div className="total-price-wrap">
                        <div>Tổng giá:</div>
                        {/*LOGIC TINH TOAN O DAY*/ }
                        <div className="total-price-text"> XXX.XXX.XXX VND</div>
                    </div>
                    <form className="salecode-wrap">
                        <div>Mã khuyến mãi:</div>
                        <input type="text"/>
                        <button type="submit">Áp mã</button>
                    </form>
                </div>
                <div className="payment-wrap">
                <h1 className="cart-payment-header">2. Nhập thông tin thanh toán</h1>
                </div>
            </div>
            <Footer/>
        </div>
    )
}
export default CartPayment