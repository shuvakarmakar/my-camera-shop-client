import { useEffect, useState } from "react";
import axios from "axios";
import Loading from "../../Loading";
import useUserData from "../../../hook/useUserData";

const ManageUsers = () => {
    const userData = useUserData(); // Get user data from custom hook
    console.log("Logged-in user data:", userData); // Log the user data

    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!userData) {
            // If userData is still loading or not available, don't proceed
            return;
        }

        // Check the role of logged-in user
        if (userData?.role === "admin") {
            const fetchUsers = async () => {
                try {
                    const response = await axios.get("http://localhost:3000/users");
                    setUsers(response.data); // Set the fetched users
                    setLoading(false);
                } catch (error) {
                    console.error("Failed to fetch users:", error);
                    setLoading(false);
                }
            };

            fetchUsers();
        } else {
            alert("You don't have permission to manage users.");
            setLoading(false); // Stop loading if the user isn't an admin
        }
    }, [userData]); // Re-run when userData changes

    if (loading) {
        return <Loading />;
    }

    return (
        <div className="p-8">
            <h1 className="text-3xl font-bold mb-4">Manage Users</h1>
            <table className="min-w-full table-auto">
                <thead>
                    <tr>
                        <th className="border px-4 py-2">Name</th>
                        <th className="border px-4 py-2">Email</th>
                        <th className="border px-4 py-2">Role</th>
                        <th className="border px-4 py-2">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => (
                        <tr key={user._id}>
                            <td className="border px-4 py-2">{user.name}</td>
                            <td className="border px-4 py-2">{user.email}</td>
                            <td className="border px-4 py-2">{user.role}</td>
                            <td className="border px-4 py-2 flex gap-2">
                                <button
                                    className="bg-blue-500 text-white px-4 py-2 rounded"
                                >
                                    {user.role === "admin" ? "Demote" : "Promote"} to Admin
                                </button>
                                <button
                                    className="bg-red-500 text-white px-4 py-2 rounded"
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ManageUsers;
