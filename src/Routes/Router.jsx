import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Dashboard from "../layout/Dashboard";
import Overview from "../pages/Dashboard/Overview";
import AboutUs from "../pages/AboutUs";
import ContactUs from "../pages/ContactUs";
import Error from "../pages/Error";
import PrivateRoute from "./PrivateRoute";
import ManageUsers from "../pages/Dashboard/Admin/ManageUsers";
import ManageProducts from "../pages/Dashboard/Admin/ManageProducts";
import MyProducts from "../pages/Dashboard/Seller/MyProducts";
import AddProducts from "../pages/Dashboard/Seller/AddProducts";
import Wishlist from "../pages/Dashboard/Buyer/Wishlist";
import AdminRoutes from "./AdminRoutes";
import SellerRoute from "./SellerRoute";
import BuyerRoute from "./BuyerRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/register",
        element: <Register></Register>
      },
      {
        path: "/about-us",
        element: <AboutUs></AboutUs>
      },
      {
        path: "contact-us",
        element: <ContactUs></ContactUs>
      }
    ]
  },
  {
    path: "/dashboard",
    element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
    children: [
      {
        path: "/dashboard/overview",
        element: <Overview></Overview>
      },
      //Admin Route
      {
        path: "/dashboard/manage-users",
        element: <AdminRoutes><ManageUsers></ManageUsers></AdminRoutes>
      },
      {
        path: "/dashboard/manage-products",
        element: <AdminRoutes><ManageProducts></ManageProducts></AdminRoutes>
      },
      // Seller
      {
        path: "/dashboard/my-products",
        element: <SellerRoute><MyProducts></MyProducts></SellerRoute>
      },
      {
        path: "/dashboard/add-products",
        element: <SellerRoute><AddProducts></AddProducts></SellerRoute>
      },
      // Buyer
      {
        path: "/dashboard/wishlist",
        element: <BuyerRoute><Wishlist></Wishlist></BuyerRoute>
      },
    ]
  },
  {
    path: "*",
    element: <Error></Error>
  }
]);