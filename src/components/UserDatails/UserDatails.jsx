import { useLoaderData, useNavigate } from "react-router-dom";

 
const UserDatails = () => {
    const user = useLoaderData();

    const navigate = useNavigate();

    const {name, website} = user ;
    // console.log(user)
    const handleBackDetails = () =>{
                navigate(-1)
    }
    return (
        <div>
            <h3>show datails quicly :  {name}</h3>
            <p>Website :  {website}</p>

            <br />
            <button onClick={handleBackDetails}> Back</button>
        </div>
    );
};

export default UserDatails;