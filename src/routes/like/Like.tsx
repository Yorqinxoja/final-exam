import { useDispatch } from "react-redux";
import { unlikeProduct } from "../../redux/slices/LikeSlices";
import { useProductQuery } from "../../redux/api/usersApi";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import './Like.css';

const Like = () => {
  const dispatch = useDispatch();
  const likedProducts = useSelector((state: any) => state.like?.likedProducts || []);
  const { data: allProducts, isLoading } = useProductQuery();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!isLoading) {
      const timer = setTimeout(() => {
        setLoading(false);
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [isLoading]);

  const likedProductDetails = allProducts?.filter(product => likedProducts.includes(product.id));

  const handleDelete = (productId: number) => {
    dispatch(unlikeProduct(productId));
  };

  if (loading) {
    return (
      <div className="loading-container">
        <img src="https://i.gifer.com/kq9.gif" alt="Loading..." className="loading-gif" />
      </div>
    );
  }

  return (
    <div className="liked-products-container">
      <h2 className="liked-products-title">Liked Products</h2>
      {likedProductDetails && likedProductDetails.length > 0 ? (
        likedProductDetails.map((product) => (
          <div key={product.id} className="liked-product-card">
            <h3 className="liked-product-name">{product.name}</h3>
            <p className="liked-product-category">{product.category}</p>
            <p className="liked-product-price">${product.price}</p>
            <img src={product.image_link} alt={product.name} className="liked-product-image" />
            <button
              className="liked-product-delete-button"
              onClick={() => handleDelete(product.id)}
            >
              Delete
            </button>
          </div>
        ))
      ) : (
        <p className="no-liked-products-message">Liked products not found.</p>
      )}
    </div>
  );
};

export default Like;
