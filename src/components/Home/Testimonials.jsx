import user1 from '../../assets/Testimonial/12206.jpg';
import user2 from '../../assets/Testimonial/3542.jpg';
import user3 from '../../assets/Testimonial/548.jpg';

const Testimonials = () => {
    const testimonials = [
        {
            id: 1,
            name: "John Doe",
            feedback: "Amazing quality and service. Highly recommend this store!",
            image: user1,
        },
        {
            id: 2,
            name: "Jane Smith",
            feedback: "Found the perfect camera for my needs. Thank you so much!",
            image: user2,
        },
        {
            id: 3,
            name: "Michael Brown",
            feedback: "Great collection of cameras and accessories at reasonable prices.",
            image: user3,
        },
    ];

    return (
        <section className="py-16 bg-gradient-to-r from-blue-500 to-teal-400 text-white">
            <div className="container mx-auto">
                <h2 className="text-3xl lg:text-4xl font-extrabold text-center mb-12">What Our Customers Say</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonials.map((testimonial) => (
                        <div
                            key={testimonial.id}
                            className="card bg-white shadow-xl rounded-xl p-8 transform transition duration-300 hover:scale-105 hover:shadow-2xl"
                        >
                            <div className="flex items-center mb-6">
                                <img
                                    src={testimonial.image}
                                    alt={testimonial.name}
                                    className="w-20 h-20 rounded-full border-4 border-blue-500 mr-6 object-cover"
                                />
                                <div>
                                    <h3 className="font-semibold text-xl">{testimonial.name}</h3>
                                    <p className="text-sm text-gray-500">Verified Buyer</p>
                                </div>
                            </div>
                            <p className="italic text-gray-800 text-lg">"{testimonial.feedback}"</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
