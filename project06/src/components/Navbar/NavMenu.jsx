import React from 'react';

const NavMenu = ({route}) => {
    return (
        <li className='hover:bg-gray-100 lg:mr-10'>
            <a href={route.path}>{route.name}</a>
        </li>
    );
};

export default NavMenu;