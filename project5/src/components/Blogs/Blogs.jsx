import React, { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';

const Blogs = ({handleAddBookMark, handleMarkAsRead}) => {

    const [blogs, setBlogs]=useState([])

    useEffect(() => {
        fetch("blogs.json")
        .then(response => response.json())
        .then(data => setBlogs(data))
    },[])

    return (
        <div>
          <h1 className='text-2xl  font-bold'>Total Cards : {blogs.length}</h1>
          <div className="all-blogs grid grid-cols-1 md:grid-cols-2">
            {
                blogs.map((blog) => <Blog key={blog.id} blog={blog} handleAddBookMark={handleAddBookMark} handleMarkAsRead={handleMarkAsRead}></Blog>)
            }
          </div>
        </div>
    );
};

export default Blogs;