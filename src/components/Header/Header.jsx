import { Link, NavLink } from "react-router-dom";
import './Header.css';
const Header = () => {
    return (
        <div>
            <h3>Navbar</h3>
            <nav className="text-blue-500  ">
                <Link className="mr-4" to="/">Home</Link>
                <NavLink className="mr-4" to="/Users">Users</NavLink>
                <NavLink className="mr-4" to="/about">About</NavLink>
                <NavLink className="mr-4" to="/contact">Contact</NavLink>
                <NavLink className="mr-4" to="/Posts">Posts</NavLink>
                
            </nav>
        </div>
    );
};

export default Header;
