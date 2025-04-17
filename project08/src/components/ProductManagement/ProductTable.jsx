import React from 'react';

const ProductTable = ({products}) => {
    return (
        <div>
            <h1 className='font-bold mt-3 text-center'>Products: {products.length}</h1>
            <table>
                <thead>
                    <tr className='flex gap-3'>
                        <th>Number</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map((product, index)  => <tr key={index} className='flex gap-10'>
                            <td>{index + 1}</td>
                            <td>{product.name}</td>
                            <td>{product.price}</td>
                            <td>{product.quantity}</td>
                            <td></td>
                        </tr>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default ProductTable;