/* eslint-disable react/prop-types */
import { Navigate, useLocation } from "react-router-dom";
import useUserData from "../hook/useUserData";
import useAuth from "../hook/useAuth";
import Loading from "../pages/Loading";


const AdminRoutes = ({ children }) => {
    const { user, loading } = useAuth();
    const userData = useUserData();
    // console.log(userData);
    const location = useLocation();

    if (loading || !userData.role) {
        return <Loading></Loading>
    }

    if (user && userData?.role === "admin") {
        return children
    }

    return <Navigate to='/login' state={{ from: location }} replace></Navigate>


};

export default AdminRoutes;