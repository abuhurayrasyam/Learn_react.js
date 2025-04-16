import React from 'react';
import { useLoaderData, useNavigate } from 'react-router';

const UserDetails = () => {
    const user = useLoaderData();

    const {name, phone, website} = user;

    const navigate = useNavigate();
    return (
        <div>
            <h1>User Details</h1>
            <h1>{name}</h1>
            <p>{phone}</p>
            <p>{website}</p>
            <button onClick={() => navigate(-1)}>Go Back</button>
        </div>
    );
};

export default UserDetails;