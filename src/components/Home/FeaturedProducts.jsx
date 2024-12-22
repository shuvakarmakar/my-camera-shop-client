import React, { useEffect, useState } from 'react';

const FeaturedProducts = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch('http://localhost:3000/all-products');
                const data = await response.json();
                // Ensure you're accessing the `products` key in the API response
                setProducts(data.products || []);  // Use an empty array if `products` key doesn't exist
            } catch (error) {
                setError('Failed to load products');
            } finally {
                setLoading(false);
            }
        };
        fetchProducts();
    }, []);

    if (loading) {
        return <div className="text-center py-12">Loading...</div>;
    }

    if (error) {
        return <div className="text-center py-12 text-red-500">{error}</div>;
    }

    return (
        <section className="py-12 bg-base-100">
            <div className="container mx-auto">
                <h2 className="text-3xl lg:text-4xl font-bold text-center mb-8">Featured Products</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {Array.isArray(products) && products.length > 0 ? (
                        products.slice(0, 3).map((product) => (
                            <div key={product._id} className="card bg-base-200 shadow-lg">
                                <figure>
                                    <img
                                        src={product.imageURL}
                                        alt={product.title}
                                        className="w-full h-64 object-cover"
                                    />
                                </figure>
                                <div className="card-body">
                                    <h3 className="card-title">{product.title}</h3>
                                    <p className="text-lg font-semibold">${product.price}</p>
                                    <div className="card-actions justify-end">
                                        <button className="btn btn-primary">View Details</button>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="text-center py-12 text-red-500">No products available.</div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default FeaturedProducts;
