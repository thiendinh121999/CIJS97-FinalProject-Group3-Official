import React from 'react'
import { Routes, Route, Outlet } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import data from '../../data/data.json';
import newtag from "../../data/assets/Resource/NewTag.png";

function Product() {

 

    return (
        <div>
            Day la product
            <Outlet></Outlet>
        </div>
    )
}

export default Product