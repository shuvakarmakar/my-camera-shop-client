const AboutUs = () => {
    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10 px-5">
            <div className="max-w-4xl text-center">
                <h1 className="text-4xl font-bold text-gray-800 mb-4">About Us</h1>
                <p className="text-gray-600 leading-7">
                    Welcome to <span className="font-bold text-blue-500">My Camera Shop</span>, your ultimate destination for high-quality cameras and photography gear.
                    We are passionate about helping photographers and creators capture life’s moments with the best tools and accessories.
                    From beginners to professionals, we have something for everyone.
                </p>
                <img
                    src="https://img.freepik.com/free-photo/top-view-photography-accesories-with-copy-space_23-2148363427.jpg?t=st=1734716898~exp=1734720498~hmac=dd293cd1fd96ff96bed91c7d6e0bbb3861b4e20d47da848a7f1e68b2353b5061&w=1380"
                    alt="Photography Accessories"
                    className="w-full max-w-3xl mx-auto rounded-lg shadow-lg mt-8"
                />
                <div className="mt-8 space-y-6">
                    <h2 className="text-2xl font-bold text-gray-700">Our Mission</h2>
                    <p className="text-gray-600 leading-7">
                        At My Camera Shop, our mission is to empower photographers and creators by providing top-notch products, expert advice, and exceptional customer service.
                        We strive to make photography accessible and enjoyable for everyone.
                    </p>
                </div>
                <div className="mt-8 space-y-6">
                    <h2 className="text-2xl font-bold text-gray-700">Why Choose Us?</h2>
                    <ul className="list-disc list-inside text-gray-600 leading-7">
                        <li>A wide range of cameras, lenses, and accessories.</li>
                        <li>Competitive pricing with exclusive deals.</li>
                        <li>Knowledgeable staff and excellent customer support.</li>
                        <li>Trusted by thousands of photographers worldwide.</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;