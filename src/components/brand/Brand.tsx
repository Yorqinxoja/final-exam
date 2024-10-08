import by from "../../assets/by.png";
import ave from "../../assets/ave.png";
import jos from "../../assets/jos.png";
import skin from "../../assets/skin.png";
import mie from "../../assets/mie.png";
import cera from "../../assets/cera.png";
import hair from "../../assets/hair.png";
import "./Brand.css";
import { useRef } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const Brand = () => {
  const sliderRef = useRef(null);

  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollLeft -= 300;
    }
  };

  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollLeft += 300;
    }
  };

  return (
    <div className="brand-container">
      <h1 className="brand-title">SHOP by BRAND</h1>

      <button className="slider-btn left" onClick={scrollLeft}>
        <FiChevronLeft />
      </button>

      <div className="brand-slider" ref={sliderRef}>
        {[
          { img: by, name: "BY BEAUTY BAY" },
          { img: ave, name: "AVENE" },
          { img: jos, name: "BEAUTY OF JOSEON" },
          { img: skin, name: "SKIN1004" },
          { img: mie, name: "MIELLE ORGANICS" },
          { img: cera, name: "CERAVE" },
          { img: hair, name: "HAIRMAX" },
          { img: by, name: "BY BEAUTY BAY" },
          { img: ave, name: "AVENE" },
          { img: jos, name: "BEAUTY OF JOSEON" },
          { img: skin, name: "SKIN1004" },
          { img: mie, name: "MIELLE ORGANICS" },
          { img: cera, name: "CERAVE" },
          { img: hair, name: "HAIRMAX" },
          { img: by, name: "BY BEAUTY BAY" },
          { img: ave, name: "AVENE" },
          { img: jos, name: "BEAUTY OF JOSEON" },
          { img: skin, name: "SKIN1004" },
          { img: mie, name: "MIELLE ORGANICS" },
        ].map((brand, index) => (
          <div key={index} className="brand-card">
            <img src={brand.img} alt={brand.name} className="brand-image" />
            <h1 className="brand-name">{brand.name}</h1>
          </div>
        ))}
      </div>

      <button className="slider-btn right" onClick={scrollRight}>
        <FiChevronRight />
      </button>
    </div>
  );
};

export default Brand;
