import { useState } from "react";
import "./slider.scss";

function Slider({ images }) {
  const [imageIndex, setImageIndex] = useState(null);

  const handleArrowClick = (direction) => {
    if (direction === "next") {
      setImageIndex((imageIndex + 1) % images.length);
    } else if (direction === "prev") {
      setImageIndex((imageIndex - 1 + images.length) % images.length);
    }
  };

  return (
    <>
      <div className="slider">
        {imageIndex != null && (
          <div className="fullSlider">
            <div className="arrow" onClick={() => handleArrowClick("prev")}>
              <img src="/arrow.png" alt="Previous" />
            </div>
            <div className="imgContainer">
              <img src={images[imageIndex]} alt="" />
            </div>
            <div className="arrow" onClick={() => handleArrowClick("next")}>
              <img src="/arrow.png" className="right" alt="Next" />
            </div>
            <div className="close" onClick={() => setImageIndex(null)}>
              X
            </div>
          </div>
        )}
        <div className="bigImage">
          <img src={images[0]} alt="" onClick={() => setImageIndex(0)} />
        </div>
        <div className="smallImages">
          {images.slice(1).map((image, index) => (
            <img
              src={image}
              alt=""
              key={index}
              onClick={() => setImageIndex(index + 1)}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Slider;
