
const ContactUs = () => {
    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10 px-5">
            <div className="max-w-4xl text-center">
                <p className="text-gray-600 leading-7">
                    We at <span className="font-bold text-blue-500">My Camera Shop</span> are here to assist you. Whether you have a question about our products, need expert advice on photography gear, or want to share feedback, we're just a message away!
                </p>

                <div className="mt-10 space-y-6">
                    <h2 className="text-2xl font-bold text-gray-700">Our Contact Details</h2>
                    <p className="text-gray-600 leading-7">
                        <strong>Email:</strong> support@mycamerashop.com<br />
                        <strong>Phone:</strong> +123 456 7890<br />
                        <strong>Address:</strong> 123 Camera Lane, Photo City, PC 56789
                    </p>
                </div>

                <div className="mt-8">
                    <h2 className="text-2xl font-bold text-gray-700">Follow Us</h2>
                    <p className="text-gray-600 leading-7">
                        Stay updated with the latest products, offers, and photography tips. Follow us on our social media channels:
                    </p>
                    <div className="flex justify-center space-x-4 mt-4">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
                            Facebook
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-pink-600 hover:text-pink-800">
                            Instagram
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-600">
                            Twitter
                        </a>
                    </div>
                </div>

                <div className="mt-10">
                    <h2 className="text-2xl font-bold text-gray-700">Store Hours</h2>
                    <p className="text-gray-600 leading-7">
                        <strong>Monday - Friday:</strong> 9:00 AM - 6:00 PM<br />
                        <strong>Saturday:</strong> 10:00 AM - 4:00 PM<br />
                        <strong>Sunday:</strong> Closed
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;