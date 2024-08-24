import React, { useState, useEffect } from 'react';
import { Link, Outlet } from 'react-router-dom';

function ManageOrder() {
    const BASE_URL_ORDER = 'https://66c6baee8b2c10445bc77fa9.mockapi.io/productorder';

    const [dataAPI, setDataAPI] = useState(null);
    const [CheckAPI, setCheckAPI] = useState(0);
    const [showOrderList, setShowOrderList] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch(`${BASE_URL_ORDER}`);
                const data = await res.json();
                setDataAPI(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, [CheckAPI]);

    if (!dataAPI) {
        return <p>Loading...</p>;
    }

    const DeleteOne = async (id) => {
        try {
            await fetch(`${BASE_URL_ORDER}/${id}`, {
                method: 'DELETE',
            });

            setCheckAPI(prev => prev + 1);
            setDataAPI(null);
        } catch (error) {
            console.log(error);
        }
    };

    const handleButtonClick = (id) => {
        setShowOrderList(showOrderList === id ? null : id);
    };

    return (
        <div>
            <div className="col-12 tm-block-col">
                <div className="tm-bg-primary-dark tm-block tm-block-taller tm-block-scroll">
                    <h2 className="tm-block-title">Orders List</h2>
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">ORDER NO.</th>
                                <th scope="col">BUYER NAME</th>
                                <th scope="col">BUYER PHONE</th>
                                <th scope="col">LOCATION</th>
                                <th scope="col">DISTANCE</th>
                                <th scope="col">TOTAL BILL</th>
                                <th scope="col">ORDER LIST</th>
                                <th scope="col">&nbsp;</th>
                            </tr>
                        </thead>
                        <tbody>
                            {dataAPI.map((item) => (
                                <React.Fragment key={item.id}>
                                    <tr>
                                        <th scope="row"><b>#{item.id}</b></th>
                                        <td>
                                            <div className="tm-status-circle moving"></div>{item.buyername}
                                        </td>
                                        <td><b>{item.buyerphone}</b></td>
                                        <td><b>{item.buyeradress}</b></td>
                                        <td><b>485 km</b></td>
                                        <td>{item.totalbill} vnđ</td>
                                        <td>
                                            <button type="button" className="btn btn-link" onClick={() => handleButtonClick(item.id)}>
                                                {showOrderList === item.id ? 'Hide Order List' : 'Show Order List'}
                                            </button>
                                        </td>
                                        <td>
                                            <a onClick={() => DeleteOne(item.id)} className="tm-product-delete-link">
                                                <i className="far fa-trash-alt tm-product-delete-icon" />
                                            </a>
                                        </td>
                                    </tr>
                                    {showOrderList === item.id && (
                                        <tr>
                                            <td colSpan="7">
                                                <ul>
                                                    {item.orderlist.map((orderItem, index) => (
                                                        <li key={index}>
                                                            {orderItem.itemName} - {orderItem.itemPrice} vnđ
                                                        </li>
                                                    ))}
                                                </ul>
                                            </td>
                                        </tr>
                                    )}
                                </React.Fragment>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default ManageOrder;
