import { useLoaderData, useNavigate } from "react-router-dom";

 
const PostDetails = () => {
    const post = useLoaderData();
    const navigate = useNavigate();
    const {id} = post
    const handleBackDetails = () =>{
        navigate(-1);
    }
    return (
        <div>
            <h3>Id Number is {id}</h3> <br />
            <button onClick={handleBackDetails} className="btn">Back New</button>
        </div>
    );
};

export default PostDetails;