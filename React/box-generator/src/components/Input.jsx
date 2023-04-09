import React, {useState} from 'react';

const Input = (props) => {
    const {input, setInput} = props
    console.log(props)

    const changeHandler = (e) => {
        setInput({[e.target.name]:e.target.value})
    }
    return (
        <div className='inputContainer'>
            <div className='inputDiv'>
                <h2>Color</h2>
                <form>
                    <input type="text" name='colorInput' onClick={changeHandler} />
                </form>
                <button>Add</button>
            </div>
        </div>
    );
}

export default Input;
