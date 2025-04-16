import React from 'react';
import { NavLink } from 'react-router';
import './Header.css';

const Header = () => {
    return (
        <div>
            <h1 className=''>This is Header</h1>
            <nav className='flex gap-3'>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/mobiles">Mobiles</NavLink>
                <NavLink to="/laptops">Laptops</NavLink>
                <NavLink to={'/users'}>Users</NavLink>
                <NavLink to={'/users0'}>Users0</NavLink>
            </nav>
        </div>
    );
};

export default Header;