import React from 'react';
// import data from '../../data/data.json';
import newtag from "../../data/assets/Resource/NewTag.png";
import '../../data/assets/css/style homepage.css';
import { useState, useEffect } from 'react';
// import { v4 as uuidv4 } from 'uuid';
import { Link } from 'react-router-dom';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";




function ListSPMoi() {

    const [dataAPI, setDataAPI] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch('https://66beccce42533c40314414cb.mockapi.io/ListSPMoi-ChayBo');
                const dataAPI = await res.json();
                setDataAPI(dataAPI);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);




    // const [dataProductNew, setDatadataProductNew] = useState([]);

    // useEffect(() => {
    //     const newData = data.productNew.map(item => ({
    //         id: uuidv4(),
    //         ...item
    //     }));

    //     setDatadataProductNew([...newData]);
    // }, [data.productNew]);

    return (
        <div>
            <div id="newproduct-header">Sản phẩm mới</div>
            <div className="container">
                <div className="row g-4 my-5 mx-auto owl-carousel owl-theme">
                {Array.isArray(dataAPI) ? (dataAPI.map((item) => {
                        return <div className="col product-item mx-auto margin-important" key={item.id}>
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
                    })) : 
                    <p>Loading...</p>}
                    
                </div>
            </div>
        </div>
    );
}

export default ListSPMoi;
