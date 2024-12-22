import { useNavigate } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";
import useAuth from '../../hook/useAuth';
import axios from 'axios';
import Swal from 'sweetalert2';

const GoogleLogin = () => {
    const { GoogleLogin } = useAuth();
    const navigate = useNavigate();

    const handleGoogleLogin = async () => {
        try {
            const userCredential = await GoogleLogin(); // Assuming GoogleLogin returns user data
            const { user } = userCredential;

            // Prepare user data including profile image
            const userData = {
                name: user.displayName,
                email: user.email,
                role: 'buyer',  
                status: 'approved',
                wishlist: [],
                profileImage: user.photoURL || '',  
            };

            // Send user data to the backend
            await axios.post("https://my-camera-shop-server.vercel.app/users", userData);

            // Show success message
            Swal.fire({
                position: "center",
                icon: "success",
                title: "Registration Successful",
                showConfirmButton: false,
                timer: 1500,
            });

            navigate("/"); // Navigate to the home page or dashboard

        } catch (error) {
            console.error("Google login error: ", error);
            Swal.fire({
                position: "center",
                icon: "error",
                title: "Something went wrong. Please try again later.",
                showConfirmButton: true,
            });
        }
    };

    return (
        <div>
            <div className="divider">Or</div>
            <button onClick={handleGoogleLogin} className='btn btn-primary btn-outline w-full'>
                <FcGoogle></FcGoogle>
                Google
            </button>
        </div>
    );
};

export default GoogleLogin;
