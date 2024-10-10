import { BsInstagram, BsFacebook, BsArrowRight } from "react-icons/bs";
import { AiFillTwitterCircle } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";
import { FaTiktok } from "react-icons/fa";
import logo from '../../assets/logo2.jpg';
import './Footer.css';

const Footer = () => {
    return (
        <div className="footer-container">
            <div className="footer-content">
                <div className="footer-column">
                    <img src={logo} alt="Company Logo" className="footer-logo" />
                </div>

                <div className="footer-column">
                    <h1 className="footer-title">Help & Information</h1>
                    <ul className="footer-list">
                        <li>Delivery & Returns</li>
                        <li>Contact Us & FAQ's</li>
                        <li>About Us</li>
                    </ul>
                </div>

                <div className="footer-column">
                    <h1 className="footer-title">Legal</h1>
                    <ul className="footer-list">
                        <li>Terms & Conditions</li>
                        <li>TRIBE Terms</li>
                        <li>Website Terms of Use</li>
                        <li>Privacy</li>
                        <li>Anti-Slavery</li>
                        <li>Cookies</li>
                        <li>Manage Preferences</li>
                    </ul>
                </div>

                <div className="footer-column">
                    <h1 className="footer-title">No Spam, Just Beauty</h1>
                    <p className="footer-text">
                        Let’s stay in touch! We promise to send you the latest news, offers, and the freshest beauty drops, straight to your inbox.
                    </p>
                    <div className="footer-input-container">
                        <input
                            type="text"
                            placeholder="Your Email"
                            className="footer-input"
                        />
                        <button className="footer-arrow">
                            <BsArrowRight className="arrow-icon" />
                        </button>
                    </div>
                    <div className="footer-icons">
                        <BsFacebook className="footer-icon" />
                        <BsInstagram className="footer-icon" />
                        <AiFillTwitterCircle className="footer-icon" />
                        <FaTiktok className="footer-icon" />
                        <AiFillYoutube className="footer-icon" />
                    </div>
                </div>
            </div>

            <hr className="footer-divider" />

            <div className="footer-bottom">
                <div className="footer-text-container">
                    <p className="footer-text-bottom">Copyright © 2024 BEAUTY BAY Ltd.</p>
                    <p className="footer-text-bottom">
                        Registered office address Level 12, 5 Exchange Quay, M5 3EF. Registered in England, company registration number 6427672, VAT number GB 927197591.
                    </p>
                </div>

                <div className="footer-payments">
                    <a href="https://www.paypal.com" target="_blank" rel="noopener noreferrer">
                        <img src="https://images.ctfassets.net/eoaaqxyywn6o/6rDEb4sJOBkiIga3rkaSfA/b705c283f12f64d22365f9d168d2e9be/PayPal.svg" alt="PayPal" className="payment-icon" />
                    </a>
                    <a href="https://www.klarna.com" target="_blank" rel="noopener noreferrer">
                        <img src="https://images.ctfassets.net/eoaaqxyywn6o/y8QrCXyaUnAPeqGSkYBXT/dcd21c778833eed8062c9707784ea812/Klarna.svg" alt="Klarna" className="payment-icon" />
                    </a>
                    <a href="https://www.apple.com/apple-pay/" target="_blank" rel="noopener noreferrer">
                        <img src="https://images.ctfassets.net/eoaaqxyywn6o/10YPF40EuGghbMiM8dvfZ4/604c660dfd975959ded92967d5acdd68/Apple.svg" alt="Apple Pay" className="payment-icon" />
                    </a>
                    <a href="https://www.visa.com" target="_blank" rel="noopener noreferrer">
                        <img src="https://images.ctfassets.net/eoaaqxyywn6o/4QTzSyV3E2jIfll4u3GgIW/46acc6659798376dc8bb416454f2baba/Visa.svg" alt="Visa" className="payment-icon" />
                    </a>
                    <a href="https://www.americanexpress.com" target="_blank" rel="noopener noreferrer">
                        <img src="https://images.ctfassets.net/eoaaqxyywn6o/1R0NBLVCShxTQNVHNjanE4/c970e9e15ecbb026929000ae3fcce6ae/Amex.svg" alt="Amex" className="payment-icon" />
                    </a>
                    <a href="https://www.mastercard.com" target="_blank" rel="noopener noreferrer">
                        <img src="https://images.ctfassets.net/eoaaqxyywn6o/5bs4r6UiioP3Fkj4Qg35o8/5583c0ecc4b6500a1083fd38cfabf6dc/Mastercard.svg" alt="Mastercard" className="payment-icon" />
                    </a>
                    <a href="https://www.maestrocard.com" target="_blank" rel="noopener noreferrer">
                        <img src="https://images.ctfassets.net/eoaaqxyywn6o/5IdXqCmgjNCVwZNyssRsdE/702c37ee931258aad2071e063bbd337e/Maestro.svg" alt="Maestro" className="payment-icon" />
                    </a>
                </div>

            </div>
        </div>
    );
};

export default Footer;
