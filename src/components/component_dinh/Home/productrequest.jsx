import React from "react";
import './home.css'

const ProductRequest = () => {

    return(
    <div id="container-request">
        <div class="container-request-mess">
         <p>Thỏa cá tính với sản phẩm may đo riêng biệt, dành riêng cho bạn!</p>
        </div>
        <div class="container-form">
          <p class="form-header">Gửi yêu cầu cho Ricky Store</p>
        <form onsubmit="request()">
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