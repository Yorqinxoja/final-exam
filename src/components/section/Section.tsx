import imgss from "../../assets/imgss.png";
import { FiArrowRight } from "react-icons/fi";
import "./section.css";

const Section = () => {
  return (
    <div className="section-container">
      <div className="text-container">
        <h1 className="title">NEW BEAUTY BAY PRODUCT...</h1>
        <p className="description">
          Our BEAUTY BAY festive boxes are on their way. Be the first to hear when they land and join our waitlist.
        </p>
        <span className="coming-soon">
          COMING SOON <FiArrowRight className="arrow-icon" />
        </span>
      </div>
      <div className="image-container">
        <img src={imgss} alt="Beauty Bay Boxes" className="image" />
      </div>
    </div>
  );
};

export default Section;
