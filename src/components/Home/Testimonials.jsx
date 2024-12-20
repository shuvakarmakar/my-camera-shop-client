const Testimonials = () => {
    const testimonials = [
        {
            id: 1,
            name: "John Doe",
            feedback: "Amazing quality and service. Highly recommend this store!",
            image: "/assets/user1.jpg",
        },
        {
            id: 2,
            name: "Jane Smith",
            feedback: "Found the perfect camera for my needs. Thank you so much!",
            image: "/assets/user2.jpg",
        },
        {
            id: 3,
            name: "Michael Brown",
            feedback: "Great collection of cameras and accessories at reasonable prices.",
            image: "/assets/user3.jpg",
        },
    ];

    return (
        <section className="py-12 bg-base-200">
            <div className="container mx-auto">
                <h2 className="text-3xl lg:text-4xl font-bold text-center mb-8">What Our Customers Say</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {testimonials.map((testimonial) => (
                        <div key={testimonial.id} className="card bg-base-100 shadow-lg p-6">
                            <div className="flex items-center mb-4">
                                <img
                                    src={testimonial.image}
                                    alt={testimonial.name}
                                    className="w-16 h-16 rounded-full mr-4"
                                />
                                <div>
                                    <h3 className="font-bold">{testimonial.name}</h3>
                                    <p className="text-sm text-gray-500">Verified Buyer</p>
                                </div>
                            </div>
                            <p className="italic text-gray-700">"{testimonial.feedback}"</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
