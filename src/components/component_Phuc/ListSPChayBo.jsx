import React from 'react';
import data from '../../data/data.json';
import runtag from "../../data/assets/Resource/RunTag.png";
import '../../data/assets/css/style homepage.css';
import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Link } from 'react-router-dom';
import CarouselComponent from './CarouselComponent';
import './listsp.css'

function ListSPChayBo() {

    const [dataAPI, setDataAPI] = useState(null);
    const [ CartListRun, setCartListRun ]= useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch('https://66bf265342533c403145399b.mockapi.io/ListSPChayBo');
                const data = await res.json();
                setDataAPI(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);

    //TẠO ARRAY ADD CART
    const handleAddCartRun = (item) => {
        const newItemAdded = {
            itemName: item.name,
            itemPrice: item.price,
            itemImage: item.image,
        };
        console.log(newItemAdded);
        setCartListRun(prev => [...prev, newItemAdded]);
    
    };

    useEffect(() => {
        
        localStorage.setItem('CartListRun', JSON.stringify(CartListRun));
    }, [CartListRun]);

    if (!dataAPI) {
        return <p>Loading...</p>;
    }

    // const [dataProductRun, setDataproductRun] = useState([]);

    // useEffect(() => {
    //     const newData = data.productRun.map(item => ({
    //         id: uuidv4(),
    //         ...item
    //     }));

    //     setDataproductRun([...newData]);
    // }, [data.productRun]);

    return (
        <div>
            <div id="newproduct-header">Sản phẩm chạy bộ</div>
            <div className="container">
                {/* <div className="row g-4 my-5 mx-auto owl-carousel owl-theme"> */}
                <CarouselComponent>
                    {dataAPI.map((item) => {
                        return <div className="col product-item mx-auto margin-important" key={item.id}>
                            <div className="product-img">
                                <img src={item.image} alt="" className="img-fluid d-block mx-auto"></img>
                                <span className="heart-icon">
                                    <img src={runtag} height="20px" alt="Run Tag"></img>
                                </span>
                                <div className="row btns w-100 mx-auto text-center">
                                    <button type="button" className="col-6 py-2" onClick={() => handleAddCartRun(item)}>
                                        <i className="fa fa-cart-plus"></i> Thêm vào giỏ
                                    </button>
                                    <button type="button" className="col-6 py-2">
                                        <Link to={{
                                            pathname: `/Products/${item.id}`
                                        }} state={{ item }}>
                                            <i className="fa fa-cart-plus" style={{ color: "white!" }}></i> Xem chi tiết
                                        </Link>
                                    </button>
                                </div>
                            </div>

                            <div className="product-info p-3">
                                <span className="product-type">{item.type}</span>
                                <Link to={{
                                            pathname: `/Products/${item.id}`
                                        }} state={{ item }} className="d-block text-dark text-decoration-none py-2 product-name">{item.name}</Link>
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
                </CarouselComponent>
                {/* </div> */}
            </div>
        </div>
    );
}

export default ListSPChayBo;