import React, { useState } from 'react';

const Form = (e) => {
    const [email, setEmail] = useState('')
    const [lastName, setLastName] = useState('')
    const [firstName, setFirstName] = useState('')
    const [password, setPassword] = useState('')
    const [confirm, setConfirm] = useState('')


    const changeFirstName = (e) => {
        console.log(e.target.value)
        setFirstName(e.target.value)
    }
    const changeLastName = (e) => {
        console.log(e.target.value)
        setLastName(e.target.value)
    }
    const changeEmail = (e) => {
        console.log(e.target.value)
        setEmail(e.target.value)
    }
    const changePassword = (e) => {
        console.log(e.target.value)
        setPassword(e.target.value)
    }
    const changeConfirm = (e) => {
        console.log(e.target.value)
        setConfirm(e.target.value)
    }
    // e.preventDefault();

    return (
        <div>
            <form>
                <div>
                    <label >First Name</label>
                    <input type="text" name="firstName" onChange={changeFirstName} />
                </div>
                <div>
                    <label >Last Name</label>
                    <input type="text" name="lastName" onChange={changeLastName} />
                </div>
                <div>
                    <label >Email</label>
                    <input type="email" name="email" onChange={changeEmail} />
                </div>
                <div>
                    <label >Password </label>
                    <input type="password" name="password" onChange={changePassword} />
                </div>
                <div>
                    <label >Confirm Password</label>
                    <input type="password" name="password" onChange={changeConfirm} />
                </div>
                <div>
                    <p>Your form data:</p>
                    <p>First Name: {firstName} </p>
                    <p>Last Name: {lastName}</p>
                    <p>Email: {email}</p>
                    <p>Password: {password}</p>
                    <p>Confirm Password:{confirm}</p>
                </div>
            </form>
        </div>
    );
}

export default Form;
