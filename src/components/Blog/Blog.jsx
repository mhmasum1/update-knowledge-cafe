import { FaRegBookmark } from "react-icons/fa6";
import PropTypes from 'prop-types';
const Blog = ({ blog, handleAddBookMark, handleMarkRead }) => {
    const { title, cover, author, author_img, posted_date, reading_time, hashtags } = blog;

    return (
        <div className='mb-20 space-y-4'>
            <img src={cover} alt={`Cover picture of the title ${title}`} />
            <div className='flex justify-between items-center'>
                <div className='flex my-2'>
                    <img className='w-14' src={author_img} alt="" />
                    <div className='ml-6'>
                        <h3 className='text-2xl'>{author}</h3>
                        <p>{posted_date}</p>
                    </div>

                </div>
                <div className="flex items-center">
                    <span>{reading_time} min read</span>
                    <button onClick={() => handleAddBookMark(blog)} className="ml-2 text-2xl  text-red-600"><FaRegBookmark /></button>
                </div>
            </div>
            <h2 className="text-4xl  my-3">{title}</h2>
            <p>
                {
                    hashtags.map((hash, idx) => <span key={idx}><a href="">#{hash}</a></span>)
                }
            </p>
            <button onClick={() => handleMarkRead(reading_time)} className="text-purple-600 font-bold underline">Mark as Read</button>
        </div>
    );
};

Blog.PropTypes = {
    blog: PropTypes.object.isRequired,
    handleAddBookMark: PropTypes.func,
    handleMarkRead: PropTypes.func
}
export default Blog;