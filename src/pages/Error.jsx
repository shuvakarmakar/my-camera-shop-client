import { NavLink } from 'react-router-dom';
import gif from '../assets/Error.gif'

const Error = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <img src={gif} alt="Error" className="w-1/2" />
            <h1 className="text-3xl font-bold text-red-500 mt-4">Page Not Found</h1>
            <NavLink to="/" className="btn btn-primary text-white mt-4">Go Home</NavLink>
        </div>
    );
};

export default Error;