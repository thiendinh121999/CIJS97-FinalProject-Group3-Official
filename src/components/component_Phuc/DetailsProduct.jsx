import React, { useState } from 'react'
import { useParams } from 'react-router-dom'

import imgdetails1 from "../component_Phuc/imageDetails/Ao_San_Pham_Moi/Ao_San_Pham_Moi_1/AT.CP.220.webp"
import imgdetails2 from "../component_Phuc/imageDetails/Ao_San_Pham_Moi/Ao_San_Pham_Moi_1/AT.CP.221.webp"
import imgdetails3 from "../component_Phuc/imageDetails/Ao_San_Pham_Moi/Ao_San_Pham_Moi_1/AT.CP.223.webp"
import imgdetails4 from "../component_Phuc/imageDetails/Ao_San_Pham_Moi/Ao_San_Pham_Moi_1/AT.CP.224.webp"


function DetailsProduct() {

    const productId = useParams();
    console.log(productId)

    const [ImageShow, setImageShow] = useState(imgdetails1)
    const [ImageList, setImageList] = useState([
        {
            img: imgdetails1
        },
        {
            img: imgdetails2
        },
        {
            img: imgdetails3
        },
        {
            img: imgdetails4
        },
    ])
    const ChangeImageShow = (num) => {
        setImageShow(ImageList[num].img)
    }
    return (
        <div className='container text-center' style={{ height: "auto" }}>
            <div style={{ textAlign: "left" }}>
                <p>Trang chủ <span> / Chi tiết sản phẩm</span></p>
            </div>

            <div className='d-flex justify-content-evenly' style={{ marginTop: "20px" }}>
                <div style={{ width: "8%" }}>
                    <div >
                        <div onClick={() => ChangeImageShow(0)} style={{ padding: '20px' }}><img src={imgdetails1} style={{ maxWidth: '45px' }} /></div>
                        <div onClick={() => ChangeImageShow(1)} style={{ padding: '20px' }}><img src={imgdetails2} style={{ maxWidth: '45px' }} /></div>
                        <div onClick={() => ChangeImageShow(2)} style={{ padding: '20px' }}><img src={imgdetails3} style={{ maxWidth: '45px' }} /></div>
                        <div onClick={() => ChangeImageShow(3)} style={{ padding: '20px' }}><img src={imgdetails4} style={{ maxWidth: '45px' }} /></div>
                    </div>
                </div>

                <div style={{ width: "50%" }}>
                    <div>
                        <img src={ImageShow} style={{ height: "700px" }} />
                    </div>
                </div>


                <div style={{ width: "42%" }}>
                    <div>
                        <h1 className='' style={{ textAlign: "left" }}>Áo thun nam thể thao Active logo</h1>
                        <p className='text-start'>Thoáng khí</p>

                        <div style={{ textAlign: "left" }}>
                            <div><s>199.000đ</s></div>
                            <div>
                                <h3>99.000đ<span style={{ backgroundColor: "blue", color: "white", marginLeft: "10px" }}>-50%</span></h3>

                            </div>
                        </div>

                        <div className='rounded p-1 bg-opacity-10 border border-info border-start-0 rounded-end' style={{ display: "flex" }}>
                            <div>
                                <p><h6 style={{ color: "blue" }}>Áo thun thể thảo Coolmate Basics</h6></p>
                                <p><h6>Tặng cho hoá đơn thanh toán từ 399k</h6></p>
                            </div>
                            <div>
                                <img src="" alt="" />
                            </div>
                        </div>

                        <div>
                            <p>Mau sac: Xanh Navy</p>
                            <img src="" alt="" />
                        </div>

                        <div>
                            <p>Kich thuoc</p>
                            <span>S</span>
                            <span>M</span>
                            <span>L</span>
                            <span>XL</span>
                        </div>

                        <div className="alert alert-primary" role="alert">
                            A simple primary alert—check it out!
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default DetailsProduct