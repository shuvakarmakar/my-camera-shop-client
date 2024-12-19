import { Outlet } from "react-router-dom";

const Main = () => {
    return (
        <div>
            <div>Navbar</div>
            <div className="min-h-screen">
                <Outlet></Outlet>
            </div>
            <div>Footer</div>
        </div>
    );
};

export default Main;