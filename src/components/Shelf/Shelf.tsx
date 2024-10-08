import { FcLike } from "react-icons/fc";
import { BiCartAdd } from "react-icons/bi";
import { useProductQuery } from "../../redux/api/usersApi";
import { Product } from "../../redux/type";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../redux/slices/cartSlices";
import { likeProduct } from "../../redux/slices/LikeSlices";
import { RootState } from '../../redux/type';
import { useNavigate } from "react-router-dom";
import "./Shelf.css";

const Products = () => {
    const navigate = useNavigate();
    const { data, isLoading, error } = useProductQuery();
    const dispatch = useDispatch();
    const currency = useSelector((state: RootState) => state.currency.selected);

    const handleAddToCart = (product: Product) => {
        dispatch(addToCart(product));
    };

    const handleLikeProduct = (product: Product) => {
        dispatch(likeProduct(product.id));
    };

    const formatPrice = (price: string) => {
        const numericPrice = parseFloat(price);
        if (isNaN(numericPrice)) return "";
        
        if (currency === "UZS") {
            return (numericPrice * 12600).toLocaleString() + " UZS";
        }
        return "$" + numericPrice.toFixed(2);
    };

    const handleViewDetails = (productId: number) => {
        navigate(`/details/${productId}`);
    };

    if (isLoading) return <p className="text-center py-4">Mahsulotlar yuklanmoqda...</p>;
    if (error) return <p className="text-center py-4 text-red-500">Mahsulotlarni olishda xatolik</p>;

    return (
        <div className="p-8 max-w-[1500px] mx-auto">
            <h1 className="text-4xl font-bold mb-12 text-center text-gray-800">Flying off the shelves</h1>

            <div className="flex space-x-6 overflow-x-auto py-4 no-scrollbar custom-scrollbar">
                {data?.slice(140, 154).map((product: Product) => (
                    <div
                        key={product.id}
                        className="flex-shrink-0 bg-white shadow-lg rounded-lg p-6 w-[300px] transition-transform transform hover:scale-105 hover:shadow-xl duration-300"
                    >
                        <div className="relative h-[200px] bg-gray-200 mb-4 overflow-hidden rounded-lg">
                            <img
                                src={product.image_link}
                                alt={product.name}
                                className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                            />
                        </div>
                        <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                        <p className="text-gray-600 mb-1">{product.category}</p>
                        <p className="text-pink-600 font-bold text-lg mb-2">{formatPrice(product.price)}</p>
                        <p className="text-sm text-gray-700 mb-4 line-clamp-2">{product.description}</p>

                        <button onClick={() => handleViewDetails(product.id)} className="text-blue-500 underline text-sm mb-4 inline-block hover:text-blue-600 cursor-pointer transition duration-200">
                            Mahsulotni ko‘rish
                        </button>

                        <div className="flex justify-between items-center mt-4">
                            <button
                                onClick={() => handleAddToCart(product)}
                                className="flex items-center bg-blue-600 text-white px-3 py-2 rounded-lg hover:bg-blue-700 transition duration-300"
                            >
                                <BiCartAdd className="mr-2 text-2xl" />
                                Savatchaga qo‘shish
                            </button>

                            <button 
                                onClick={() => handleLikeProduct(product)} 
                                className="text-2xl text-gray-600 hover:text-blue-600 transition duration-300"
                            >
                                <FcLike />
                            </button>
                        </div>

                        <div className="mt-2">
                            <span className="text-yellow-400">⭐ {product.rating}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Products;
