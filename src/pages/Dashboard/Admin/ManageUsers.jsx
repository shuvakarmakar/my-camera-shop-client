import { useEffect, useState } from 'react';
import useUserData from '../../../hook/useUserData';

const ManageUsers = () => {
    const userData = useUserData();
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const token = localStorage.getItem('access-token');


    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await fetch('http://localhost:3000/users', {
                    method: 'GET',
                    headers: {
                        Authorization: `Bearer ${token}`,
                        'Content-Type': 'application/json',
                    },
                });

                if (!response.ok) {
                    throw new Error('Failed to fetch users');
                }

                const data = await response.json();
                console.log(data);
                setUsers(data)
            } catch (error) {
                console.error('Error fetching users:', error);
            } finally {
                setLoading(false);
            }
        };

        if (userData?.role === 'admin') {
            fetchUsers();
        }
    }, [userData]);

    if (!userData || userData.role !== 'admin') {
        return (
            <div className="p-4">
                <h1 className="text-2xl font-semibold text-red-500">
                    Access Denied: Admins Only
                </h1>
            </div>
        );
    }

    if (loading) {
        return (
            <div className="p-4">
                <h1 className="text-2xl font-semibold">Loading...</h1>
            </div>
        );
    }

    return (
        <div className="p-4">
            <h1 className="text-2xl font-semibold mb-4">Manage Users</h1>
            <div className="overflow-x-auto">
                <table className="table-auto w-full border-collapse border border-gray-300">
                    <thead className="bg-gray-200">
                        <tr>
                            <th className="border border-gray-300 px-4 py-2">#</th>
                            <th className="border border-gray-300 px-4 py-2">Name</th>
                            <th className="border border-gray-300 px-4 py-2">Email</th>
                            <th className="border border-gray-300 px-4 py-2">Role</th>
                            <th className="border border-gray-300 px-4 py-2">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user, index) => (
                            <tr key={user._id} className="hover:bg-gray-100">
                                <td className="border border-gray-300 px-4 py-2">{index + 1}</td>
                                <td className="border border-gray-300 px-4 py-2">{user.name}</td>
                                <td className="border border-gray-300 px-4 py-2">{user.email}</td>
                                <td className="border border-gray-300 px-4 py-2">{user.role}</td>
                                <td className="border border-gray-300 px-4 py-2">
                                    <button className="text-white bg-blue-500 px-2 py-1 rounded mr-2">
                                        Edit
                                    </button>
                                    <button className="text-white bg-red-500 px-2 py-1 rounded">
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageUsers;
