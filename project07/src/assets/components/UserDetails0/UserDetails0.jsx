import React, { use } from 'react';

const UserDetails0 = ({userPromise}) => {
    const {name, username} = use(userPromise);
    return (
        <div>
            <p>{name}</p>
            <p>{username}</p>
        </div>
    );
};

export default UserDetails0;