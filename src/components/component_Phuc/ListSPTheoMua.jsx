import React from 'react';
import data from '../../data/data.json';
import newtag from "../../data/assets/Resource/NewTag.png";
import '../../data/assets/css/style homepage.css';
import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

function ListSPTheoMua() {

    const [dataProductSeasonal, setdataProductSeasonal] = useState([]);

    useEffect(() => {
        const newData = data.productSeasonal.map(item => ({
            id: uuidv4(),
            ...item
        }));

        setdataProductSeasonal([...newData]);
    }, [data.productSeasonal]);

    return (
        <div>
            <div id="newproduct-header">Sản phẩm theo mùa</div>
            <div className="container">
                <div className="row g-4 my-5 mx-auto owl-carousel owl-theme">
                    {dataProductSeasonal.map((item) => {
                        return <div className="col product-item mx-auto" key={item.id}>
                            <div className="product-img">
                                <img src={item.image} alt="" className="img-fluid d-block mx-auto"></img>
                                <span className="heart-icon">
                                    <img src={newtag} height="20px" alt="New Tag"></img>
                                </span>
                                <div className="row btns w-100 mx-auto text-center">
                                    <button type="button" className="col-6 py-2">
                                        <i className="fa fa-cart-plus"></i> Thêm vào giỏ
                                    </button>
                                    <button type="button" className="col-6 py-2">
                                        <i className="fa fa-binoculars"></i> Xem chi tiết
                                    </button>
                                </div>
                            </div>

                            <div className="product-info p-3">
                                <span className="product-type">{item.type}</span>
                                <a href="#" className="d-block text-dark text-decoration-none py-2 product-name">{item.name}</a>
                                <p className="prodescript">{item.description}</p>
                                <span className="product-price">VND {item.price}</span>
                                <div className="rating d-flex mt-1">
                                    <span>
                                        <i className="fa fa-star"></i>
                                    </span>
                                    <span>
                                        <i className="fa fa-star"></i>
                                    </span>
                                    <span>
                                        <i className="fa fa-star"></i>
                                    </span>
                                    <span>
                                        <i className="fa fa-star"></i>
                                    </span>
                                    <span>
                                        <i className="fa fa-star"></i>
                                    </span>
                                    <span>({item.review} đánh giá)</span>
                                </div>
                            </div>

                        </div>
                    })}
                </div>

            </div>
        </div>
    );
}

export default ListSPTheoMua;
