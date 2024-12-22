import { Link, NavLink } from 'react-router-dom';
import useAuth from '../hook/useAuth';
import UserDropdown from './UserDropdown';

const Navbar = () => {
    const { user } = useAuth();

    return (
        <nav className="navbar bg-gray-800 shadow-lg relative">
            <div className="navbar-start flex items-center">
                {/* Mobile Dropdown */}
                <div className="dropdown lg:hidden">
                    <label tabIndex={0} className="btn btn-ghost text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                        </svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-gray-800 rounded-lg w-52 z-20">
                        <li><NavLink to="/" className="text-white hover:bg-blue-500 p-2 rounded-lg">Home</NavLink></li>
                        <li><NavLink to="/products" className="text-white hover:bg-blue-500 p-2 rounded-lg">Products</NavLink></li>
                        <li><NavLink to="/about-us" className="text-white hover:bg-blue-500 p-2 rounded-lg">About</NavLink></li>
                        <li><NavLink to="/contact-us" className="text-white hover:bg-blue-500 p-2 rounded-lg">Contact</NavLink></li>
                    </ul>
                </div>

                {/* Logo */}
                <NavLink className="btn btn-ghost text-white text-3xl font-bold hover:text-blue-200 transition-colors duration-300">
                    Camera Shop
                </NavLink>
            </div>

            {/* Desktop Navbar */}
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 space-x-6">
                    <li className="text-lg hover:text-blue-300 hover:scale-105 transition-all duration-300">
                        <NavLink to="/" className="text-white hover:text-blue-300">Home</NavLink>
                    </li>
                    <li className="text-lg hover:text-blue-300 hover:scale-105 transition-all duration-300">
                        <NavLink to="/products" className="text-white hover:text-blue-300">Products</NavLink>
                    </li>
                    <li className="text-lg hover:text-blue-300 hover:scale-105 transition-all duration-300">
                        <NavLink to="/about-us" className="text-white hover:text-blue-300">About</NavLink>
                    </li>
                    <li className="text-lg hover:text-blue-300 hover:scale-105 transition-all duration-300">
                        <NavLink to="/contact-us" className="text-white hover:text-blue-300">Contact</NavLink>
                    </li>
                </ul>
            </div>

            {/* User/Authentication Section */}
            {user ? (
                <div className="navbar-end">
                    <UserDropdown />
                </div>
            ) : (
                <div className="navbar-end flex items-center gap-6">
                    <Link to="/login">
                        <button className="btn btn-outline text-white border-white hover:bg-white hover:text-blue-600 transition-all duration-300 px-6 py-2 rounded-full">
                            Login
                        </button>
                    </Link>
                    <Link to="/register">
                        <button className="btn bg-blue-500 text-white hover:bg-blue-600 transition-all duration-300 px-6 py-2 rounded-full">
                            Register
                        </button>
                    </Link>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
