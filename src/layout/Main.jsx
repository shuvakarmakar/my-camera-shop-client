import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";

const Main = () => {
    return (
        <div>
            <div>Navbar</div>
            <div className="min-h-screen">
                <Outlet></Outlet>
            </div>
            <div>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Main;