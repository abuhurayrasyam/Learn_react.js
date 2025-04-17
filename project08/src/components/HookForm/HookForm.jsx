import React from 'react';
import useInputField from '../../hooks/useInputField';

const HookForm = () => {

    const [name, setName] = useInputField('');
    const [email, setEmail] = useInputField('');
    const [password, setPassword] = useInputField('');

    const handleSubmit = e =>{
        e.preventDefault();
        console.log('Submitted:', name, email, password)
    }

    return (
        <div>
            <form onSubmit={handleSubmit} className='flex flex-col justify-center items-center'>
                <input className='border' type="text" name='name' placeholder='Enter Your Name' defaultValue={name} onChange={setName} required /> <br />
                <input className='border' type="email" name='email' placeholder='Enter Your Email' defaultValue={email} onChange={setEmail} required /> <br />
                <input className='border' type="password" name='password' placeholder='Enter Your Password' defaultValue={password} onChange={setPassword} required /> <br />
                <input className='border cursor-pointer' type="submit" value="Submit" /> <br />
            </form>
        </div>
    );
};

export default HookForm;