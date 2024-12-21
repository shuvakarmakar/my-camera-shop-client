import axios from "axios";
import Swal from "sweetalert2";
import useUserData from "../hook/useUserData";

/* eslint-disable react/prop-types */
const ProductCard = ({ product }) => {
    if (!product || Object.keys(product).length === 0) return null; // Defensive check

    const userData = useUserData();

    const handleWishlist = async () => {
        if (userData?.role !== "buyer") {
            Swal.fire({
                icon: "warning",
                title: "Unauthorized",
                text: "Only buyers can add products to their wishlist.",
            });
            return;
        }

        try {
            const res = await axios.patch("http://localhost:3000/wishlist/add", {
                userEmail: userData.email,
                productId: product._id,
            });

            if (res.data.modifiedCount) {
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Product Added to Your Wishlist Successfully",
                    showConfirmButton: false,
                    timer: 1500,
                });
            }
        } catch (error) {
            Swal.fire({
                icon: "error",
                title: "Error",
                text: "Failed to add product to wishlist. Please try again later.",
            });
        }
    };

    return (
        <div className="rounded-md border-1 shadow-md">
            <figure>
                <img
                    src={product.imageURL || "placeholder.jpg"} // Fallback image
                    alt="Product Image"
                    className="w-full h-300 object-cover rounded-t-md"
                />
            </figure>
            <div className="p-2">
                <h2 className="text-xl font-bold">{product.title || "No Title"}</h2>
                <h2 className="text-lg font-semibold">{product.brand || "No Brand"}</h2>
                <h2 className="text-sm">
                    Price: BDT <span className="text-red-600">{product.price || "N/A"}</span>
                </h2>
                <h2 className="text-sm">
                    In Stock: <span className="text-red-600">{product.stock || "0"}</span>
                </h2>
                <h2 className="text-sm font-semibold">{product.category || "No Category"}</h2>
                <p className="text-xs mt-4">
                    {product.description && product.description.length < 50
                        ? product.description
                        : `${product.description?.slice(0, 50) || "No Description"}...`}
                </p>
                <div>
                    {userData?.role === "buyer" ? (
                        <button onClick={handleWishlist} className="btn mt-4 w-full btn-sm">
                            Add To Wishlist
                        </button>
                    ) : (
                        <button
                            disabled
                            className="btn mt-4 w-full btn-sm btn-disabled cursor-not-allowed"
                            title="Only buyers can add to the wishlist"
                        >
                            Add To Wishlist
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
