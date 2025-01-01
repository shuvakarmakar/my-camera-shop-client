import { Outlet } from "react-router-dom";
import Sidebar from "../components/Dashboard/Sidebar";

const Dashboard = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <div className="flex flex-grow">
                {/* Sidebar */}
                <div className="hidden md:block md:w-2/12 bg-gray-100">
                    <Sidebar />
                </div>
                {/* Main Content */}
                <div className="w-full md:w-10/12 p-4 md:p-12">
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
