// import { FcLike } from "react-icons/fc";
// import { useProductQuery } from "../../redux/api/usersApi";
// import { Product } from "../../redux/type";
// import { useDispatch } from "react-redux";
// import { addToCart } from "../../redux/slices/cartSlices";
// import { likeProduct } from "../../redux/slices/LikeSlices";
// import { useSelector } from "react-redux";
// import { RootState } from '../../redux/type';
// import { useNavigate } from "react-router-dom";
// import { BiCartAdd } from "react-icons/bi";
// import { AiFillEye } from "react-icons/ai";
// import "./products.css";

// const Products = () => {
//     const navigate = useNavigate();
//     const { data, isLoading, error } = useProductQuery();
//     const dispatch = useDispatch();
//     const currency = useSelector((state: RootState) => state.currency.selected);

//     const handleAddToCart = (product: Product) => {
//         dispatch(addToCart(product));
//     };

//     const handleLikeProduct = (product: Product) => {
//         dispatch(likeProduct(product.id));
//     };

//     const formatPrice = (price: string) => {
//         const numericPrice = parseFloat(price);
//         if (isNaN(numericPrice)) return "";

//         if (currency === "UZS") {
//             return (numericPrice * 12600).toLocaleString() + " UZS";
//         }
//         return "$" + numericPrice.toFixed(2);
//     };

//     const handleViewDetails = (productId: number) => {
//         navigate(`/details/${productId}`);
//     };

//     if (isLoading) return <p>LOADING...</p>;
//     if (error) return <p>ERROR TRY AGAIN!</p>;

//     return (
//         <div className="products-container">
//             <h2 className="products-title">TOP PRODUCTS</h2>

//             <div className="products-grid">
//                 {data?.slice(138, 142).map((product: Product) => (
//                     <div key={product.id} className="product-card">
//                         <div className="product-image">
//                             <img src={product.image_link} alt={product.name} />
//                         </div>

//                         <div className="product-info">
//                             <h3>{product.name}</h3>
//                             <p>{product.category}</p>
//                             <p className="product-price">{formatPrice(product.price)}</p>
//                             <p className="product-description">{product.description}</p>
//                         </div>
//                         <div className="product-actions">
//                             <button onClick={() => handleAddToCart(product)} className="add-to-cart">
//                                 <BiCartAdd className="cart-icon" />
//                                 Add to card
//                             </button>

//                             <button onClick={() => handleViewDetails(product.id)} className="view-details">
//                                 <AiFillEye className="eye-icon" /> See product
//                             </button>

//                             <button onClick={() => handleLikeProduct(product)} className="like-button">
//                                 <FcLike />
//                             </button>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default Products;


import { useState } from "react";
import { FcLike } from "react-icons/fc";
import { useProductQuery } from "../../redux/api/usersApi";
import { Product } from "../../redux/type";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/slices/cartSlices";
import { likeProduct } from "../../redux/slices/LikeSlices";
import { useSelector } from "react-redux";
import { RootState } from '../../redux/type';
import { useNavigate } from "react-router-dom";
import { BiCartAdd } from "react-icons/bi";
import { AiFillEye } from "react-icons/ai";
import "./products.css";

const Products = () => {
    const [likedProducts, setLikedProducts] = useState<number[]>([]); // State to track liked products
    const navigate = useNavigate();
    const { data, isLoading, error } = useProductQuery();
    const dispatch = useDispatch();
    const currency = useSelector((state: RootState) => state.currency.selected);

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

        if (currency === "UZS") {
            return (numericPrice * 12600).toLocaleString() + " UZS";
        }
        return "$" + numericPrice.toFixed(2);
    };

    const handleViewDetails = (productId: number) => {
        navigate(`/details/${productId}`);
    };

    if (isLoading) return <p>LOADING...</p>;
    if (error) return <p>ERROR TRY AGAIN!</p>;

    return (
        <div className="products-container">
            <h2 className="products-title">TOP PRODUCTS</h2>

            <div className="products-grid">
                {data?.slice(138, 142).map((product: Product) => (
                    <div
                        key={product.id}
                        className={`product-card ${likedProducts.includes(product.id) ? 'liked' : ''}`} // Apply 'liked' class if liked
                    >
                        <div className="product-image">
                            <img src={product.image_link} alt={product.name} />
                        </div>

                        <div className="product-info">
                            <h3>{product.name}</h3>
                            <p>{product.category}</p>
                            <p className="product-price">{formatPrice(product.price)}</p>
                            <p className="product-description">{product.description}</p>
                        </div>
                        <div className="product-actions">
                            <button onClick={() => handleAddToCart(product)} className="add-to-cart">
                                <BiCartAdd className="cart-icon" />
                                Add to card
                            </button>

                            <button onClick={() => handleViewDetails(product.id)} className="view-details">
                                <AiFillEye className="eye-icon" /> See product
                            </button>

                            <button onClick={() => handleLikeProduct(product)} className="like-button">
                                <FcLike />
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Products;
