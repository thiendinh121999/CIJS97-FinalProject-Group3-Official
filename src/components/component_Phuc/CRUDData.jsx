import React from 'react'
import data from '../../data/data.json';


function CRUDData() {

    // Chinh
    // const BASE_URL = 'https://66beccce42533c40314414cb.mockapi.io/'

    // Tam
    const BASE_URL = 'https://66bf265342533c403145399b.mockapi.io/'


    const GetData = async () => {
        try {
            const res = await fetch(`${BASE_URL}/Test`)
            const data = res.json();

            console.log(data)
        } catch (error) {
            console.log(error)
        }
    }

    const CreateData = async () => {
        try {
            await fetch(`${BASE_URL}/Test`, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    name: "Combo 3 Quần Lót Nam Trunk Excool Basics",
                    type: "Đồ lót nam",
                    description: "Microfiber/Xanh trắng",
                    colorurl: "https://media3.coolmate.me/cdn-cgi/image/width=160,height=160,quality=80,format=auto/uploads/August2023/APoL100-mau2-5.jpg",
                    price: 299000,
                    image: "https://media3.coolmate.me/cdn-cgi/image/width=672,height=990,quality=85/uploads/March2024/thumb24CMAW.AT015.24.jpg",
                    review: 78,
                    detailimage1: "https://media3.coolmate.me/cdn-cgi/image/quality=80,format=auto/uploads/May2024/qddpden2.jpg",
                    detailimage2: "https://media3.coolmate.me/cdn-cgi/image/quality=80,format=auto/uploads/May2024/qddpden3.jpg",
                    detailimage3: "https://media3.coolmate.me/cdn-cgi/image/quality=80,format=auto/uploads/May2024/qddpden4.jpg",
                    detailimage4: "https://media3.coolmate.me/cdn-cgi/image/quality=80,format=auto/uploads/May2024/qddpden5.jpg",
                    detailimageBig1: "https://mcdn.coolmate.me/image/March2023/quan-jogger-nam-dac-diem-noi-bat.jpg",
                    detailimageBig2: "https://mcdn.coolmate.me/image/March2023/quan-jogger-nam-soi-sorona.jpg",
                })
            })
        } catch (error) {
            console.log(error)
        }
    }

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
        <div>
            <button onClick={GetData}>FetchData</button>
            <button onClick={CreateData}>Post data mới </button>
            <button onClick={UpdateOne}>Patch cập nhật</button>
            <button onClick={DeleteOne}>Delete xoá</button>
        </div>
    )
}

export default CRUDData