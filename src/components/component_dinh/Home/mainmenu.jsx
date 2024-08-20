import React, { useRef} from "react";
import './mainmenu.css'

const MainMenu = () => {

  const listRef = useRef(null);

  const scrollToList = () => {
    if (listRef.current) {
      listRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }
  return (
    <div>
      <div className="mainmenu">
        <div className="mainmenu-logo">
          <a href="/"><img src={require('../../../img/Logo 2.png')} /></a>
        </div>
        <div className="mainmenu-link">
          <a href="#newproduct-header" onClick={scrollToList}>
            <div className="mainmenu-link-product">SẢN PHẨM MỚI</div>
          </a>
          <a href="#seasonal" onClick={scrollToList}>
            <div className="mainmenu-link-item">ĐỒ THEO MÙA</div>
          </a>
          <a href="#running" onClick={scrollToList}>
            <div className="mainmenu-link-item">ĐỒ CHẠY BỘ</div>
          </a>
          <a href="#thun" onClick={scrollToList}>
            <div className="mainmenu-link-item">ĐỒ THUN NAM</div>
          </a>
          <a href="./index.html#container-request">
            <div className="mainmenu-link-item">SẢN XUẤT RIÊNG</div>
          </a>
        </div>
        <div className="search-cart">
          <div className="searchbar">
            <div className="search-icon">
              <img src={require('../../../img/768px-Search_Icon.svg.png')} />
            </div>
            <div className="search-input">
              <input type="text" placeholder="Tìm sản phẩm..." />
            </div>
          </div>
          <div className="img-cart">
            <img src={require('../../../img/bag.jpg')} height="30px" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainMenu