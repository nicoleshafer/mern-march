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

    return (
        <div>
            <form>
                <div>
                    <label >First Name</label>
                    <input type="text" name="firstName"  onChange={changeFirstName} />
                    {
                        firstName.length < 3?
                        <p>First name must be at least 2 characters</p> :
                        null
                    }
                </div>
                <div>
                    <label >Last Name</label>
                    <input type="text" name="lastName" onChange={changeLastName} />
                    {
                        lastName.length < 3?
                        <p>Last name must be at least 2 characters</p> :
                        null
                    }
                </div>
                <div>
                    <label >Email</label>
                    <input type="email" name="email" onChange={changeEmail} />
                    {
                        email.length < 3?
                        <p>Email must be at least 2 characters</p> :
                        null
                    }
                </div>
                <div>
                    <label >Password </label>
                    <input type="password" name="password" onChange={changePassword} />
                    {
                        password.length < 3?
                        <p>Password must be at least 2 characters</p> :
                        null
                    }
                    {
                        password === confirm?
                        null :
                        <p>Passwords must match</p>
                    }
                </div>
                <div>
                    <label >Confirm Password</label>
                    <input type="password" name="password" onChange={changeConfirm} />
                </div>
                
            </form>
        </div>
    );
}

export default Form;
