 import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
const User = ({user}) => {
    const {id,name, email, phone} = user;
   
    return (
        <div className=' rounded-xl  border-2 p-5'>
            <p>Id : {id}</p>
            <p>Name : {name}</p>
            <p>Email : {email}</p>
            <p>Phone : {phone}</p>
            <Link to={`/user/${id}`}>Show Datails</Link>
        </div>
    );
};
User.propTypes = {
    user: PropTypes.object
}

export default User;