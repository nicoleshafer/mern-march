import React, { useEffect } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';


const All = (props) => {

    const {list,setList} = props;
    
    useEffect(() =>{
        axios.get("http://localhost:8000/api/products")
            .then((res) => {
                console.log("this is line 16", res);
                console.log("this is line 17", res.data);
                setList(res.data.allProducts)
            })
            .catch((err) => console.log(err)
            )

    }, [setList])

    const deleteHandler = (idFromBelow) => {
        axios.delete(`http://localhost:8000/api/deleteProduct/${idFromBelow}`)
        .then((res)=>{
            console.log('all: line 29', res);
            console.log('all: line 29', res.data);
            setList(list.filter((product, index)=>product._id !== idFromBelow)) 
        })
        .catch((err)=> console.log(err))
    }
   
    return (
        <div>
            <div className='break'> </div>
            <div>
                <p>All Products:</p>
            </div>
            {
                list.map((product, index) =>(
                    <div key={product._id}>
                        <Link to={`/product/${product._id}`} >{product.product} </Link>
                        
                        <Link to={`/product/edit/${product._id}`} className="fontStyles">Edit </Link>
                        <button onClick={() => deleteHandler(product._id)}>Delete</button>
                    </div>
                ))
            }
        </div>
    );
}

export default All;
