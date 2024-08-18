import React from 'react'

function AddProduct() {
    return (
        <div className='container'>
            <div>
                <div>
                    <div className="container tm-mt-big tm-mb-big">
                        <div className="row">
                            <div className="col-xl-9 col-lg-10 col-md-12 col-sm-12 mx-auto">
                                <div className="tm-bg-primary-dark tm-block tm-block-h-auto">
                                    <div className="row">
                                        <div className="col-12">
                                            <h2 className="tm-block-title d-inline-block">Add Product</h2>
                                        </div>
                                    </div>

                                    <div className="row tm-edit-product-row">
                                        <div className="col-xl-6 col-lg-6 col-md-12">
                                            <form action="" className="tm-edit-product-form">
                                                <div className="form-group mb-3">
                                                    <label htmlFor="name">Product Name</label>
                                                    <input
                                                        id="name"
                                                        type="text"
                                                        className="form-control validate"
                                                        required=""
                                                    />
                                                </div>
                                                <div className="form-group mb-3">
                                                    <label htmlFor="description">Description</label>
                                                    <textarea
                                                        id='description'
                                                        className="form-control validate"
                                                        rows={2}
                                                        required=""
                                                        defaultValue={""}
                                                    />
                                                </div>
                                                <div className="form-group mb-3">
                                                    <label htmlFor="description">Type</label>
                                                    <textarea
                                                        id="type"
                                                        className="form-control validate"
                                                        rows={1}
                                                        required=""
                                                        defaultValue={""}
                                                    />
                                                </div>
                                                <div className="form-group mb-3">
                                                    <label htmlFor="description">Price (số)</label>
                                                    <textarea
                                                        id="price"
                                                        className="form-control validate"
                                                        rows={1}
                                                        required=""
                                                        defaultValue={0}
                                                    />
                                                </div>
                                                <div className="form-group mb-3">
                                                    <label htmlFor="description">Đường dẫn hình ảnh</label>
                                                    <textarea
                                                        id="image"
                                                        className="form-control validate"
                                                        rows={1}
                                                        required=""
                                                        defaultValue={""}
                                                    />
                                                </div>
                                                <div className="form-group mb-3">
                                                    <label htmlFor="category">Category</label>
                                                    <select
                                                        className="custom-select tm-select-accounts"
                                                        id="category">
                                                        <option selected="">Select category</option>
                                                        <option value={1}>New Product</option>
                                                        <option value={2}>Seasonal Product</option>
                                                        <option value={3}>Running Product</option>
                                                    </select>
                                                </div>
                                                <div className="row">
                                                    <div className="form-group mb-3 col-xs-12 col-sm-6">
                                                        <label htmlFor="expire_date">Review (số)</label>
                                                        <input
                                                            id="review"
                                                            type="text"
                                                            className="form-control validate"
                                                            data-large-mode="true"
                                                        />
                                                    </div>
                                                    <div className="form-group mb-3 col-xs-12 col-sm-6">
                                                        <label htmlFor="stock">Đường dẫn màu sắc</label>
                                                        <input
                                                            id="colorurl"
                                                            type="text"
                                                            className="form-control validate"
                                                            required=""
                                                        />
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                        <div className="col-xl-6 col-lg-6 col-md-12 mx-auto mb-4">
                                            <div className="tm-product-img-dummy mx-auto">
                                                <i className="fas fa-cloud-upload-alt tm-upload-icon" />
                                                <span>Chi tiết hình ảnh</span>
                                            </div>

                                            <form action="" className="tm-edit-product-form">
                                                <div className="form-group mb-3">
                                                    <label htmlFor="name">Đường dẫn ảnh chi tiết 1</label>
                                                    <input
                                                        id="detailimage1"
                                                        type="text"
                                                        className="form-control validate"
                                                        required=""
                                                    />
                                                </div>
                                                <div className="form-group mb-3">
                                                    <label htmlFor="name">Đường dẫn ảnh chi tiết 2</label>
                                                    <input
                                                        id="detailimage2"
                                                        type="text"
                                                        className="form-control validate"
                                                        required=""
                                                    />
                                                </div>
                                                <div className="form-group mb-3">
                                                    <label htmlFor="name">Đường dẫn ảnh chi tiết 3</label>
                                                    <input
                                                        id="detailimage3"
                                                        type="text"
                                                        className="form-control validate"
                                                        required=""
                                                    />
                                                </div>
                                                <div className="form-group mb-3">
                                                    <label htmlFor="name">Đường dẫn ảnh chi tiết 4</label>
                                                    <input
                                                        id="detailimage4"
                                                        type="text"
                                                        className="form-control validate"
                                                        required=""
                                                    />
                                                </div>

                                                <div className="form-group mb-3">
                                                    <label htmlFor="name">Đường dẫn ảnh giới thiệu 1</label>
                                                    <input
                                                        id="detailimageBig1"
                                                        type="text"
                                                        className="form-control validate"
                                                        required=""
                                                    />
                                                </div>
                                                <div className="form-group mb-3">
                                                    <label htmlFor="name">Đường dẫn ảnh giới thiệu 2</label>
                                                    <input
                                                        id="detailimageBig2"
                                                        type="text"
                                                        className="form-control validate"
                                                        required=""
                                                    />
                                                </div>
                                            </form>
                                        </div>
                                        <div className="col-12">
                                            <button
                                                type="submit"
                                                className="btn btn-primary btn-block text-uppercase"
                                            >
                                                Add Product Now
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default AddProduct