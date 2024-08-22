import React from "react";
import './home.css'

const ProductRequest = () => {

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const request = document.getElementById("productOrder").value;
    const customername = document.getElementById("requesterName").value;
    const customerphone = document.getElementById("requesterTell").value;
    const customeremail = document.getElementById("requesterEmail").value;
    
    const productRequest = {
      request,
      customername,
      customerphone,
      customeremail,
    };

    try {
      // Make a POST request to the mock API
      const response = await fetch(
        "https://66c6baee8b2c10445bc77fa9.mockapi.io/productrequest",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(productRequest),
        }
      );

      if (response.ok) {
        alert("Yêu cầu của bạn đã được tiếp nhận, Ricky Store sẽ liên hệ tới bạn trong thời gian sớm nhất!");
      } else {
        alert("Yêu cầu chưa được ghi nhận, vui lòng thử lại sau!");
      }
    } catch (error) {
      console.error("Sending request:", error);
    }
  };
  

    return(
    <div id="container-request">
        <div class="container-request-mess">
         <p>Thỏa cá tính với sản phẩm may đo riêng biệt, dành riêng cho bạn!</p>
        </div>
        <div class="container-form">
          <p class="form-header">Gửi yêu cầu cho Ricky Store</p>
        <form onSubmit={handleSubmit}>
        <div>
          <label class="form-label">Sản phẩm và số lượng bạn cần:</label>
          <input class="form-input" id="productOrder" type="text" placeholder="VD:Áo thun UV 2 cái" required/>
        </div>
        <div>
          <label class="form-label">Họ và tên của bạn:</label>
          <input class="form-input" id="requesterName" type="text" placeholder="VD: Nguyễn Văn A" required/>
        </div>
        <div>
          <label class="form-label">Số điện thoại của bạn:</label>
          <input class="form-input" id="requesterTell" type="tel" placeholder="VD: 0395 381 xxx" required/>
        </div>
        <div>
          <label class="form-label">Email của bạn:</label>
          <input class="form-input" id="requesterEmail" type="email" placeholder="VD: xxx@gmail.com" required/>
        </div>
        <button id="submit-button" type="submit">Gửi yêu cầu</button>
      </form>
    </div>
    </div>
    )
}

export default ProductRequest