import React from 'react';

const SimpleForm = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(e.target.name.value);
        console.log(e.target.email.value);
    }
    return (
        <div>
            <form onSubmit={handleSubmit} className='flex flex-col justify-center items-center'>
                <input className='border' type="text" name='name' placeholder='Enter Your Name' /> <br />
                <input className='border' type="email" name='email' placeholder='Enter Your Email' /> <br />
                <input className='border cursor-pointer' type="submit" value="Submit" /> <br />
            </form>
        </div>
    );
};

export default SimpleForm;