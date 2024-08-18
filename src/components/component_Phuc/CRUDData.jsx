import React from 'react'
import data from '../../data/data.json';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


function CRUDData() {

    // Chinh
    const BASE_URL = 'https://66beccce42533c40314414cb.mockapi.io/'

    // Tam
    // const BASE_URL = 'https://66bf265342533c403145399b.mockapi.io/'

    const [dataAPI, setDataAPI] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch(`${BASE_URL}/ListSPMoi-ChayBo`);
                const data = await res.json();
                setDataAPI(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);

    if (!dataAPI) {
        return <p>Loading...</p>;
    }

    // const GetData = async () => {
    //     try {
    //         const res = await fetch(`${BASE_URL}/ListSPMoi-ChayBo`)
    //         const data = res.json();

    //         console.log(data)
    //         setDataAPI(data);
    //     } catch (error) {
    //         console.log(error)
    //     }
    // }


    // const CreateData = async () => {
    //     try {
    //         await fetch(`${BASE_URL}/Test`, {
    //             method: 'POST',
    //             headers: {
    //                 "Content-Type": "application/json"
    //             },
    //             body: JSON.stringify({
    //                 name: "Combo 3 Quần Lót Nam Trunk Excool Basics",
    //                 type: "Đồ lót nam",
    //                 description: "Microfiber/Xanh trắng",
    //                 colorurl: "https://media3.coolmate.me/cdn-cgi/image/width=160,height=160,quality=80,format=auto/uploads/August2023/APoL100-mau2-5.jpg",
    //                 price: 299000,
    //                 image: "https://media3.coolmate.me/cdn-cgi/image/width=672,height=990,quality=85/uploads/March2024/thumb24CMAW.AT015.24.jpg",
    //                 review: 78,
    //                 detailimage1: "https://media3.coolmate.me/cdn-cgi/image/quality=80,format=auto/uploads/May2024/qddpden2.jpg",
    //                 detailimage2: "https://media3.coolmate.me/cdn-cgi/image/quality=80,format=auto/uploads/May2024/qddpden3.jpg",
    //                 detailimage3: "https://media3.coolmate.me/cdn-cgi/image/quality=80,format=auto/uploads/May2024/qddpden4.jpg",
    //                 detailimage4: "https://media3.coolmate.me/cdn-cgi/image/quality=80,format=auto/uploads/May2024/qddpden5.jpg",
    //                 detailimageBig1: "https://mcdn.coolmate.me/image/March2023/quan-jogger-nam-dac-diem-noi-bat.jpg",
    //                 detailimageBig2: "https://mcdn.coolmate.me/image/March2023/quan-jogger-nam-soi-sorona.jpg",
    //             })
    //         })
    //     } catch (error) {
    //         console.log(error)
    //     }
    // }

    const UpdateOne = async (id) => {
        try {
            await fetch(`${BASE_URL}/Test/2`, {
                method: 'PUT',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    name: "Update test",
                    type: "Update data",
                    description: "Test lan thu 3",
                })
            })
        } catch (error) {
            console.log(error)
        }

    }

    const DeleteOne = async (id) => {
        try {
            await fetch(`${BASE_URL}/Test/3`, {
                method: 'DELETE',
            })
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className='container'>
            {/* <button onClick={GetData}>FetchData</button> */}
            {/* <button onClick={CreateData}>Post data mới </button> */}
            <button onClick={UpdateOne}>Patch cập nhật</button>
            <button onClick={DeleteOne}>Delete xoá</button>

            <div className="container mt-5">
                {dataAPI.map((item, idx) => {
                    return <div className="row tm-content-row" key={item.id}>
                        <div className="col-sm-12 col-md-12 col-lg-8 col-xl-8 tm-block-col" style={{width: "100%"}}>
                            <div className="tm-bg-primary-dark tm-block tm-block-products">
                                <div className="tm-product-table-container">
                                    <table className="table table-hover tm-table-small tm-product-table">
                                        <thead>
                                            <tr>
                                                <th scope="col" style={{width:'27px'}}>&nbsp;</th>
                                                <th scope="col" style={{width:'52px'}}>STT</th>
                                                <th scope="col" style={{width:'33px'}}>ID</th>
                                                <th scope="col" style={{width:'418px'}}>PRODUCT NAME</th>
                                                <th scope="col" style={{width:'123px'}}>TYPE</th>
                                                <th scope="col" style={{width:'210px'}}>DESCRIPTION</th>
                                                <th scope="col" style={{width:'82px'}}>PRICE</th>
                                                <th scope="col" style={{width:'82px'}}>IMAGE</th>
                                                <th scope="col">&nbsp;</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th scope="row" style={{width:'27px'}}>
                                                    <input type="checkbox" />
                                                </th>
                                                <td style={{width:'52px'}}>{idx+1}</td>
                                                <td style={{width:'33px'}}>{item.id}</td>
                                                <td className="tm-product-name" style={{width:'418px'}}>{item.name}</td>
                                                <td style={{width:'123px'}}>{item.type}</td>
                                                <td style={{width:'210px'}}>{item.description}</td>
                                                <td style={{width:'82px'}}>{item.price}</td>
                                                <td><img src={item.image} alt="" style={{ width: "82px" }} /></td>
                                                <td>
                                                    <a href="#" className="tm-product-delete-link">
                                                        <i className="far fa-trash-alt tm-product-delete-icon" />
                                                    </a>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>


                            </div>
                        </div>
                    </div>
                })}
                {/* table container */}
                <div style={{display:'flex', justifyContent:'space-evenly'}}>
                    <Link className="btn btn-primary btn-block text-uppercase mb-3" to={"/Admin/AddProduct"}>
                        Add new product
                    </Link>
                    <button className="btn btn btn-danger btn-block text-uppercase" style={{ marginBottom: "16px" }}>
                        Delete selected products
                    </button>
                </div>

                {/* <div className="col-sm-12 col-md-12 col-lg-4 col-xl-4 tm-block-col">
                    <div className="tm-bg-primary-dark tm-block tm-block-product-categories">
                        <h2 className="tm-block-title">Product Categories</h2>
                        <div className="tm-product-table-container">
                            <table className="table tm-table-small tm-product-table">
                                <tbody>
                                    <tr>
                                        <td className="tm-product-name">Product Category 1</td>
                                        <td className="text-center">
                                            <a href="#" className="tm-product-delete-link">
                                                <i className="far fa-trash-alt tm-product-delete-icon" />
                                            </a>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div> */}
                        {/* table container */}
                        {/* <button className="btn btn-primary btn-block text-uppercase mb-3">
                            Add new category
                        </button>
                    </div>
                </div> */}
            </div>
        </div>
    )
}

export default CRUDData