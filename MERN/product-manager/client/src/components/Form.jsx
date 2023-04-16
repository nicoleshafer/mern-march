import React, {useState} from 'react';
import axios from 'axios';

const Form = (props) => {

   const [title, setTitle] = useState("")
   const [price, setPrice] = useState("")
   const [description, setDescription] = useState("")

   const submitHandler = (e) => {
    e.preventDefault();

    axios.post("http://localhost:8000/api/createProduct", {
        title,
        price,
        description
    })
    .then((res) =>{
        console.log(res);
        console.log(res.data);
            setTitle("");
            setPrice("");
            setDescription("");
    })
    .catch((err) => {
        console.log(err)
    })
   }



    return (
        <div>
            <h1>Product Manager</h1>
            <form className='form' onSubmit={submitHandler}>
                <div className='selection'>
                    <label>Title</label>
                    <input type="text" 
                    onChange={(e) => setTitle(e.target.value)}
                    value =  {title} />
                </div>
                <div className='selection'>
                    <label>Price</label>
                    <input type="number" 
                    onChange={(e) => setPrice(e.target.value)}
                    value= {price}/>
                </div>
                <div className='selection'>
                    <label>Description</label>
                    <input type="text" 
                    onChange={(e) => setDescription(e.target.value)}
                    value={description}/>
                </div>
            <button className="createBtn" >
                Create
            </button>
            <input className="submit-input" type="submit" value="Create" />
            </form>
        </div>
    );
}

export default Form;
