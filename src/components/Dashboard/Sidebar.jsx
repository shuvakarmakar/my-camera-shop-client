import { NavLink } from "react-router-dom";
import { GrOverview } from "react-icons/gr";
import { IoHomeOutline } from "react-icons/io5";
import { BiLogOut } from "react-icons/bi";
import useUserData from "../../hook/useUserData";
import { MdOutlineInventory2 } from "react-icons/md";
import { IoMdAddCircleOutline } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa";
import { FaUserEdit, FaUsers } from "react-icons/fa";
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
    // {
    //     id: 2,
    //     route: "/dashboard/manage-products",
    //     title: "Manage Products",
    //     icon: <FaUserEdit />,
    // },
];

const Sidebar = () => {
    const userData = useUserData()
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
        <div className="bg-gray-200 border-r-2 border-black h-full px-8 py-16">
            <h1 className="text-2xl font-bold mb-8">Camera Shop</h1>
            <ul className="flex flex-col gap-2">
                {/* Overview */}
                <li className="p-2 border border-black rounded-md">
                    <NavLink to="/dashboard/overview" className="flex items-center gap-2">
                        <GrOverview />
                        <p>Overview</p>
                    </NavLink>
                </li>

                {/* Role-specific routes */}
                {routes.map((route) => (
                    <li key={route.id} className="p-2 border border-black rounded-md">
                        <NavLink to={route.route} className="flex items-center gap-2">
                            {route.icon}
                            <p>{route.title}</p>
                        </NavLink>
                    </li>
                ))}

                {/* Home */}
                <li className="p-2 border border-black rounded-md">
                    <NavLink to="/" className="flex items-center gap-2">
                        <IoHomeOutline />
                        <p>Home</p>
                    </NavLink>
                </li>

                {/* Logout */}
                <li className="p-2 border border-black rounded-md" onClick={logout}>
                    <NavLink to="/" className="flex items-center gap-2">
                        <BiLogOut />
                        <p>Logout</p>
                    </NavLink>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;
