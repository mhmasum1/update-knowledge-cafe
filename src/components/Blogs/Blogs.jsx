import { useEffect, useState } from "react";
import Blog from "../Blog/Blog";
import PropTypes from "prop-types";
const Blogs = ({ handleAddBookMark }) => {
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        fetch('blog.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])
    return (
        <div className="md:w-2/3 ">
            <h1 className="text-4xl mb-20">Blogs:{blogs.length}</h1>
            {
                blogs.map(blog => (
                    <Blog key={blog.id} blog={blog}
                        handleAddBookMark={handleAddBookMark}
                    ></Blog>
                ))
            }
        </div>
    );
};
Blogs.prototypes = {
    handleAddBookMark: PropTypes.func
}
export default Blogs;