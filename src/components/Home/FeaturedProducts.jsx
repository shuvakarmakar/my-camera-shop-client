const FeaturedProducts = () => {
    const products = [
        { id: 1, name: "Canon EOS 1500D", price: "$450", image: "/assets/canon.jpg" },
        { id: 2, name: "Nikon D5600", price: "$600", image: "/assets/nikon.jpg" },
        { id: 3, name: "Sony Alpha A7 III", price: "$1,200", image: "/assets/sony.jpg" },
    ];

    return (
        <section className="py-12 bg-base-100">
            <div className="container mx-auto">
                <h2 className="text-3xl lg:text-4xl font-bold text-center mb-8">Featured Products</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {products.map((product) => (
                        <div key={product.id} className="card bg-base-200 shadow-lg">
                            <figure>
                                <img src={product.image} alt={product.name} className="w-full h-64 object-cover" />
                            </figure>
                            <div className="card-body">
                                <h3 className="card-title">{product.name}</h3>
                                <p className="text-lg font-semibold">{product.price}</p>
                                <div className="card-actions justify-end">
                                    <button className="btn btn-primary">View Details</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturedProducts;
