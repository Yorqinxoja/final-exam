import { useParams } from "react-router-dom";
import { useViewdeatesQuery } from "../../redux/api/usersApi";
import { RootState } from '../../redux/type';
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../../redux/slices/cartSlices";
import { Product } from "../../redux/type";
import { useState } from "react";

const Details = () => {
    const dispatch = useDispatch();
    const { productId } = useParams<{ productId: string }>();
    
    const { data, isLoading, error } = useViewdeatesQuery(parseInt(productId!)); 
    
    const [isAdding, setIsAdding] = useState(false); 
    
    const currency = useSelector((state: RootState) => state.currency.selected);

    const formatPrice = (price: number | string) => {
        const numericPrice = typeof price === 'string' ? parseFloat(price) : price;
        if (isNaN(numericPrice)) return "";
        return currency === "UZS" ? 
            (numericPrice * 12600).toLocaleString() + " UZS" : 
            "$" + numericPrice.toFixed(2);
    };

    const handleAddToCart = (product: Product) => {
        setIsAdding(true);
        setTimeout(() => {
            dispatch(addToCart(product));
            console.log("Added to cart");
            setIsAdding(false); 
        }, 1000); 
    };

    if (isLoading) {
        return (
            <div className="flex justify-center items-center min-h-screen">
                <div className="loader"></div>
                <p className="text-xl text-center ml-4">Mahsulot yuklanmoqda...</p>
            </div>
        );
    }

    if (error) {
        return <p className="text-center text-xl py-10 text-red-500">Mahsulotni olishda xatolik</p>;
    }

    if (!data) {
        return <p className="text-center text-xl py-10">Mahsulot topilmadi</p>;
    }

    const product = data;

    return (
        <div className="py-10 bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400 min-h-screen flex items-center justify-center">
            <div className="container mx-auto px-4 max-w-4xl bg-white shadow-lg rounded-lg overflow-hidden">
                <div className="flex flex-col md:flex-row">
                    <div className="md:w-1/2">
                        <img 
                            src={product.image_link} 
                            alt={product.name} 
                            className="w-full h-full object-cover transition-transform duration-300 transform hover:scale-105"
                        />
                    </div>
                    <div className="md:w-1/2 p-6 flex flex-col justify-center">
                        <h2 className="text-4xl font-extrabold mb-4 text-gray-800">{product.name}</h2>
                        <p className="text-lg font-semibold text-gray-600 mb-2">{product.category}</p>
                        <p className="text-2xl text-pink-600 font-bold mb-4">{formatPrice(product.price)}</p>
                        <div className="flex items-center mb-4">
                            <p className="text-yellow-400 text-xl">⭐ {product.rating}</p>
                            <span className="ml-4 text-lg">{product.brand}</span>
                        </div>
                        <p className="text-gray-700 leading-relaxed mb-6">{product.description}</p>
                        <button 
                            onClick={() => handleAddToCart(product)}  
                            className={`bg-pink-500 text-white py-2 px-4 rounded-full hover:bg-pink-600 transition-colors duration-300 ${isAdding ? "cursor-not-allowed" : ""}`}
                            disabled={isAdding}
                        >
                            {isAdding ? "Qo'shilmoqda..." : "Savatga qo'shish"}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;
