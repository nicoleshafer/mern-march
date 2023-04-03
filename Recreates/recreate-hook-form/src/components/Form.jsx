import React, { useState } from 'react';

const Form = () => {

    // const {data, setData} =useState("")

    return (
        <div>
            <form>
                <div className='inputBox'>
                    <label>First Name:</label>
                    <input type="text" />
                </div>
                <div className='inputBox'>
                    <label>Last Name:</label>
                    <input type="text" />
                </div>
                <div className='inputBox'>
                    <label>Email:</label>
                    <input type="email" />
                </div>
                <div className='inputBox'>
                    <label>Password:</label>
                    <input type="password" />
                </div>
                <div className='inputBox'>
                    <label>Confirm Password:</label>
                    <input type="password" />
                </div>
            </form>
            <h2>Your Form Data:</h2>
            <p>First Name:</p>
            <p>Last Name:</p>
            <p>Email:</p>
            <p>Password:</p>
            <p>Confirm Password:</p>
        </div>
    );
}

export default Form;
