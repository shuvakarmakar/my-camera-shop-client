import axios from "axios";
import Swal from "sweetalert2";
import useUserData from "../hook/useUserData";

/* eslint-disable react/prop-types */
const ProductCard = ({ product, isInWishlist, setLatestData }) => {
    if (!product || Object.keys(product).length === 0) return null; // Defensive check

    const userData = useUserData();
    const userEmail = userData.email;

    const handleWishlist = async () => {
        await axios.patch("https://my-camera-shop-server.vercel.app/wishlist/add", {
            userEmail: userEmail,
            productId: product._id
        }).then((res) => {
            if (res.data.modifiedCount) {
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Product Added to Your Cart Successfully",
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        }
        )
    }
    const handleRemoveFromWishlist = async () => {
        await axios.patch("https://my-camera-shop-server.vercel.app/wishlist/remove", {
            userEmail: userEmail,
            productId: product._id
        }).then((res) => {
            if (res.data.modifiedCount) {
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Product Remove From Your Cart Successfully",
                    showConfirmButton: false,
                    timer: 1500
                });
                setLatestData((prev) => !prev)
            }
        }
        )
    }


    return (
        <div className="max-w-sm mx-auto bg-white rounded-lg shadow-lg hover:shadow-2xl transition duration-300 ease-in-out transform hover:scale-105 overflow-hidden flex flex-col">
            <figure>
                <img
                    src={product.imageURL || "placeholder.jpg"}
                    alt="Product Image"
                    className="w-full h-60 object-cover rounded-t-lg transition-transform duration-300 ease-in-out"
                />
            </figure>
            <div className="p-6 flex flex-col flex-grow space-y-4">
                <h2 className="text-2xl font-semibold text-gray-800">{product.title || "No Title"}</h2>
                <p className="text-sm text-gray-500">{product.brand || "No Brand"}</p>

                <div className="flex items-center space-x-2">
                    <span className="text-lg font-bold text-red-600">
                        BDT <span className="text-2xl">{product.price || "N/A"}</span>
                    </span>
                    <span className="text-sm text-gray-400 line-through">
                        {product.originalPrice && `BDT ${product.originalPrice}`}
                    </span>
                </div>

                <div className="flex justify-between items-center text-sm text-gray-600">
                    <span>In Stock: {product.stock || "0"}</span>
                    <span>{product.category || "No Category"}</span>
                </div>

                <p className="text-sm text-gray-700 mt-4">
                    {product.description && product.description.length < 50
                        ? product.description
                        : `${product.description?.slice(0, 50) || "No Description"}...`}
                </p>
            </div>

            {/* Button Section - Visible only for Buyers */}
            {userData.role === "buyer" && (
                <div className="p-6 mt-auto">
                    {isInWishlist ? (
                        <button
                            onClick={handleRemoveFromWishlist}
                            className="w-full bg-red-500 text-white font-bold py-3 rounded-md transition-all duration-300 ease-in-out hover:bg-red-600 focus:outline-none">
                            Remove from Wishlist
                        </button>
                    ) : (
                        <button
                            onClick={handleWishlist}
                            className="w-full bg-blue-500 text-white font-bold py-3 rounded-md transition-all duration-300 ease-in-out hover:bg-blue-600 focus:outline-none"
                        >
                            Add To Wishlist
                        </button>
                    )}
                </div>
            )}
        </div>



    );
};

export default ProductCard;