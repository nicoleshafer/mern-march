import React, {useState, useEffect} from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const One = () => {
    const[oneProduct, setOneProduct] = useState({})
    const {_id} = useParams();
    const navigate  = useNavigate();

    
    useEffect(()=>{
        axios.get(`http://localhost:8000/api/products/${_id}`)
        .then((res) =>{
            console.log(res);
            console.log(res.data);
            setOneProduct(res.data);
        })
        .catch((err) => console.log("this is line 16", err))
    }, [])

    const deleteHandler = () => {
        axios.delete(`http://localhost:8000/api/deleteProduct/${_id}`)
        .then((res)=>{
            console.log('all: line 22', res.data);
            navigate("/") 
        })
        .catch((err)=> console.log(err))
    }


    return (
        <div>
            <div>
                <h2>{oneProduct.product}</h2>
                <p>Price: ${oneProduct.price}</p>
                <p>Description: {oneProduct.description}</p>
                <Link to={"/"}>Home</Link>
            </div>
            <button onClick={deleteHandler}>Delete</button>
        </div>
    );
}

export default One;
