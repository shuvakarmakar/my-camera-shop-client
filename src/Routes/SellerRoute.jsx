/* eslint-disable react/prop-types */
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hook/useAuth";
import useUserData from "../hook/useUserData";
import Loading from "../pages/Loading";



const SellerRoute = ({ children }) => {
    const { user, loading } = useAuth();
    const  userData = useUserData();
    const location = useLocation();

    if (loading || !userData.role) {
        return <Loading></Loading>
    }

    if (user && userData.role === "seller") {
        return children
    }

    return <Navigate to='/login' state={{ from: location }} replace></Navigate>


};

export default SellerRoute;