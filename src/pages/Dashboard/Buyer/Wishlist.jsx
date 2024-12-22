import { useEffect, useState } from "react";
import useUserData from "../../../hook/useUserData";
import axios from "axios";
import ProductCard from "../../../components/ProductCard";
import Loading from "../../Loading";

const Wishlist = () => {
    const [wishlist, setWishlist] = useState([]);
    const userData = useUserData();
    const [latestData, setLatestData] = useState(true);
    const token = localStorage.getItem('access-token');

    useEffect(() => {
        const fetchWishlist = async () => {
            await axios.get(`http://localhost:3000/wishlist/${userData._id}`, {
                headers: {
                    authorization: `Bearer ${token}`,
                },
            })
                .then((res) => setWishlist(res.data));
        };

        if (userData._id && token) {
            fetchWishlist();
        }
    }, [token, userData._id, latestData]);

    return (
        <div className="min-h-scree py-10 px-5">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
                    My Wishlist
                </h1>
                {wishlist.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {wishlist.map((product) => (
                            <ProductCard
                                key={product._id}
                                product={product}
                                isInWishlist
                                setLatestData={setLatestData}
                            />
                        ))}
                    </div>
                ) : (
                    <div>
                        <Loading></Loading>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Wishlist;
