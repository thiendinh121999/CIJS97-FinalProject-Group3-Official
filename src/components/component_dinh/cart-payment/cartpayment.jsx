import '../Home/home.css'
import '../Home/header.css'
import '../Home/footer.css'
import './cartpayment.css'
import Header from '../Home/header'
import Footer from '../Home/footer'
import { Link } from 'react-router-dom'
import { useState, useEffect } from "react";

const CartPayment = () => {
    const initCartDetailNew = localStorage.getItem("CartListNew") ? JSON.parse(localStorage.getItem("CartListNew")) : [] ;
    const initCartDetailRun = localStorage.getItem("CartListRun") ? JSON.parse(localStorage.getItem("CartListRun")) : [] ;
    const initCartDetailSeasonal = localStorage.getItem("CartListSeasonal") ? JSON.parse(localStorage.getItem("CartListSeasonal")) : [] ;
    const initCartDetailDetailPage = localStorage.getItem("CartListDetailPage") ? JSON.parse(localStorage.getItem("CartListDetailPage")) : [] ;
    const [cartDetailNew, setcartDetailNew] = useState(initCartDetailNew)
    const [cartDetailRun, setcartDetailRun] = useState(initCartDetailRun)   
    const [cartDetailSeasonal, setcartDetailSeasonal] = useState(initCartDetailSeasonal)
    const [cartDetailDetailPage, setcartDetailDetailPage] = useState(initCartDetailDetailPage)
    const [totalPrice, settotalPrice] = useState(0)
    const [currentUser, setCurrentUser] = useState(JSON.parse(localStorage.getItem("user")) || null);
    const totalBillPreset = totalPrice;
    const [totalBill, settotalBill] = useState(totalBillPreset)
    console.log("totalBillPreset",totalBillPreset)
    const initConfirmedBuyList = [...cartDetailNew, ...cartDetailRun, ...cartDetailSeasonal, ...cartDetailDetailPage] || []
    const [confimredBuyList, setConfirmedBuyList] = useState(initConfirmedBuyList);
    //Update cart list
    useEffect (()=> {
        const updateDetailList = () => {
            setcartDetailNew(JSON.parse(localStorage.getItem("CartListNew")) || []);
            setcartDetailRun(JSON.parse(localStorage.getItem("CartListRun")) || []);
            setcartDetailSeasonal(JSON.parse(localStorage.getItem("CartListSeasonal")) || []);
            setcartDetailDetailPage(JSON.parse(localStorage.getItem("CartListDetailPage")) || []);
            console.log("cartDetailNew",cartDetailNew)
            console.log("cartDetailRun",cartDetailRun)
            console.log("cartDetailSeasonal",cartDetailSeasonal)
            console.log("cartDetailDetailPage",cartDetailDetailPage)
            const totalPriceNew = cartDetailNew.reduce((acc, item) => acc + JSON.parse(item.itemPrice), 0);
            const totalPriceRun = cartDetailRun.reduce((acc, item) => acc + JSON.parse(item.itemPrice), 0);
            const totalPriceSeasonal = cartDetailSeasonal.reduce((acc, item) => acc + JSON.parse(item.itemPrice), 0);
            const totalPriceDetailPage = cartDetailDetailPage.reduce((acc, item) => acc + JSON.parse(item.itemPrice), 0);
            console.log("totalPriceNew",totalPriceNew)
            console.log("totalPriceRun",totalPriceRun)
            console.log("totalPriceSeasonal",totalPriceSeasonal)
            console.log("totalPriceDetailPage",totalPriceDetailPage)
            settotalPrice(totalPriceNew + totalPriceRun + totalPriceSeasonal + totalPriceDetailPage);
            settotalBill(totalPriceNew + totalPriceRun + totalPriceSeasonal + totalPriceDetailPage);
            return;
        };
        
        //Initial call
        updateDetailList()
        
       //Recall the funtion
        window.addEventListener('storage', (e) => {
            console.log(e)
            console.log("Event happens!")
            updateDetailList()
          });
    }, []);

    //Áp mã khuyến mãi
    const handleSaleCode = async (e) => {
        e.preventDefault()
        const salesCodeInput = document.getElementById("salecode-input").value;
        console.log("currentUser", currentUser)
        if (currentUser !== null) {
            try {
                const response = await fetch("https://66c4132cb026f3cc6cedf048.mockapi.io/salescode");
                if (response.ok) {
                    const salesCodesData = await response.json();
                    const foundSalesCode = salesCodesData.find(
                        (salescode) => salescode.code === salesCodeInput
                    );
    
                    if (foundSalesCode) {
                        // Valid sales code: Halve off the total bill
                        settotalBill((prevTotalBill) => prevTotalBill * 0.5);
                        alert("Áp mã khuyến mãi thành công!");                      
                    } else {
                        // Invalid sales code
                        alert("Mã khuyến mãi không đúng, vui lòng thử lại!");
                    }
                } else {
                    console.error("Error fetching sales codes:", response.status);
                }
            } catch (error) {
                console.error("Error fetching sales codes:", error);
            }
        } else {
            alert("Vui lòng đăng nhập hoặc đăng ký thành viên để sử dụng mã khuyến mãi!");
        }
    };



    //Delete Cart
    const handleDeleteCart = () =>{
        localStorage.removeItem("CartListNew");
        localStorage.removeItem("CartListRun");
        localStorage.removeItem("CartListSeasonal");
        localStorage.removeItem("CartListDetailPage");
        setcartDetailNew([])
        setcartDetailRun([])
        setcartDetailSeasonal([])
        setcartDetailDetailPage([])
        settotalPrice(0)
        settotalBill(0)
    }
    
    //Xac nhan mua hang

    const handleConfirmPurchase = async (e) =>{
        e.preventDefault();
        setConfirmedBuyList([...cartDetailNew, ...cartDetailRun, ...cartDetailSeasonal, ...cartDetailDetailPage]);
        const buyername = document.getElementById("buyername").value;
        const buyerphone = document.getElementById("buyerphone").value;
        const buyeradress = document.getElementById("buyeradress").value;
        const orderlist = confimredBuyList;
        const totalbill = totalBill;
        const cardnumber = document.getElementById("buyercardnumber").value;
        console.log("orderlist", orderlist)
        
        const confirmedOrder = {
            buyername,
            buyerphone,
            buyeradress,
            orderlist,
            totalbill,
            cardnumber
        }
        try {
            // Make a POST request to the mock API
            const response = await fetch(
              "https://66c6baee8b2c10445bc77fa9.mockapi.io/productorder", // Corrected API endpoint
              {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify(confirmedOrder),
              }
            );
      
            if (response.ok) {
            alert("Đơn hàng đã được tiếp nhận, cám ơn bạn đã mua hàng!");
            window.location.href = "/"; // Redirect to home
            localStorage.removeItem("CartListNew");
            localStorage.removeItem("CartListRun");
            localStorage.removeItem("CartListSeasonal");
            localStorage.removeItem("CartListDetailPage");
            } else {
              alert("Đơn hàng chưa được tiếp nhận, xin vui lòng thử lại");
            }
          } catch (error) {
            console.error("Error registering user:", error);
          }
          
          
    }

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
                        <div className="cart-detail-list-wrap">

                            {cartDetailNew.map((item) => (
                                <div className="cart-item-wrap">
                                    <img className="cart-prduct-image" src={item.itemImage}/>
                                    <div className="cart-item-name">{item.itemName}</div>
                                    <div className="cart-item-price">{item.itemPrice} VND</div>
                                </div>
                            ))}
                            {cartDetailRun.map((item) => (
                                <div className="cart-item-wrap">
                                    <img className="cart-prduct-image" src={item.itemImage}/>
                                    <div className="cart-item-name">{item.itemName}</div>
                                    <div className="cart-item-price">{item.itemPrice} VND</div>
                                </div>
                            ))}
                            {cartDetailSeasonal.map((item) => (
                                <div className="cart-item-wrap">
                                    <img className="cart-prduct-image" src={item.itemImage}/>
                                    <div className="cart-item-name">{item.itemName}</div>
                                    <div className="cart-item-price">{item.itemPrice} VND</div>
                                </div>
                            ))}
                            {cartDetailDetailPage.map((item) => (
                                <div className="cart-item-wrap">
                                    <img className="cart-prduct-image" src={item.itemImage}/>
                                    <div className="cart-item-name">{item.itemName}</div>
                                    <div className="cart-item-price">{item.itemPrice} VND</div>
                                </div>
                            ))}
                        </div>
                        <button onClick={handleDeleteCart} className="delete-cart-btn">Xóa giỏ hàng</button>
                    </div>
                    <div className="total-price-wrap">
                        <div>Tổng giá:</div>
                        {/*LOGIC TINH TOAN O DAY*/ }
                        <div className="total-price-text"> {totalPrice} VND</div>
                    </div>
                    <form onSubmit={handleSaleCode} className="salecode-wrap">
                        <div>Mã khuyến mãi:</div>
                        <div className="salecode-input-wrap">
                            <input type="text" id="salecode-input" placeholder="Member only"/>
                            <button type="submit" id="salecode-btn">Áp mã</button>
                        </div>
                    </form>
                    <div className="total-bill-wrap">
                        <div>Thành tiền:</div>
                        {/*LOGIC TINH TOAN O DAY*/ }
                        <div className="total-bill-text"> {totalBill} VND</div>
                    </div>
                </div>
                <div className="payment-wrap">
                <h1 className="cart-payment-header">2. Thông tin mua hàng</h1>
                <form className="payment-form-wrap" onSubmit={handleConfirmPurchase}>
                    <div className="payment-form-item-wrap" >
                        <label>Họ tên của bạn:</label>
                        <input type="text" className="payment-input" id="buyername" required/>
                    </div>
                    <div className="payment-form-item-wrap">
                        <label>Số điện thoại của bạn:</label>
                        <input type="text" className="payment-input" id="buyerphone" required/>
                    </div>
                    <div className="payment-form-item-wrap">
                        <label>Email của bạn:</label>
                        <input type="email" className="payment-input" id="buyeremail" required/>
                    </div>
                    <div className="payment-form-item-wrap">
                        <label>Địa chỉ giao hàng:</label>
                        <input type="text" className="payment-input" id="buyeradress" required/>
                    </div>
                    <div className="payment-form-item-wrap">
                        <label>Thẻ thanh toán:</label>
                        <input type="text" className="payment-input" id="buyercardnumber" required/>
                    </div>
                    <div className="payment-form-item-wrap">
                        <label>Mã CVC(*):</label>
                        <input type="text" className="payment-input" required/>
                    </div>
                    <button type="submit" className="payconfirm-btn">Xác nhận mua hàng</button>
                </form>
                <i>(*)Mã CVC là 3 số cuối phía sau thẻ tín dụng/ghi nợ</i>
                
                </div>
            </div>
            <Footer/>
        </div>
    )
}
export default CartPayment