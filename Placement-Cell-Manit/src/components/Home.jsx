

import { useState } from 'react';

const Home = () => {
    const [currentImage, setCurrentImage] = useState(0);
    const images = [
        'https://images.pexels.com/photos/270637/pexels-photo-270637.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        'https://images.pexels.com/photos/270637/pexels-photo-270637.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        'https://images.pexels.com/photos/11960541/pexels-photo-11960541.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        // Add more image URLs here
    ];

    const handlePrevImage = () => {
        setCurrentImage((prevImage) => (prevImage === 0 ? images.length - 1 : prevImage - 1));
    };

    const handleNextImage = () => {
        setCurrentImage((prevImage) => (prevImage === images.length - 1 ? 0 : prevImage + 1));
    };

    return (
        <div className="bg-gray-900 text-white">
            <main className="py-20 px-4 sm:px-6 lg:px-8">
                <h2 className="text-4xl font-bold mb-8">Welcome to Placement Cell</h2>
                <p className="text-lg mb-8">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod justo id nunc tincidunt, a
                    tincidunt nisl ultrices. Nulla facilisi. Sed in mauris id nunc lacinia lacinia. Nullam auctor, nunc
                    at aliquam ultricies, nunc tellus tincidunt nunc, a aliquet nunc urna id mi.
                </p>
                <div className="relative">
                    <img src={images[currentImage]} alt="Slider" className="w-full" />
                    <button
                        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
                        onClick={handlePrevImage}
                    >
                        &lt;
                    </button>
                    <button
                        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
                        onClick={handleNextImage}
                    >
                        &gt;
                    </button>
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                        {images.map((_, index) => (
                            <div
                                key={index}
                                className={`w-4 h-4 rounded-full ${
                                    index === currentImage ? 'bg-blue-500' : 'bg-gray-300'
                                }`}
                            ></div>
                        ))}
                    </div>
                </div>
            </main>

            
        </div>
    );
};

export default Home;
