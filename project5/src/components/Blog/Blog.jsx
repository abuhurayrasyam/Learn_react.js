import React from 'react';
import { CiBookmark } from "react-icons/ci";

const Blog = ({blog, handleAddBookMark, handleMarkAsRead}) => {
    return (
        <div className="m-3">
            <div className="card bg-base-100 w-80 shadow-sm">
            <figure>
                <img src={blog.coverImage} alt="" />
            </figure>
            <div className="card-body">
                <div className="author flex justify-around items-center">
                    <h3>{blog.authorName}</h3>
                    <img className="w-15 border rounded-full p-3" src={blog.authorImage} alt="" />
                    <button onClick={() => handleAddBookMark(blog)}className="cursor-pointer"><CiBookmark size={25}/></button>
                </div>
                <h2 className="card-title justify-center">{blog.title}</h2>
                <div className="hashtag flex">
                {
                    blog.hashtags.map((hashtag, index) => <p key={index}>#{hashtag}</p>)
                }
                </div>
                <div className="card-actions justify-end">
                <button onClick={() => handleMarkAsRead(blog.readingTime, blog.id)} className="btn btn-primary">Mark as Read</button>
                </div>
            </div>
            </div>
                    </div>
                );
            };

export default Blog;