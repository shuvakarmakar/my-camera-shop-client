import { TypeAnimation } from 'react-type-animation';

const Banner = () => {
    const images = [
        'https://img.freepik.com/free-photo/closeup-old-retro-camera-lens_155003-9926.jpg?t=st=1734692159~exp=1734695759~hmac=67bf4987edc6bf6a51e40083d7cec98af51955d0cf0f2a03071e3b4861aa704e&w=1380',
        'https://img.freepik.com/free-photo/professional-camera-blurred_169016-10249.jpg?t=st=1734692161~exp=1734695761~hmac=11a572043830fd978205a0ae6044af02b865a6060742d2e86041047bc4d076da&w=1380',
        'https://img.freepik.com/free-photo/high-angle-photo-camera-indoors-still-life_23-2150630966.jpg?t=st=1734692170~exp=1734695770~hmac=f5779bbc9e8fcc1a49642b88c783a75c7759d733ce3b02009228a4dad09bc597&w=1380',
    ];

    return (
        <div className="relative w-full">
            <div className="carousel w-full min-h-screen lg:h-96">
                {images.map((src, index) => (
                    <div key={index} id={`slide${index}`} className="carousel-item w-full">
                        <img src={src} className="w-full object-cover" alt={`Slide ${index}`} />
                    </div>
                ))}
            </div>
            <div className="absolute inset-0 flex flex-col justify-center items-center text-white bg-black bg-opacity-50">
                <h1 className="text-4xl lg:text-6xl font-bold">Welcome to Camera Shop</h1>
                <TypeAnimation
                    sequence={[
                        'Discover Amazing Cameras', 1000, 
                        'Capture Your Best Moments', 1000,
                        'Experience Quality', 1000,
                    ]}
                    speed={50}
                    wrapper="span"
                    repeat={Infinity}
                    className="text-xl lg:text-2xl font-medium mt-4"
                />
            </div>
        </div>
    );
};

export default Banner;
