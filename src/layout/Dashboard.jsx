import { Outlet } from "react-router-dom";
import Sidebar from "../components/Dashboard/Sidebar";
import { useState } from "react";

const Dashboard = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <div className="min-h-screen flex">
            {/* Sidebar */}
            <div
                className={`fixed z-50 bg-gray-100 transition-transform transform ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"
                    } sm:w-3/12 md:w-2/12 md:translate-x-0 md:relative`}
            >
                <Sidebar />
            </div>

            {/* Overlay for mobile */}
            {isSidebarOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
                    onClick={toggleSidebar}
                ></div>
            )}

            {/* Main Content */}
            <div className="w-full flex-grow p-4 sm:p-6 md:p-8">
                {/* Toggle Button for Sidebar */}
                <button
                    className="block md:hidden p-2 bg-gray-200 rounded-md mb-4"
                    onClick={toggleSidebar}
                >
                    {isSidebarOpen ? "Close Menu" : "Open Menu"}
                </button>

                <Outlet />
            </div>
        </div>
    );
};

export default Dashboard;
