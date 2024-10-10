import { useState, useEffect } from "react";
import { FcLike } from "react-icons/fc";
import { useProductQuery } from "../../redux/api/usersApi";
import { Product } from "../../redux/type";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../redux/slices/cartSlices";
import { likeProduct } from "../../redux/slices/LikeSlices";
import { RootState } from '../../redux/type';
import { useNavigate } from "react-router-dom";
import { BiCartAdd } from "react-icons/bi";
import { AiFillEye } from "react-icons/ai";
import { setCurrency } from "../../redux/slices/currencySlice";
import "./productList.css";

const ProductList: React.FC = () => {
    const [likedProducts, setLikedProducts] = useState<number[]>([]);
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
    const [isPageLoading, setIsPageLoading] = useState(true);
    const navigate = useNavigate();
    const { data, isLoading, error } = useProductQuery();
    const dispatch = useDispatch();
    const currency = useSelector((state: RootState) => state.currency.selected);

    const defaultImage = "https://via.placeholder.com/150";

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsPageLoading(false);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    const handleAddToCart = (product: Product) => {
        dispatch(addToCart(product));
    };

    const handleLikeProduct = (product: Product) => {
        if (likedProducts.includes(product.id)) {
            setLikedProducts(likedProducts.filter((id) => id !== product.id));
        } else {
            setLikedProducts([...likedProducts, product.id]);
        }
        dispatch(likeProduct(product.id));
    };

    const formatPrice = (price: string): string => {
        const numericPrice = parseFloat(price);
        if (isNaN(numericPrice)) return "";

        if (currency === "UZS") {
            return (numericPrice * 12700).toLocaleString() + " UZS";
        }
        return "$" + numericPrice.toFixed(2);
    };

    const handleViewDetails = (productId: number) => {
        navigate(`/details/${productId}`);
    };

    const handleCurrencyChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        dispatch(setCurrency(e.target.value));
    };

    if (isLoading) return <p>LOADING...</p>;
    if (error) return <p>ERROR TRY AGAIN!</p>;

    const uniqueCategories = Array.from(new Set(data?.map(product => product.category)));
    const filteredProducts = selectedCategory ? data?.filter(product => product.category === selectedCategory) : data;

    if (isPageLoading) {
        return (
            <div className="product-loading-container">
                <img src="https://i.gifer.com/kq9.gif" alt="Loading..." className="product-loading-gif" />
            </div>
        );
    }

    return (
        <div className="product-list-wrapper">
            <h2 className="product-list-header">TOP PRODUCTS</h2>

            <div className="currency-selector">
                <label htmlFor="currency">Choose Currency: </label>
                <select id="currency" value={currency} onChange={handleCurrencyChange}>
                    <option value="USD">$ USD</option>
                    <option value="UZS">UZS</option>
                </select>
            </div>

            <div className="product-category-buttons">
                <button onClick={() => setSelectedCategory(null)} className="product-category-btn">All</button>
                {uniqueCategories.map((category) => (
                    <button
                        key={category}
                        onClick={() => setSelectedCategory(category)}
                        className="product-category-btn"
                    >
                        {category}
                    </button>
                ))}
            </div>

            <div className="product-grid">
                {filteredProducts?.map((product: Product) => (
                    <div
                        key={product.id}
                        className={`product-card-container ${likedProducts.includes(product.id) ? 'product-liked' : ''}`}
                    >
                        <div className="product-card-image">
                            <img
                                src={product.image_link || defaultImage}
                                alt={product.name}
                                onError={(e) => e.currentTarget.src = defaultImage}
                            />
                        </div>

                        <div className="product-card-info">
                            <h3>{product.name}</h3>
                            <p>{product.category}</p>
                            <p className="product-card-price">{formatPrice(product.price)}</p>
                        </div>
                        <div className="product-card-actions">
                            <button onClick={() => handleAddToCart(product)} className="product-card-add-to-cart">
                                <BiCartAdd className="product-cart-icon" />
                            </button>

                            <button onClick={() => handleViewDetails(product.id)} className="product-card-view-details">
                                <AiFillEye className="product-eye-icon" />
                            </button>

                            <button onClick={() => handleLikeProduct(product)} className="product-card-like-btn">
                                <FcLike />
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductList;
