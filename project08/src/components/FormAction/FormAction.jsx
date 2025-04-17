import React from 'react';

const FormAction = () => {

    const handleFormAction = (formData) => {
        console.log(formData.get('name'));
        console.log(formData.get('email'));
    }

    return (
        <div>
            <form action={handleFormAction} className='flex flex-col justify-center items-center'>
                <input className='border' type="text" name='name' placeholder='Enter Your Name' /> <br />
                <input className='border' type="email" name='email' placeholder='Enter Your Email' /> <br />
                <input className='border cursor-pointer' type="submit" value="Submit" /> <br />
            </form>
        </div>
    );
};

export default FormAction;