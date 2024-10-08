import { FcLike } from "react-icons/fc";
import { GiShoppingCart } from "react-icons/gi";
import { useDispatch, useSelector } from "react-redux";
import { setCurrency } from "../../redux/slices/currnsySlice";
import { Link } from 'react-router-dom';
import beauty from "../../assets/beauty.png";
import { RootState } from "../../redux/type";
import TypingAnimation from './TypingAnimation';
import './header.css';

const Header: React.FC = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state: RootState) => state.cart.products.length);
  const like = useSelector((state: RootState) => state.like.likedProducts.length);
  const currency = useSelector((state: RootState) => state.currency.selected);

  return (
    <div>

      <header className="header">
        <div className="promo-banner">
          <h1>
            70€ sarf qilganda tanlangan buyumlarda 15% chegirma oling: <span>YAY</span>
          </h1>
        </div>
        <div className="header-container">
          <div className="header-logo">
            <Link to="/">
              <img src={beauty} alt="Beauty Bay" />
            </Link>
          </div>

          <div className="typing-container text-center py-2">
            <TypingAnimation />
          </div>

          <div className="header-icons">
            <Link to="/cart">
              <GiShoppingCart />
              <span>{cart}</span>
            </Link>
            <Link to="/like">
              <FcLike />
              <span>{like}</span>
            </Link>
            <select value={currency} onChange={(e) => dispatch(setCurrency(e.target.value))}>
              <option value="USD">USD</option>
              <option value="UZS">UZS</option>
            </select>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
