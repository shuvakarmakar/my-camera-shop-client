import { useEffect, useState } from 'react';
import Loading from '../../pages/Loading';

const FeaturedProducts = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch('http://localhost:3000/all-products');
                const data = await response.json();
                setProducts(data.products || []);
            } catch (error) {
                setError('Failed to load products');
            } finally {
                setLoading(false);
            }
        };
        fetchProducts();
    }, []);

    // Function to open modal and set the selected product
    const openModal = (product) => {
        setSelectedProduct(product);
        setIsModalOpen(true);
    };

    // Function to close modal
    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedProduct(null);
    };

    if (loading) {
        return <Loading />;
    }

    if (error) {
        return <div className="text-center py-12 text-red-500">{error}</div>;
    }

    return (
        <section id='features' className="py-12 bg-gradient-to-r from-gray-100 to-gray-200">
            <div className="container mx-auto px-4">
            <h2 className="text-3xl lg:text-4xl font-extrabold text-center mb-12">Featured Products</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {Array.isArray(products) && products.length > 0 ? (
                        products.slice(0, 3).map((product) => (
                            <div
                                key={product._id}
                                className="card bg-white shadow-lg rounded-lg transform transition duration-300 hover:scale-105 hover:shadow-xl"
                            >
                                <figure className="rounded-t-lg overflow-hidden">
                                    <img
                                        src={product.imageURL}
                                        alt={product.title}
                                        className="w-full h-64 object-cover hover:opacity-90"
                                    />
                                </figure>
                                <div className="card-body p-6">
                                    <h3 className="text-xl font-semibold text-gray-800 mb-2 truncate">
                                        {product.title}
                                    </h3>
                                    <p className="text-xl lg:text-xl font-extrabold text-blue-600 mb-4 flex items-center space-x-2">
                                        <span>BDT</span>
                                        <span className="text-2xl text-gradient-to-r from-yellow-400 to-red-500">{product.price}</span>
                                        <span className="text-sm text-gray-600">/unit</span>
                                    </p>

                                    <div className="card-actions flex justify-end items-center">
                                        <button
                                            onClick={() => openModal(product)}
                                            className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 focus:outline-none"
                                        >
                                            View Details
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="text-center py-12 text-red-500">No products available.</div>
                    )}
                </div>
            </div>

            {/* Modal for product details */}
            {isModalOpen && selectedProduct && (
                <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full">
                        <button
                            onClick={closeModal}
                            className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
                        >
                            X
                        </button>
                        <h2 className="text-2xl font-bold text-gray-800 mb-4">{selectedProduct.title}</h2>
                        <img
                            src={selectedProduct.imageURL}
                            alt={selectedProduct.title}
                            className="w-full h-64 object-cover mb-4"
                        />
                        <p className="text-lg font-medium text-gray-600 mb-4">${selectedProduct.price}</p>
                        <p className="text-base text-gray-700 mb-4">
                            {selectedProduct.description
                                ? selectedProduct.description.split(' ').slice(0, 50).join(' ') + (selectedProduct.description.split(' ').length > 100 ? '...' : '')
                                : ''}
                        </p>
                        <button
                            onClick={closeModal} // Close modal
                            className="px-4 py-2 w-full bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </section>
    );
};

export default FeaturedProducts;
