 import PropTypes from 'prop-types'
import { Link, useNavigate } from 'react-router-dom';
const Post = ({post}) => {
    const navigate = useNavigate();
    const {id, title, body} = post

    const handlShowDetails = () =>{
        navigate(`/post/${id}`)
    }
    return (
        <div className='border-2 bg-gray-400 rounded-xl p-5'>
            <h3 className='text-3xl font-bold'> Id : {id}</h3>
            <p className='text-2xl my-2'>Title : {title}</p>
            <p className='mb-4'>Body : {body}</p>
            <Link to={`/post/${id}`}> Show Details</Link> <br /> <br />
            <button onClick={handlShowDetails}>Click and Show Details</button>
             
        </div>
    );
};

Post.propTypes = {
    post: PropTypes.object
}

export default Post;