import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import User from '../User/User';

const Users = () => {

    const users = useLoaderData();
    
    const {userId} = useParams();
    console.log(userId);

    return (
        <div>
            <h1>This is Users</h1>
            <div className='grid grid-cols-3 gap-3'>
                {
                    users.map(user => <User key={user.id} user={user}></User>)
                }
            </div>
        </div>
    );
};

export default Users;