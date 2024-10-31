import { Link, useRouteError } from "react-router-dom";

 
const ErrorPage = () => {
     const error = useRouteError();
     console.log(error)
    return (
        <div>
            <h1 className="font-bold">Oopps !!</h1>
            <p>Sorry! an unexpected an occured</p>
            <p>
                {
                    error.statusText || error.message
                }
            </p>
            {
                error.status === 404 && <div>
                    <h3>Page Not Found</h3>
                    <p>Go To Back Where you from</p>
                   <Link to="/"> <button>Home</button></Link>
                    
                </div>

            }
        </div>
    );
};

export default ErrorPage;