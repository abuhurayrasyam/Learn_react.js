import React, { use } from 'react';

const Users0 = ({usersPromise}) => {

    const users = use(usersPromise);

    console.log(users)

    return (
        <div>
            <h1>This is Users0</h1>
        </div>
    );
};

export default Users0;