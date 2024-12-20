import { Link, NavLink } from 'react-router-dom';
import useAuth from '../hook/useAuth';
import UserDropdown from './UserDropdown';

const Navbar = () => {
    const { user } = useAuth();

    return (
        <nav className="navbar bg-base-100 shadow-md">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                        </svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/products">Products</NavLink></li>
                        <li><NavLink to="/about">About</NavLink></li>
                        <li><NavLink to="/contact">Contact</NavLink></li>
                    </ul>
                </div>
                <NavLink to="/" className="btn btn-ghost normal-case text-xl">Camera Shop</NavLink>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/products">Products</NavLink></li>
                    <li><NavLink to="/about">About</NavLink></li>
                    <li><NavLink to="/contact">Contact</NavLink></li>
                </ul>
            </div>
            {
                user ? (
                    <div className="navbar-end">
                        <UserDropdown></UserDropdown>
                    </div>) : (
                    <div className="navbar-end">
                        <div className="flex gap-2 items-center">
                            <Link to="/login">
                                <button className="btn btn-primary btn-outline">
                                    Login
                                </button>
                            </Link>
                            <Link to="/register">
                                <button className="btn btn-primary">
                                    Register
                                </button>
                            </Link>
                        </div>
                    </div>)
            }
        </nav>
    );
};

export default Navbar;