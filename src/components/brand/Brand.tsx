import byBeautyBay from "../../assets/by.png";
import avene from "../../assets/ave.png";
import beautyOfJoseon from "../../assets/jos.png";
import skin1004 from "../../assets/skin.png";
import mielleOrganics from "../../assets/mie.png";
import cerave from "../../assets/cera.png";
import hairMax from "../../assets/hair.png";
import { useRef } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import "./Brand.css";

interface BrandType {
  img: string;
  name: string;
}

const brands: BrandType[] = [
  { img: byBeautyBay, name: "BY BEAUTY BAY" },
  { img: avene, name: "AVENE" },
  { img: beautyOfJoseon, name: "BEAUTY OF JOSEON" },
  { img: skin1004, name: "SKIN1004" },
  { img: mielleOrganics, name: "MIELLE ORGANICS" },
  { img: cerave, name: "CERAVE" },
  { img: hairMax, name: "HAIRMAX" },
  { img: beautyOfJoseon, name: "BEAUTY OF JOSEON" },
  { img: skin1004, name: "SKIN1004" },
  { img: mielleOrganics, name: "MIELLE ORGANICS" },
  { img: avene, name: "AVENE" },
  { img: beautyOfJoseon, name: "BEAUTY OF JOSEON" },
  { img: byBeautyBay, name: "BY BEAUTY BAY" },
];

const Brand = () => {
  const sliderRef = useRef<HTMLDivElement | null>(null);

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
      <h1 className="brand-title">SHOP BY BRAND</h1>

      <button className="slider-btn left" onClick={scrollLeft}>
        <FiChevronLeft />
      </button>

      <div className="brand-slider" ref={sliderRef}>
        {brands.map((brand, index) => (
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
