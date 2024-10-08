import { useState, useRef } from "react";
import { FaVolumeMute, FaVolumeUp } from "react-icons/fa";
import video from "../../assets/video1.mp4";
import './banner.css';

const Banner = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isMuted, setIsMuted] = useState(true);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <div className="video-container">
      <video
        ref={videoRef}
        src={video}
        autoPlay
        loop
        muted={isMuted}
        playsInline
      ></video>

      <div className="video-overlay"></div>

      <button
        onClick={toggleMute}
        className="mute-button"
      >
        {isMuted ? <FaVolumeMute /> : <FaVolumeUp />}
      </button>

      <div className="banner-text">
        <h1 className="banner-title">
          Discover the Latest in Makeup
        </h1>
        <p className="banner-description">
          Explore our wide range of beauty products.
        </p>
      </div>
    </div>
  );
};

export default Banner;

