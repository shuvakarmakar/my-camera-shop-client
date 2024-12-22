import { useState, useEffect } from 'react';
import { TypeAnimation } from 'react-type-animation';
import camera1 from '../../assets/Banner/alexander-wang-KjyrxSHwqTg-unsplash.jpg';
import camera2 from '../../assets/Banner/mario-calvo-5tKtllqhx8U-unsplash.jpg';
import camera3 from '../../assets/Banner/robert-shunev-mS1nlYbq1kA-unsplash.jpg';

const Banner = () => {
    const images = [camera1, camera2, camera3];
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
        }, 3000); // Change slide every 3 seconds

        return () => clearInterval(interval); // Clean up on unmount
    }, [images.length]);

    return (
        <div className="relative w-full">
            {/* Carousel Section */}
            <div className="carousel w-full h-[50vh] lg:h-[90vh] overflow-hidden">
                {images.map((src, index) => (
                    <div
                        key={index}
                        className={`carousel-item w-full h-full ${currentSlide === index ? 'block' : 'hidden'
                            }`}
                    >
                        <img
                            src={src}
                            alt={`Slide ${index}`}
                            className="w-full h-full object-cover"
                        />
                    </div>
                ))}
            </div>

            {/* Overlay Section */}
            <div className="absolute inset-0 flex flex-col justify-center items-center text-white bg-gradient-to-b from-black via-transparent to-black px-4 text-center">
                <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-wide drop-shadow-lg">
                    Welcome to Camera Shop
                </h1>
                <TypeAnimation
                    sequence={[
                        'Discover Amazing Cameras',
                        1000,
                        'Capture Your Best Moments',
                        1000,
                        'Experience Quality',
                        1000,
                    ]}
                    speed={50}
                    wrapper="span"
                    repeat={Infinity}
                    className="text-lg md:text-xl lg:text-2xl font-medium mt-4 drop-shadow-lg"
                />
                <div className="mt-6 flex flex-col md:flex-row gap-4">
                    <button
                        onClick={() => {
                            const targetSection = document.getElementById('features');
                            if (targetSection) {
                                targetSection.scrollIntoView({ behavior: 'smooth' });
                            }
                        }}
                        className="px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white font-bold rounded-full shadow-lg"
                    >
                        Explore Now
                    </button>
                </div>

            </div>

            {/* Manual Navigation */}
            <div className="absolute left-5 right-5 top-1/2 transform -translate-y-1/2 flex justify-between">
                <button
                    onClick={() =>
                        setCurrentSlide(
                            (currentSlide - 1 + images.length) % images.length
                        )
                    }
                    className="btn btn-circle bg-gradient-to-r from-gray-800 to-gray-600 hover:from-gray-700 hover:to-gray-500 text-white"
                >
                    ❮
                </button>
                <button
                    onClick={() => setCurrentSlide((currentSlide + 1) % images.length)}
                    className="btn btn-circle bg-gradient-to-r from-gray-800 to-gray-600 hover:from-gray-700 hover:to-gray-500 text-white"
                >
                    ❯
                </button>
            </div>
        </div>
    );
};

export default Banner;
