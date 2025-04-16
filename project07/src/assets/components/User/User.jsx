import React from 'react';
import { Link, useNavigate } from 'react-router';

const User = ({user}) => {

    const {id, name, email, address} = user;

    const navigate = useNavigate();
    const handleNavigate = () =>{
        navigate(`/users/${id}`)
    }

    return (
        <div className='bg-amber-400 p-3 rounded'>
            <h1>{name}</h1>
            <p>{email}</p>
            <p>{address.street}</p>
            <p>{address.suite}</p>
            <Link className='bg-amber-300 p-1 rounded' to={`/users/${id}`}>Show Details</Link>
            <button onClick={handleNavigate} className='cursor-pointer'>More Details {id}</button>
        </div>
    );
};

export default User;