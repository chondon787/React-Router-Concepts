import { useLoaderData } from "react-router-dom";
import User from "../User/User";

 
const Users = () => {
    const users = useLoaderData();
    
    return (
        <div>
            <h3>Users Member : {users.length}</h3>
            <p>All Provider shift and Reacp Of The Infometions</p>
            <div className="grid md:grid-cols-3 gap-5 ">
                {
                    users.map(user => <User key={user.id} user={user}></User>)
                }
            </div>
        </div>
    );
};

export default Users;