import React, { useState, useEffect } from "react";
import Wrapper from "./DualSliderStyle";

const DualSlider = () => {
  const [position, setPosition] = useState(0);
  const [showLeft, setShowLeft] = useState(true);
  const [showRight, setShowRight] = useState(true);
  const [leftSliderImages, setLeftSliderImages] = useState([]);
  const [rightSliderImages, setRightSliderImages] = useState([]);

  useEffect(() => {
    fetch("https://gezte.com/api/fetch_full_name_package.php")
      .then((response) => response.json())
      .then((result) => {
        const first12Items = result.data.slice(0, 11);
        const second12Items = result.data.slice(12, 23);

        const leftSliderContent = first12Items.map((item) => ({
          imageUrl: `https://gezte.com/api/${item.image}`,
          packageFullName: item.package_full_name,
        }));

        const rightSliderContent = second12Items.map((item) => ({
          imageUrl: `https://gezte.com/api/${item.image}`,
          packageFullName: item.package_full_name,
        }));

        setLeftSliderImages(leftSliderContent);
        setRightSliderImages(rightSliderContent);
      })
      .catch((err) => console.error('Error fetching data:', err));
  }, []);

  const handleSliderNavigation = (direction) => {
    console.log(direction);
    if (
      (direction === -1 && showLeft && position >= 0) ||
      (direction === 1 && showRight && position < 7)
    ) {
      setPosition((prevPosition) => prevPosition + direction);
      setShowLeft(false);
      setShowRight(false);
    }
  };

  const handleLeftTransitionEnd = () => {
    setShowLeft(true);
  };

  const handleRightTransitionEnd = () => {
    setShowRight(true);
  };

  return (
    <Wrapper>
    <div
      style={{
        display: "flex",
        // flexDirection: "column",
        alignItems: "center",
        marginTop: "50px",
        gap: "20px",
        overflow:'hidden',
        backgroundColor: "rgb(39,46,58)",
        padding: "50px",
        paddingTop: "40px",
        paddingBottom: "40px",
      }}
    >
      <div style={{ display: "flex", alignItems: "center" }}>
        <div style={{ position: 'relative', width: '300px', height: '50px' }}>
          <button
            onClick={() => handleSliderNavigation(-1)}
            disabled={!showLeft}
            style={{
              position: "absolute",
              left: '51rem',
              top: "50%",
              transform: "translateY(-40%)",
              width: "50px",
              height: "50px",
              borderRadius: "90%",
              fontSize: "40px",
              zIndex: 1,
            }}
          >
            {"<"}
          </button>
        </div>

        <div
          style={{
            width: "100%",
            overflow: "hidden",
            margin: "0 10px",
            display: "flex",
            gap: "10px",
            // flexDirection: "column",
          }}
        >
          <div
            style={{
              display: "flex",
              transition: "transform 0.5s ease",
              transform: `translateX(-${position * 200}px)`,
            }}
            onTransitionEnd={handleLeftTransitionEnd}
          >
            {leftSliderImages.map((item, index) => (
              <div key={index} style={{ position: 'relative', width: '200px', height: '200px', marginBottom: '10px', marginRight: '10px' }}>
                <img
                  src={item.imageUrl}
                  alt={`Left Image ${index + 1}`}
                  style={{ width: '100%', height: '100%', borderRadius: '8px' }}
                />
                <div style={{ position: 'absolute', bottom: '0', left: '0', right: '0', backgroundColor: 'rgba(0, 0, 0, 0.5)', color: '#fff', padding: '5px', borderRadius: '0 0 8px 8px' }}>
                  {item.packageFullName}
                </div>
              </div>
            ))}
          </div>
          <div
            style={{
              display: "flex",
              transition: "transform 0.5s ease",
              transform: `translateX(-${position * 200}px)`,
            }}
            onTransitionEnd={handleRightTransitionEnd}
          >
            {rightSliderImages.map((item, index) => (
              <div key={index} style={{ position: 'relative', width: '200px', height: '200px', marginBottom: '10px', marginRight: '10px' }}>
                <img
                  src={item.imageUrl}
                  alt={`Right Image ${index + 1}`}
                  style={{ width: '100%', height: '100%', borderRadius: '8px' }}
                />
                <div style={{ position: 'absolute', bottom: '0', left: '0', right: '0', backgroundColor: 'rgba(0, 0, 0, 0.5)', color: '#fff', padding: '5px', borderRadius: '0 0 8px 8px' }}>
                  {item.packageFullName}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div style={{ position: 'relative', width: '300px', height: '50px' }}>
          <button
            onClick={() => handleSliderNavigation(1)}
            disabled={!showRight}
            style={{
              position: "absolute",
              right: '49rem',
              top: "50%",
              transform: "translateY(-50%)",
              width: "50px",
              height: "50px",
              borderRadius: "90%",
              fontSize: "40px",
              zIndex: 1,
            }}
          >
            {">"}
          </button>
        </div>

      </div>
    </div>
    </Wrapper>
  );
};

export default DualSlider;


