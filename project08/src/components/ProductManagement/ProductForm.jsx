import React, { useState } from 'react';

const ProductForm = ({handleAddProduct}) => {

    const [error, setError] = useState('');

    const handleProductSubmit = e =>{
        e.preventDefault();
        const name = e.target.name.value;
        const price = e.target.price.value;
        const quantity = e.target.quantity.value;

        if(name.length === 0){
            setError('Please Provide a Product Name!');
            return;
        }
        else if(price.length === 0){
            setError('Please Provide Product Price!');
            return;
        }
        else if(price.length < 0){
            setError('Please Provide a Positive Price!');
            return;
        }
        else{
            setError('');
        }

        const newProduct = {
            name,
            price,
            quantity
        }
        handleAddProduct(newProduct);
    }

    return (
        <div>
            <h1 className='text-xl font-semibold mt-5 text-center'>Add a Product</h1>
            <form onSubmit={handleProductSubmit} className='flex flex-col justify-center items-center mt-3' >
                <input className='border p-1 rounded' type="text" name="name" placeholder='Product Name' /> <br />
                <input className='border p-1 rounded' type="text" name="price" placeholder='Product Price' /> <br />
                <input className='border p-1 rounded' type="text" name="quantity" placeholder='Product Quantity' /> <br />
                <input className='border p-1 rounded' type="submit" value="Submit" />
            </form>
            <p className='text-center text-red-600 text-semibold'>{error}</p>
        </div>
    );
};

export default ProductForm;