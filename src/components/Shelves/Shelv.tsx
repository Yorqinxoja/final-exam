import { useState, useRef } from "react";
import { Product } from "../../redux/type";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from '../../redux/type';
import { useNavigate } from "react-router-dom";
import { useProductQuery } from "../../redux/api/usersApi";
import { addToCart } from "../../redux/slices/cartSlices";
import { likeProduct } from "../../redux/slices/LikeSlices";
import { BiCartAdd } from "react-icons/bi";
import { AiFillEye } from "react-icons/ai";
import { FcLike } from "react-icons/fc";
import "./Shelv.css";

const Products = () => {
    const [likedProducts, setLikedProducts] = useState<number[]>([]);
    const navigate = useNavigate();
    const { data, isLoading, error } = useProductQuery();
    const dispatch = useDispatch();
    const currency = useSelector((state: RootState) => state.currency.selected);
    const sliderRef = useRef<HTMLDivElement>(null);

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

    const formatPrice = (price: string) => {
        const numericPrice = parseFloat(price);
        if (isNaN(numericPrice)) return "";
        return currency === "UZS"
            ? (numericPrice * 12700).toLocaleString() + " UZS"
            : "$" + numericPrice.toFixed(2);
    };

    const handleViewDetails = (productId: number) => {
        navigate(`/details/${productId}`);
    };

    const scrollLeft = () => {
        sliderRef.current?.scrollBy({ left: -300, behavior: 'smooth' });
    };

    const scrollRight = () => {
        sliderRef.current?.scrollBy({ left: 300, behavior: 'smooth' });
    };

    if (isLoading) return <p>LOADING...</p>;
    if (error) return <p>ERROR TRY AGAIN!</p>;

    return (
        <div className="products-wrapper">
            <h2 className="products-heading">Flying off the shelves</h2>

            <div className="slider-wrapper">
                <button className="slider-arrow arrow-left" onClick={scrollLeft}>{"<"}</button>

                <div className="product-list" ref={sliderRef}>
                    {data?.slice(128, 140).map((product: Product) => (
                        <div
                            key={product.id}
                            className={`product-item ${likedProducts.includes(product.id) ? 'liked' : ''}`}
                        >
                            <div className="product-thumbnail">
                                <img src={product.image_link} alt={product.name} />
                            </div>
                            <div className="product-details">
                                <h3>{product.name}</h3>
                                <p>{product.category}</p>
                                <p className="product-cost">{formatPrice(product.price)}</p>
                            </div>
                            <div className="product-action-buttons">
                                <button onClick={() => handleAddToCart(product)} className="add-cart-btn">
                                    <BiCartAdd className="cart-icon" /> Add to cart
                                </button>
                                <button onClick={() => handleViewDetails(product.id)} className="view-details-btn">
                                    <AiFillEye className="eye-icon" /> See product
                                </button>
                                <button onClick={() => handleLikeProduct(product)} className="like-btn">
                                    <FcLike />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                <button className="slider-arrow arrow-right" onClick={scrollRight}>{">"}</button>
            </div>
        </div>
    );
};

export default Products;
