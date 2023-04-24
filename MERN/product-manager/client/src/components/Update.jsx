import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from "react-router-dom"
import axios from 'axios';

const Update = (props) => {

    const { _id } = useParams();
    const [product, setProduct] = useState("")
    const [price, setPrice] = useState("")
    const [description, setDescription] = useState("")
    const [title, setTitle] = useState("")
    const navigate = useNavigate()

    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${_id}`)
            .then((res) => {
                console.log("update:line 17", res.data);
                console.log("update:line 18", res);
                setProduct(res.data.product)
                setPrice(res.data.price);
                setDescription(res.data.description)
                setTitle(res.data.title)
            })
            .catch((err) => console.log("update:line 22: error", err))
    },[])

    const submitHandler =(e)=>{
        e.preventDefault();
        axios.put(`http://localhost:8000/api/updateProduct/${_id}`,{
            product,
            price,
            description
        })
        .then((res)=>{
            console.log("update:line 35", res);
            console.log("update:line 36", res.data);
            navigate("/")
        })
        .catch((err) => console.log("update:line 38", err))
    }
    return (
        <div>
            <div>Edit {title}</div>
            <form className='form' onSubmit={submitHandler}>
                <div className='selection'>
                    <label>Product</label>
                    <input type="text"
                        value={product}
                        onChange={(e) => setProduct(e.target.value)}
                    />
                </div>
                <div className='selection'>
                    <label>Price</label>
                    <input type="number"
                        onChange={(e) => setPrice(e.target.value)}
                        value={price} />
                </div>
                <div className='selection'>
                    <label>Description</label>
                    <input type="text"
                        onChange={(e) => setDescription(e.target.value)}
                        value={description} />
                </div>
                <button className="createBtn" type="submit">
                Edit Pet
                </button>


            </form>
        </div>
    );
}

export default Update;
