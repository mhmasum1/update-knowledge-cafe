import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'

function App() {
  const [bookmarks, setBookmarks] = useState([]);

  const handleAddBookMark = blog => {
    console.log('Booking adding soon')
  }

  return (
    <>
      <Header></Header>
      <div className='md:flex max-w-7xl mx-auto'>
        <Blogs handleAddBookMark={handleAddBookMark}></Blogs>
        <Bookmarks></Bookmarks>
      </div>
    </>
  )
}

export default App
