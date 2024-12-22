import { useState, useEffect } from 'react';
import axios from 'axios';
import Loading from '../../Loading';
import Swal from 'sweetalert2';

const MyProducts = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const token = localStorage.getItem('access-token');
    const [editProduct, setEditProduct] = useState(null); 
    const [updatedProduct, setUpdatedProduct] = useState({
        title: '',
        price: '',
        description: '',
        category: '',
        imageURL: '',
    });

    // Fetch seller's products from the API
    useEffect(() => {
        const fetchProducts = async () => {
            setLoading(true);
            try {
                const response = await axios.get('https://my-camera-shop-server.vercel.app/seller-products', {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                setProducts(response.data);
                // console.log(response.data); 
            } catch (err) {
                console.error("Error fetching products:", err);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, [token]);

    // Handle toggling the expanded description
    const [expandedDescription, setExpandedDescription] = useState({});

    const toggleDescription = (id) => {
        setExpandedDescription((prevState) => ({
            ...prevState,
            [id]: !prevState[id],
        }));
    };

    const handleEditClick = (product) => {
        // Set the current product values to the updatedProduct state
        setEditProduct(product);
        setUpdatedProduct({
            title: product.title,
            price: product.price,
            description: product.description,
            category: product.category,
            imageURL: product.imageURL,
        });
    };

    const handleInputChange = (e) => {
        setUpdatedProduct({
            ...updatedProduct,
            [e.target.name]: e.target.value,
        });
    };

    const handleSaveEdit = async () => {
        if (!updatedProduct.title || !updatedProduct.price) {
            Swal.fire('Error', 'Please fill in all required fields', 'error');
            return;
        }

        try {
            const response = await axios.put(`https://my-camera-shop-server.vercel.app/edit-product/${editProduct._id}`, updatedProduct, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            Swal.fire('Success', 'Product updated successfully', 'success');
            // Update the product in the state after successful update
            setProducts(products.map((product) => (product._id === editProduct._id ? updatedProduct : product)));
            setEditProduct(null); // Close the modal after saving
        } catch (err) {
            Swal.fire('Error', 'There was an issue updating the product', 'error');
            console.error('Error updating product:', err);
        }
    };


    // Delete Product Handler with SweetAlert confirmation
    const handleDeleteClick = async (productId) => {
        Swal.fire({
            title: 'Are you sure?',
            text: 'Do you want to delete this product?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'Cancel',
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    const response = await axios.delete(`https://my-camera-shop-server.vercel.app/delete-product/${productId}`, {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    });
                    console.log(response.data);
                    // Remove deleted product from state
                    setProducts(products.filter((product) => product._id !== productId));
                    Swal.fire('Deleted!', 'The product has been deleted.', 'success');
                } catch (err) {
                    console.error("Error deleting product:", err);
                    Swal.fire('Error!', 'There was a problem deleting the product.', 'error');
                }
            }
        });
    };


    if (loading) return <Loading></Loading>

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">My Products</h1>
            {products.length === 0 ? (
                <p>No products found.</p>
            ) : (
                <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {products.map((product) => (
                        <li key={product._id} className="border p-4 rounded-lg shadow-md">
                            <h2 className="text-xl font-semibold">{product.title}</h2>
                            {product.imageURL && (
                                <img
                                    src={product.imageURL}
                                    alt={product.title}
                                    className="w-full h-40 object-cover rounded-md mt-2"
                                />
                            )}
                            <p className="text-sm text-gray-500">{product.category}</p>
                            <p className="text-lg font-semibold">${product.price}</p>

                            {product.description && (
                                <p className="text-sm text-gray-700 mt-2">
                                    {expandedDescription[product._id]
                                        ? product.description
                                        : product.description.slice(0, 50) + '...'}
                                    <button
                                        className="text-blue-500 ml-2"
                                        onClick={() => toggleDescription(product._id)}
                                    >
                                        {expandedDescription[product._id] ? 'Read Less' : 'Read More'}
                                    </button>
                                </p>
                            )}

                            <div className="mt-4 flex space-x-2">
                                <button
                                    className="bg-blue-500 text-white py-1 px-3 rounded-md hover:bg-blue-600"
                                    onClick={() => handleEditClick(product)}
                                >
                                    Edit
                                </button>
                                <button
                                    className="bg-red-500 text-white py-1 px-3 rounded-md hover:bg-red-600"
                                    onClick={() => handleDeleteClick(product._id)}
                                >
                                    Delete
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>
            )}

            {/* Modal For Edit Products */}
            {editProduct && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
                    <div className="bg-white p-6 rounded-lg w-96">
                        <h2 className="text-xl font-semibold mb-4">Edit Product</h2>
                        <div>
                            <label className="block text-sm font-medium mb-1">Title</label>
                            <input
                                type="text"
                                name="title"
                                value={updatedProduct.title}
                                onChange={handleInputChange}
                                className="w-full p-2 border rounded-md mb-4"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-1">Price</label>
                            <input
                                type="number"
                                name="price"
                                value={updatedProduct.price}
                                onChange={handleInputChange}
                                className="w-full p-2 border rounded-md mb-4"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-1">Description</label>
                            <textarea
                                name="description"
                                value={updatedProduct.description}
                                onChange={handleInputChange}
                                className="w-full p-2 border rounded-md mb-4"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-1">Category</label>
                            <input
                                type="text"
                                name="category"
                                value={updatedProduct.category}
                                onChange={handleInputChange}
                                className="w-full p-2 border rounded-md mb-4"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-1">Image URL</label>
                            <input
                                type="text"
                                name="imageURL"
                                value={updatedProduct.imageURL}
                                onChange={handleInputChange}
                                className="w-full p-2 border rounded-md mb-4"
                            />
                        </div>
                        <div className="flex space-x-2">
                            <button
                                onClick={handleSaveEdit}
                                className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
                            >
                                Save
                            </button>
                            <button
                                onClick={() => setEditProduct(null)}
                                className="bg-gray-500 text-white py-2 px-4 rounded-md hover:bg-gray-600"
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default MyProducts;
