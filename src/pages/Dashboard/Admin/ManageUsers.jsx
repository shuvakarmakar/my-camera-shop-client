import { useEffect, useState } from 'react';
import useUserData from '../../../hook/useUserData';
import Loading from '../../Loading';
import Swal from 'sweetalert2';

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
                // console.log(data);
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



    const changeUserRole = async (userId, newRole) => {
        const token = localStorage.getItem('access-token');

        // UI Update
        setUsers((prevUsers) =>
            prevUsers.map((user) =>
                user._id === userId ? { ...user, role: newRole } : user
            )
        );

        // API Call
        const response = await fetch(`http://localhost:3000/users/${userId}`, {
            method: 'PATCH',
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ role: newRole }),
        });

        if (!response.ok) {
            console.error('Failed to update user role on the server');
        }
    };



    const deleteUser = (userId) => {
        const token = localStorage.getItem('access-token');

        // Show confirmation dialog
        Swal.fire({
            title: 'Are you sure?',
            text: 'Do you want to delete this user? This action cannot be undone.',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#3085d6',
            confirmButtonText: 'Yes, delete it!',
        }).then((result) => {
            if (result.isConfirmed) {
                // Proceed with delete if confirmed
                fetch(`http://localhost:3000/users/${userId}`, {
                    method: 'DELETE',
                    headers: {
                        Authorization: `Bearer ${token}`,
                        'Content-Type': 'application/json',
                    },
                })
                    .then((response) => {
                        if (!response.ok) {
                            throw new Error('Failed to delete user');
                        }
                        return response.json(); // or response.status for no body
                    })
                    .then(() => {
                        // Update the state to remove the deleted user
                        setUsers((prevUsers) => prevUsers.filter((user) => user._id !== userId));

                        // Show success message
                        Swal.fire(
                            'Deleted!',
                            'The user has been deleted successfully.',
                            'success'
                        );
                    })
                    .catch((error) => {
                        console.error('Error deleting user:', error);
                        Swal.fire('Error!', 'Failed to delete the user.', 'error');
                    });
            }
        });
    };

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
        return <Loading></Loading>
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
                                <td className="border border-gray-300 px-4 py-2 text-center">{index + 1}</td>
                                <td className="border border-gray-300 px-4 py-2 text-center">{user.name}</td>
                                <td className="border border-gray-300 px-4 py-2 text-center">{user.email}</td>
                                <td className="border border-gray-300 px-4 py-2 text-center">{user.role}</td>
                                <td className="border border-gray-300 px-4 py-2 text-center">
                                    <select
                                        value={user.role || 'default'}
                                        onChange={(e) => changeUserRole(user._id, e.target.value)}
                                        className="border rounded p-1"
                                    >
                                        <option value="buyer">Buyer</option>
                                        <option value="seller">Seller</option>
                                        <option value="admin">Admin</option>
                                    </select>
                                    <button
                                        onClick={() => deleteUser(user._id)}
                                        className="ml-2 text-white bg-red-500 px-2 py-1 rounded"
                                    >
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
