import React, { Suspense, useState } from 'react';
import { Link, Navigate, useLocation, useNavigate } from 'react-router';
import UserDetails0 from '../UserDetails0/UserDetails0';

const User = ({user}) => {

    const [detailInfo, setDetailInfo] = useState(false);
    const [visitHome, setVisitHome] = useState(false);
    const location = useLocation();
    console.log(location)

    const {id, name, email, address} = user;

    const navigate = useNavigate();
    const handleNavigate = () =>{
        navigate(`/users/${id}`)
    }

    const userPromise = fetch(`https://jsonplaceholder.typicode.com/users/${id}`).then(response => response.json());

    if(visitHome){
        return <Navigate to={'/'}></Navigate>
    }

    return (
        <div className='bg-amber-400 p-3 rounded'>
            <h1>{name}</h1>
            <p>{email}</p>
            <p>{address.street}</p>
            <p>{address.suite}</p>
            <Link className='bg-amber-300 p-1 rounded' to={`/users/${id}`}>Show Details</Link>
            <button onClick={handleNavigate} className='bg-amber-300 p-1 cursor-pointer ml-2'>More Details {id}</button>
            <button onClick={() => setDetailInfo(!detailInfo)} className='bg-amber-300 p-1 cursor-pointer ml-2'>{detailInfo ? 'Hide' : 'Detail'} Info</button>
            {
                detailInfo && <Suspense fallback={<span>Loading...</span>}>
                    <UserDetails0 userPromise={userPromise}></UserDetails0>
                </Suspense>
            }
            <button onClick={() => setVisitHome(true)}>Visit Home</button>
        </div>
    );
};

export default User;