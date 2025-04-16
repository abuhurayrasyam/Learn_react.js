import React, { useState } from 'react';
import NavMenu from './NavMenu';
import { Menu } from 'lucide-react';
import { SquareX } from 'lucide-react';

const Navbar = () => {

    const navMenuItems = [
        { id: 1, name: "Home", path: "/" },
        { id: 2, name: "About", path: "/about" },
        { id: 3, name: "Services", path: "/services" },
        { id: 4, name: "Blog", path: "/blog" },
        { id: 5, name: "Contact", path: "/contact" },
      ];

    const [menu, setMenu] = useState(false);

    const menuItems = navMenuItems.map(route => <NavMenu key={route.id} route={route}></NavMenu>)
      
    return (
        <nav className='flex justify-between mx-10 mt-4'>
            <span className='flex gap-3'>
                <button className='md:hidden' onClick={() => setMenu(!menu)}>
                    {
                        menu ? <SquareX></SquareX> : <Menu></Menu>
                    }
                    <ul className={`absolute bg-gray-400 ${menu ? 'top-10' : '-top-64'} p-3`}>
                        {menuItems}
                    </ul>
                </button>
                <h1>Company Logo</h1>
            </span>
            <ul className='md:flex hidden'>
                {menuItems}
            </ul>
            <button>Sign In</button>
        </nav>
    );
};

export default Navbar;