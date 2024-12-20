import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../hook/useAuth';
import GoogleLogin from '../components/GoogleLogin/GoogleLogin';


const Register = () => {

    const { createUser } = useAuth();
    const navigate = useNavigate();

    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        createUser(data.email, data.password);
        navigate("/")
    };

    return (
        <div className="register-container p-4 max-w-md mx-auto">
            <h2 className="text-2xl font-bold mb-4">Register</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div>
                    <label className="block font-medium">Name</label>
                    <input
                        id="name"
                        type="text"
                        {...register('name', { required: 'Name is required' })}
                        className="input input-bordered w-full"
                    />
                    {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
                </div>

                <div>
                    <label className="block font-medium">Email</label>
                    <input
                        id="email"
                        type="email"
                        {...register('email', { required: 'Email is required' })}
                        className="input input-bordered w-full"
                    />
                    {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
                </div>

                <div>
                    <label className="block font-medium">Password</label>
                    <input
                        id="password"
                        type="password"
                        {...register('password', {
                            required: 'Password is required',
                            pattern: {
                                value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$/,
                                message: 'Password must be at least 8 characters long, include uppercase, lowercase, a number, and a special character.'
                            }
                        })}
                        className="input input-bordered w-full"
                    />
                    {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
                </div>
                <div>
                    <label className="block font-medium">Confirm Password</label>
                    <input
                        id="password"
                        type="password"
                        {...register('password', {
                            required: 'Confirm Password is required',
                            pattern: {
                                value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$/,
                                message: 'Password must be at least 8 characters long, include uppercase, lowercase, a number, and a special character.'
                            }
                        })}
                        className="input input-bordered w-full"
                    />
                    {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
                </div>

                {/* ROLE */}
                <div>
                    <label className="block font-medium">Role</label>

                    <select
                        className="select select-bordered w-full max-w-xs"
                        {...register("role", { required: "Role is required" })}
                    >
                        <option value="buyer">I am Buyer</option>
                        <option value="seller">I am Seller</option>
                    </select>
                    {errors.role && <p className="text-red-500">{errors.role.message}</p>} {/* Error handling */}
                </div>

                <button type="submit" className="btn btn-primary w-full">Register</button>
            </form>
            <div className="mt-6">
                <GoogleLogin></GoogleLogin>
            </div>
            <p className="my-4 mx-auto text-sm font-bold">
                Already Have an Account?{" "}
                <Link to="/login" className="text-primary">
                    Login
                </Link>
            </p>
        </div>
    );
};

export default Register;