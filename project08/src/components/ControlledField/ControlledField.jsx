import React, { useState } from 'react';

const ControlledField = () => {

    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        if(password.length < 6){
            setError('Password must be 6 characters or longer.')
        }
        else{
            setError('')
        }
    }

    const handlePasswordOnChange = e => {
        setPassword(e.target.value);

        if(password.length < 6){
            setError('Password must be 6 characters or longer.')
        }
        else{
            setError('')
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit} className='flex flex-col justify-center items-center'>
                <input className='border' type="email" name='email' placeholder='Enter Your Email' required /> <br />
                <input className='border' type="password" name='password' placeholder='Enter Your Password' defaultValue={password} onChange={handlePasswordOnChange} required /> <br />
                <input className='border cursor-pointer' type="submit" value="Submit" /> <br />
            </form>
            <p>{error}</p>
        </div>
    );
};

export default ControlledField;