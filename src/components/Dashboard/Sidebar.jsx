import { NavLink } from "react-router-dom";
import { GrOverview } from "react-icons/gr";
import { IoHomeOutline } from "react-icons/io5";
import { BiLogOut } from "react-icons/bi";
import useUserData from "../../hook/useUserData";
import { MdOutlineInventory2 } from "react-icons/md";
import { IoMdAddCircleOutline } from "react-icons/io";
import { FaRegHeart, FaUsers } from "react-icons/fa";
import useAuth from "../../hook/useAuth";

// Seller routes
const SellerRoutes = [
    {
        id: 1,
        route: "/dashboard/my-products",
        title: "My Products",
        icon: <MdOutlineInventory2 />,
    },
    {
        id: 2,
        route: "/dashboard/add-products",
        title: "Add Products",
        icon: <IoMdAddCircleOutline />,
    },
];

// Buyer routes
const BuyerRoutes = [
    {
        id: 1,
        route: "/dashboard/wishlist",
        title: "My Wishlist",
        icon: <FaRegHeart />,
    },
];

// Admin routes
const AdminRoutes = [
    {
        id: 1,
        route: "/dashboard/manage-users",
        title: "Manage Users",
        icon: <FaUsers />,
    },
];

const Sidebar = () => {
    const userData = useUserData();
    const { logout } = useAuth();

    // Determine routes based on the user's role
    const getRoutes = () => {
        if (userData.role === "admin") return AdminRoutes;
        if (userData.role === "seller") return SellerRoutes;
        if (userData.role === "buyer") return BuyerRoutes;
        return [];
    };

    const routes = getRoutes();

    return (
        <div className="bg-gray-200 border-r-2 border-black h-full px-4 md:px-8 py-4 md:py-16 flex flex-col lg:w-64 md:w-48 sm:w-20 w-16">
            {/* Logo */}
            <h1 className="hidden lg:block text-2xl font-bold mb-8 px-4">Camera Shop</h1>
            <h1 className="hidden md:block lg:hidden text-xl font-bold mb-6 text-center">CS</h1>
            <h1 className="block md:hidden text-lg font-bold mb-4 text-center">CS</h1>

            {/* Navigation Links */}
            <ul className="flex flex-col gap-2">
                {/* Overview */}
                <li className="p-2 flex items-center justify-center md:justify-start border border-black rounded-md">
                    <NavLink
                        to="/dashboard/overview"
                        className="flex items-center gap-2 w-full text-center md:text-left text-sm lg:text-base"
                    >
                        <GrOverview className="text-lg sm:text-xl lg:text-2xl" />
                        <p className="hidden sm:block lg:block md:block lg:text-base text-sm">
                            Overview
                        </p>
                    </NavLink>
                </li>

                {/* Role-specific routes */}
                {routes.map((route) => (
                    <li
                        key={route.id}
                        className="p-2 flex items-center justify-center md:justify-start border border-black rounded-md"
                    >
                        <NavLink
                            to={route.route}
                            className="flex items-center gap-2 w-full text-center md:text-left text-sm lg:text-base"
                        >
                            {route.icon}
                            <p className="hidden sm:block lg:block md:block lg:text-base text-sm">
                                {route.title}
                            </p>
                        </NavLink>
                    </li>
                ))}

                {/* Home */}
                <li className="p-2 flex items-center justify-center md:justify-start border border-black rounded-md">
                    <NavLink
                        to="/"
                        className="flex items-center gap-2 w-full text-center md:text-left text-sm lg:text-base"
                    >
                        <IoHomeOutline className="text-lg sm:text-xl lg:text-2xl" />
                        <p className="hidden sm:block lg:block md:block lg:text-base text-sm">
                            Home
                        </p>
                    </NavLink>
                </li>

                {/* Logout */}
                <li
                    className="p-2 flex items-center justify-center md:justify-start border border-black rounded-md"
                    onClick={logout}
                >
                    <NavLink
                        to="/"
                        className="flex items-center gap-2 w-full text-center md:text-left text-sm lg:text-base"
                    >
                        <BiLogOut className="text-lg sm:text-xl lg:text-2xl" />
                        <p className="hidden sm:block lg:block md:block lg:text-base text-sm">
                            Logout
                        </p>
                    </NavLink>
                </li>
            </ul>
        </div>

    );
};

export default Sidebar;
