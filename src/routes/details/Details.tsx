import { useParams } from "react-router-dom";
import { useViewdeatesQuery } from "../../redux/api/usersApi";
import { RootState } from '../../redux/type';
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../../redux/slices/cartSlices";
import { Product } from "../../redux/type";
import { useState } from "react";
import './Details.css';

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
            (numericPrice * 12700).toLocaleString() + " UZS" :
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
            <div className="loading-container">
                <img src="https://i.gifer.com/kq9.gif" alt="Loading..." className="loading-gif" />
            </div>
        );
    }

    if (error) {
        return <p className="error-message">ERROR!</p>;
    }

    if (!data) {
        return <p className="not-found-message">NOT FOUND!</p>;
    }

    const product = data;

    return (
        <div className="details-container">
            <div className="details-content">
                <div className="image-container">
                    <img
                        src={product.image_link}
                        alt={product.name}
                        className="product-image"
                    />
                </div>
                <div className="info-container">
                    <h2 className="product-name">{product.name}</h2>
                    <p className="product-category">{product.category}</p>
                    <p className="product-price">{formatPrice(product.price)}</p>
                    <p className="product-description">{product.description}</p>
                    <button
                        onClick={() => handleAddToCart(product)}
                        className={`add-to-cart-button ${isAdding ? "disabled" : ""}`}
                        disabled={isAdding}
                    >
                        {isAdding ? "LOADING..." : "Add to cart"}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Details;
