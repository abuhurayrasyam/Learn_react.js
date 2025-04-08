import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Navbar from './components/Navbar/Navbar'

function App() {

  const [bookmarked, setBookmarked]=useState([])
  const [readTime, setReadTime]=useState(0)

  const handleAddBookMark = (blog) => {
    setBookmarked([...bookmarked, blog])
  }

  const handleMarkAsRead = (time, id) => {
    setReadTime(readTime+time)
    handleRemoveBookMark(id)
  }

  const handleRemoveBookMark = (id) => {
    const remainingBookMark = bookmarked.filter((currentBookMarked) => currentBookMarked.id !== id)
    setBookmarked(remainingBookMark)
  }

  return (
    <>
      <Navbar bookmarked={bookmarked.length}></Navbar>
      
      <div className="main-container flex text-center mt-3">
        <div className="left-container w-[70%]">
          <Blogs handleAddBookMark={handleAddBookMark} handleMarkAsRead={handleMarkAsRead}></Blogs>
        </div>
        <div className="right-container w-[30%] p-3 border rounded-sm m-3">
          <h1 className="text-x  font-bold">Total Reading Time : {readTime}</h1>
          <h1 className="text-x  font-bold">Bookmarked Card : {bookmarked.length}</h1>
          {
            bookmarked.map((marked, index) => <p key={index} className="bg-gray-800 text-white p-3 rounded-sm shadow m-3">{marked.title}</p>)
          }
        </div>
      </div>
    </>
  )
}

export default App
