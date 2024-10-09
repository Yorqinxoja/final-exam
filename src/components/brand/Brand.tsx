import by from "../../assets/by.png";
import ave from "../../assets/ave.png";
import jos from "../../assets/jos.png";
import skin from "../../assets/skin.png";
import "./Brand.css";
import { useRef } from "react";

const Brand = () => {
  const sliderRef = useRef(null);



  return (
    <div className="brand-container">
      <h1 className="brand-title">SHOP by BRAND</h1>


      <div className="brand-slider" ref={sliderRef}>
        {[
          { img: by, name: "BY BEAUTY BAY" },
          { img: ave, name: "AVENE" },
          { img: jos, name: "BEAUTY OF JOSEON" },
          { img: skin, name: "SKIN1004" },

        ].map((brand, index) => (
          <div key={index} className="brand-card">
            <img src={brand.img} alt={brand.name} className="brand-image" />
            <h1 className="brand-name">{brand.name}</h1>
          </div>
        ))}
      </div>

    </div>
  );
};

export default Brand;
