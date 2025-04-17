import React, { useRef } from 'react';

const UnControlledField = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');

    const handleSubmit = e => {
        e.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        console.log(email, password)
    }
    return (
        <div>
            <form onSubmit={handleSubmit} className='flex flex-col justify-center items-center'>
                <input ref={emailRef} className='border' type="email" name='email' placeholder='Enter Your Email' required /> <br />
                <input ref={passwordRef} className='border' type="password" name='password' placeholder='Enter Your Password' required /> <br />
                <input className='border cursor-pointer' type="submit" value="Submit" /> <br />
            </form>
        </div>
    );
};

export default UnControlledField;