import React, { useState, useEffect } from 'react'

function ManageRequest() {

    const BASE_URL_REQUEST = 'https://66c6baee8b2c10445bc77fa9.mockapi.io/productrequest'


    const [dataAPI, setDataAPI] = useState(null);
    const [CheckAPI, setCheckAPI] = useState(0)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch(`${BASE_URL_REQUEST}`);
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
            await fetch(`${BASE_URL_REQUEST}/${id}`, {
                method: 'DELETE',
            });

            setCheckAPI(prev => prev + 1);
            setDataAPI(null);
        } catch (error) {
            console.log(error);
        }
    };
    console.log(dataAPI)
    return (
        <div className='container'>
            <div className="d-flex justify-content-center"><h4>CUSTOMER REQUEST</h4></div>
            <div className="container1 mt-5">
            
                {dataAPI.map((item, idx) => {
                    return <div className="row tm-content-row" key={item.id}>
                        <div className="col-sm-12 col-md-12 col-lg-8 col-xl-8 tm-block-col" style={{ width: "100%" }}>
                            <div className="tm-bg-primary-dark tm-block tm-block-products">
                                <div className="tm-product-table-container">
                                    <table className="table table-hover tm-table-small tm-product-table">
                                        <thead>
                                            <tr>
                                                <th scope="col" style={{ width: '27px' }}>&nbsp;</th>
                                                <th scope="col" style={{ width: '52px' }}>STT</th>
                                                
                                                <th scope="col" style={{ width: '225px' }}>CUSTOMER NAME</th>
                                                <th scope="col" style={{ width: '200px' }}>CUSTOMER PHONE</th>
                                                <th scope="col" style={{ width: '210px' }}>CUSTOMER MAIL</th>
                                                <th scope="col" style={{ width: '300px' }}>REQUEST</th>
                                                
                                                <th scope="col">&nbsp;</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th scope="row" style={{ width: '27px' }}>
                                                    <input type="checkbox" />
                                                </th>
                                                <td style={{ width: '52px' }}>{idx + 1}</td>
                                                
                                                <td className="tm-product-name" style={{ width: '225px' }}>{item.customername}</td>
                                                <td style={{ width: '200px' }}>{item.customerphone}</td>
                                                <td style={{ width: '210px' }}>{item.customeremail}</td>
                                                <td style={{ width: '300px' }}>{item.request}</td>
                                                
                                                <td>
                                                    <a onClick={() => DeleteOne(item.id)} className="tm-product-delete-link">
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

            </div>
        </div>
    )
}

export default ManageRequest