import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../hook/useAuth';
import GoogleLogin from '../components/GoogleLogin/GoogleLogin';

const Login = () => {
    const { login } = useAuth();
    const navigate = useNavigate();

    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        login(data.email, data.password);
        navigate("/")
    };

    return (
        <div className="login-container p-4 max-w-md mx-auto">
            <h2 className="text-2xl font-bold mb-4">Login</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div>
                    <label htmlFor="email" className="block font-medium">Email</label>
                    <input
                        id="email"
                        type="email"
                        {...register('email', { required: 'Email is required' })}
                        className="input input-bordered w-full"
                    />
                    {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
                </div>

                <div>
                    <label htmlFor="password" className="block font-medium">Password</label>
                    <input
                        id="password"
                        type="password"
                        {...register('password', { required: 'Password is required' })}
                        className="input input-bordered w-full"
                    />
                    {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
                </div>

                <button type="submit" className="btn btn-primary w-full">Login</button>
            </form>
                <div className="mt-6">
                    <GoogleLogin></GoogleLogin>
                </div>
            <p className="my-4 mx-auto text-sm font-bold">
                Do not have an account?{" "}
                <Link to="/register" className="text-primary">Register</Link>
            </p>
        </div>
    );
};


export default Login;