import { useSelector, useDispatch } from "react-redux";
import { clearCartItem } from "../../redux/slices/cartSlices";
import { RootState } from '../../redux/type';
import { useEffect, useState } from "react";
import './card.css';

const Card = () => {
  const cart = useSelector((state: any) => state.cart);
  const dispatch = useDispatch();
  const currency = useSelector((state: RootState) => state.currency.selected);

  const formatPrice = (price: number | string) => {
    const numericPrice = typeof price === 'string' ? parseFloat(price) : price;
    if (isNaN(numericPrice)) return "";

    if (currency === "UZS") {
      return (numericPrice * 12700).toLocaleString() + " UZS";
    }
    return "$" + numericPrice.toFixed(2);
  };

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="loading-container">
        <img src="https://i.gifer.com/kq9.gif" alt="Loading..." className="loading-gif" />
      </div>
    );
  }

  return (
    <div className="cart-container">
      <h2 className="cart-title">Your Cart</h2>

      {cart.products.length === 0 ? (
        <div className="empty-cart">
          <h3>Your cart is empty</h3>
          <p>Start adding some products!</p>
        </div>
      ) : (
        <div className="cart-items">
          {cart.products.map((product: any) => (
            <div key={product.id} className="cart-item">
              <div className="cart-item-info">
                <img
                  src={product.image_link}
                  alt={product.name}
                  className="cart-item-image"
                />
                <div>
                  <h3 className="cart-item-name">{product.name}</h3>
                  <p className="cart-item-price">{formatPrice(product.price)}</p>
                  <p className="cart-item-quantity">Quantity: {product.quantity}</p>
                  <p className="cart-item-total">
                    Total: {formatPrice(product.price * product.quantity)}
                  </p>
                </div>
              </div>

              <div className="cart-item-actions">
                <button
                  onClick={() => dispatch(clearCartItem(product))}
                  className="cart-button clear-button"
                >
                  Clear
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Card;
